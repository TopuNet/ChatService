/* chat页路由
    高京
    2017-05-04
*/

var router = require("express").Router(),
    async = require("async"),
    func = require("../../handle/functions"),
    mongo = require("../../handle/mongodb"),
    chat_config = require("../../handle/chat_config"),
    getRecord_handler = require("../../handle/getRecords"),
    RECORD_COUNT = 10; // 每次读取历史记录的条数

// 生成token
var create_Token = function() {

};

// 暂时没用
// 验证客服token，错误跳往登录页，正确返回sid并更新token，重写cookie
// callback(err,sid)
var check_Servicer_Token = function(callback) {

    // 从cookie中获得token
    var getTokenByCookie = function(_callback) {
        _callback(null);
    };

    // 用token换取sid
    var getSidByToken = function(_callback) {
        _callback(null);
    };

    // 生成新token
    var getNewToken = function(_callback) {
        create_Token();
        _callback(null);
    };

    // 更新库中token和有效期
    var updateToken = function(_callback) {
        _callback(null);
    };

    // token写入cookie
    var writeCookie = function(_callback) {
        _callback(null, 1, "客服001");
    };

    // 执行async
    async.waterfall([
        getTokenByCookie, // 从cookie中获得token
        getSidByToken, // 用token换取sid
        getNewToken, // 生成新token
        updateToken, // 更新库中token和有效期
        writeCookie // token写入cookie
    ], function(err, sid, sname) {
        callback(err, sid, sname);
    });
};

// 会话列表页
router.get("/", function(req, res) {

    var db;

    // 地址栏
    var cid; // 客户id

    // 获得参数
    var getParameters = function(callback) {
        cid = func.filterNoNum(req.query.cid);

        callback(null);
    };

    // 获得会话列表
    var getChats = function(_db, callback) {

        db = _db;

        var collection_chats = db.collection("chats");

        collection_chats.find({
            "cid": cid
        }).sort([
            ["last_timestamp", -1]
        ]).toArray(function(err, chats) {
            if (err) {
                console.log("\n\nchat", 90, "err:\n", err);
                callback(err);
            } else {
                // console.log("\n\nchat",93,"chats:\n",chats);
                callback(null, chats);
            }
        });
    };

    // 获得分类列表
    var getSorts = function(chats, callback) {

        chat_config.getSort(req.query, function(err, sort) {

            if (err) {
                console.log("\n\nchat", 109, "err:\n", err);
                callback(err);
            } else {

                callback(null, chats, sort[0].list);
            }
        });
    };

    // 处理chats
    var dealChats = function(chats, sorts, callback) {
        if (chats.length) {
            var sort,
                sort_str;
            chats.forEach(function(chat) {
                sort = chat.sort.replace(/></ig, ",").replace(/[><]/ig, "").split(',');

                chat.sort_first = sort[0];

                // 获得对应的分类名称
                sort_str = "";
                sort.forEach(function(s) {
                    sorts.some(function(ss) {
                        if (ss.Scid == s) {
                            if (sort_str !== "")
                                sort_str += ",";
                            sort_str += ss.Ctitle;
                            return true;
                        }
                    });
                });
                chat.sort_str = sort_str;
            });
        }

        callback(null, chats);
    };

    async.waterfall([
        getParameters,
        mongo.connect_async,
        getChats,
        getSorts,
        dealChats
    ], function(err, chats) {

        db.close();

        var render_para = {
            err: err,
            cid: cid,
            comm_chat_list_template: chats,
            comm_chat_list_template_source: "chat_list",
            GLOBAL_SOCKET_URL: chat_config.GLOBAL_SOCKET_URL,
            client_title: chat_config.client_title
        };

        res.render("Chat/chat_list.html", render_para);
    });

});

// 会话页
router.get("/chat", function(req, res) {
    // var fs = require("fs");

    // [地址栏] 访问者种类: 1-客户 2-客服
    var kind = 1;

    // [地址栏] 客户id
    var cid = "";

    // [地址栏] 商户id，-1为平台
    var bid = 0;

    // [地址栏] 咨询分类
    var sort = -1;

    // [地址栏] 客服id
    // var sid = "";

    // 客户姓名
    var cname = "";

    // 客户头像
    var c_headimg = "/inc/chat_login_icon.png";

    // 客服姓名
    var sname = "";

    // 客服头像
    // var s_headimg = "";

    var db;

    // 获取地址栏
    var getParameters = function(callback) {

        kind = req.query.kind || 1;
        kind = parseFloat(kind) || 1;
        if (kind != 2)
            kind = 1;

        cid = req.query.cid || "";

        bid = req.query.bid || 0;
        bid = parseFloat(bid) || 0;

        sort = req.query.sort || -1;

        callback(null);
    };

    // 进行一系列验证并获取会话
    // db: mongodb连接对象
    var get_chat = function(_db, callback) {


        db = _db;

        // 会话集合
        var collection_chats = db.collection("chats");

        // 客服集合
        var collection_servicers = db.collection("servicers");

        // console.log("\n\nchat", 73, "collection\n", collection_waiting);

        if (cid === "" || bid === 0 || sort === -1)
            res.send("line 112: 参数不正确" + kind + ":" + cid + ":" + bid + ":" + sort);
        else {


            // 可以通过restful api接口验证客户合法性和获得客户昵称、头像。
            var api_result = function() {

                cname = "客户";

                // 根据cid+bid+sort查找会话，没有则创建
                var find_chat = function(api_result_callback) {
                    // console.log("\n\nchat", 139, "cid:", cid, "\nbid:", bid, "\nsort", sort);
                    collection_chats.find({ "cid": cid, "bid": bid, "sort": eval("/<" + sort + ">/ig") }).next(function(err, chat) {

                        // console.log("\n\nchat", 142, "chat:\n", chat);

                        // 没有则添加
                        if (!chat) {

                            // 指派客服
                            var appoint_servicer = function(_callback) {

                                // 获得该商户+该分类全部客服
                                var get_servicers = function(__callback) {

                                    var result_deal = function(err, servicers) {
                                        // console.log("\n\nroutes chat", 149, "err:\n", err);
                                        // console.log("\n\nroutes chat", 150, "servicers:\n", servicers);
                                        if (err || !servicers.length || servicers.length === 0) {
                                            api_result_callback("noServicers");
                                        } else {
                                            __callback(null, servicers);
                                        }
                                    };

                                    collection_servicers.find({
                                        alive: true,
                                        bid: bid,
                                        sort: eval("/<" + sort + ">/ig")
                                    }).toArray(function(err, servicers) {
                                        result_deal(err, servicers);
                                    });
                                    // eval("collection_servicers.find({ \"alive\": true, \"bid\": bid, \"sort\": /<" + sort + ">/ }).toArray(function(err,servicers){result_deal(err, servicers);});");
                                };

                                // 获得会话数量最少的客服
                                var get_chats_count = function(servicers, __callback) {

                                    // console.log("\n\nchat", 152, "servicers:\n", servicers);

                                    collection_chats.group(
                                        ["sid"], {}, { "count": 0 },
                                        "function(now, prev) {prev.count++;}",
                                        function(err, r) {
                                            // console.log("\n\nchat", 158, "r\n", r);


                                            var count_min = null, // 当前最少会话数。遍历时当有客服会话数小于此值时，则更新
                                                servicer; // 会话数最少的客服

                                            // 判断客服的会话数量是否为最少，是的话更新count_min和servicer两个变量
                                            var check_count_min = function(_servicer) {
                                                // console.log("\n\nchat", 166, "_servicer:\n", _servicer);
                                                // console.log("\n\nchat", 167, "count_min:", count_min, "_servicer.count:", _servicer.count, "!count_min:", (!count_min), "_servicer.count<count_min:", (_servicer.count < count_min));
                                                if (count_min === null || _servicer.count < count_min) {
                                                    servicer = _servicer;
                                                    count_min = _servicer.count;
                                                }
                                            };


                                            servicers.forEach(function(s) {
                                                // console.log("\n\nchat", 177, "s:\n", s);
                                                s.count = 0;
                                                r.some(function(_r, _index) {
                                                    // console.log(index, _index);
                                                    // console.log("\n\nchat", 180, "s._id==_r.sid:", s._id, s._id.toString() == _r.sid.toString(), _r.sid);
                                                    if (s._id.toString() == _r.sid.toString()) {
                                                        s.count = _r.count;
                                                        r.splice(_index, 1);
                                                        // check_count_min(s);
                                                        return true;
                                                    }
                                                });
                                                check_count_min(s);
                                            });

                                            __callback(null, servicer);

                                            // console.log("\n\nchat", 138, "servicers\n", servicers);
                                            // console.log("\n\nchat", 146, "servicer\n", servicer);
                                        }
                                    );
                                };

                                // 执行async
                                async.waterfall([
                                    get_servicers, // 获得全部客服
                                    get_chats_count // 遍历客服，获得会话数量
                                ], function(err, servicer) {
                                    _callback(null, servicer);
                                });
                            };

                            // 验证客户和客服间是否已有会话
                            var validChatRepeat = function(servicer, _callback) {
                                collection_chats.find({ "cid": cid, "sid": servicer._id }).next(function(err, chat) {
                                    if (chat) {
                                        collection_chats.updateOne({
                                            "_id": mongo.ObjectID(chat._id)
                                        }, {
                                            $set: { "sort": chat.sort + "<" + sort + ">" }
                                        }, function() {
                                            api_result_callback(null, chat);
                                        });
                                    } else {
                                        _callback(null, servicer);
                                    }
                                });
                            };

                            // 拉取客户信息
                            var getClientInfo = function(servicer, _callback) {
                                // _callback(null, servicer, client);
                                chat_config.getClientInfo(cid, req.query, function(err, _client) {
                                    var client = {
                                        nickname: cname + "_" + cid,
                                        headimg: c_headimg
                                    };
                                    if (!err) {
                                        // console.log("chat",223,"_client.headimg")
                                        client.nickname = _client.detail.Mname !== "" ? _client.detail.Mname : _client.detail.Nickname;
                                        client.headimg = _client.detail.Head_img === "" ? c_headimg : _client.detail.Head_img;
                                    }
                                    _callback(err, servicer, client);
                                });
                            };

                            // 添加会话
                            var add_chat = function(servicer, client, _callback) {
                                // console.log("\n\nchat", 230, "client:\n", client);

                                chat = {
                                    "cid": cid,
                                    "client": client,
                                    "bid": bid,
                                    "sid": servicer._id,
                                    "sort": "<" + sort + ">",
                                    "servicer": {
                                        "nickname": servicer.nickname,
                                        "headimg": servicer.headimg
                                    },
                                    "has_noRead_record_client": false,
                                    "has_noRead_record_servicer": false
                                };
                                collection_chats.insertOne(chat, function(err) {
                                    _callback(err, chat);
                                });
                            };

                            // 执行async
                            async.waterfall([
                                appoint_servicer, // 指派客服
                                validChatRepeat, // 验证客户和客服间是否已有会话
                                getClientInfo, // 拉取客户信息
                                add_chat // 添加会话
                            ], function(err, chat) {
                                api_result_callback(err, chat);
                            });
                        } else {
                            api_result_callback(null, chat);
                        }

                    });
                };

                // kind=2时，比对sid。
                var check_servicer = function(chat, api_result_callback) {

                    if (kind != 2) {
                        api_result_callback(null, chat);
                    } else {

                        // 比对sid
                        var check_sid = function(_sid, _sname, _callback) {
                            if (chat.sid !== _sid)
                                _callback("sidError");
                            else {
                                sname = _sname;
                                _callback(null, chat);
                            }

                        };

                        // 执行async
                        async.waterfall([
                            check_Servicer_Token, // 验证客服token，错误跳往登录页，正确返回sid并更新token，重写cookie
                            check_sid // 比对sid
                        ], function(err, _chat) {
                            api_result_callback(err, _chat);
                        });
                    }
                };

                var clear_client_record = function(chat, api_result_callback) {
                    if (chat) {
                        collection_chats.updateOne({
                            "_id": chat._id
                        }, {
                            $set: { "has_noRead_record_client": false }
                        }, function() {
                            chat.has_noRead_record_client = false;
                            api_result_callback(null, chat);
                        });
                    }

                };

                // async
                async.waterfall([
                    find_chat,
                    check_servicer,
                    clear_client_record,
                ], function(err, chat) {
                    callback(err, chat);
                });

            };

            api_result();
        }
    };

    // 获得消息记录
    var get_records = function(chat, callback) {
        var collection_records = db.collection("records");

        collection_records.find({
                cid: chat.cid.toString(),
                sid: chat.sid.toString()
            }).sort([
                ["timestamp", -1],
                ["_id", -1]
            ]).limit(RECORD_COUNT)
            .toArray(function(err, arr) {

                var records = [];

                if (err) {
                    arr = [];
                } else {
                    // 把顺序调个个儿
                    var i = arr.length - 1;
                    for (; i >= 0; i--) {
                        records.push(arr[i]);
                    }
                }

                callback(null, chat, records);
            });
    };

    // async
    async.waterfall([
        getParameters, // 获取地址栏
        mongo.connect_async, // 数据库连接
        get_chat, // 进行一系列验证并获取会话
        get_records // 获取records
    ], function(err, chat, records) {

        db.close();

        // console.log("\n\nchat", 318, "chat\n", chat);

        var render_para = {
            kind: kind,
            err: err,
            cid: cid,
            sid: !err ? chat.sid : 0,
            cname: cname,
            sname: !err ? chat.servicer.nickname : "",
            client_headimg: !err ? chat.client.headimg : "",
            servicer_headimg: !err ? chat.servicer.headimg : "",
            GLOBAL_SOCKET_URL: chat_config.GLOBAL_SOCKET_URL,
            welcome_message: chat_config.welcome_message,
            client_title: chat_config.client_title,
            comm_talk_list_template: {
                records: records
            }
        };
        // console.log("\n\nchat", 340, "records\n", render_para.comm_talk_list_template.records);
        res.render("Chat/chat.html", render_para);

    });

});

// 获得更多历史记录
router.post("/getMoreRecords", function(req, res) {
    getRecord_handler.getRecords(req, res);
});

// 更新客户端未读消息状态
router.post("/update_noRead_record_client", function(req) {
    var cid, sid;

    // 获得参数
    var getParameters = function(callback) {
        cid = func.filterNoNum(req.body.cid);
        sid = req.body.sid.toString();

        callback(null);
    };

    // 执行更新
    var deal_update = function(db, callback) {

        var collection_chats = db.collection("chats");

        collection_chats.updateOne({
            "cid": cid,
            "sid": mongo.ObjectID(sid)
        }, {
            $set: {
                has_noRead_record_client: false
            }
        }, function(err) {
            callback(err);
        });
    };

    async.waterfall([
        getParameters,
        mongo.connect_async,
        deal_update
    ], function(err) {
        if (err) {
            console.log("\n\nchat", 463, "err:\n", err);
        }
    });
});

// 会话列表页 获得分类视图
router.post("/chat/getSort", function(req, res) {

    chat_config.getSort(req.query, function(err, sort) {

        if (err) {
            console.log("\n\nchat", 586, "err:\n", err);
            res.send(err);
        } else {
            res.render("chat/chat_list_getSort.html", {
                sort: sort[0].list
            });
        }
    })
});

/*
router.get("/list", function(req, res) {

    var async = require("async");

    // 客服id
    var servicer_id;

    // 验证客服身份
    var check_servicer = function(callback) {
        servicer_id = 2;
        callback(null);
    };

    // 数据库连接
    var mongodbConnect = function(callback) {
        mongo.connect(mongoUrl, function(err, db) {
            if (err)
                res.send("line 287: 数据库连接错误");
            else {
                callback(null, db);
            }
        });
    };

    // 获得所有待连接和已连接记录
    var getCustomer = function(db, callback) {
        var collection_customers = db.collection("customers");
        collection_customers.find({ "cstatus": { $nin: [3] } })
            .sort({ "_id": 1 })
            .toArray(function(err, arr) {
                if (err) {
                    callback(err);
                } else {
                    console.log("\n\nchat", 302, "customers:\n", arr);
                    callback(null, arr);
                }
            });
    };

    // async
    async.waterfall([
        check_servicer,
        mongodbConnect,
        getCustomer
    ], function(err, customers) {
        res.render("chat/tobeConnect.html", {
            err: err,
            customers: customers,
            servicer_id: servicer_id
        });
    });
});
*/

module.exports = router;