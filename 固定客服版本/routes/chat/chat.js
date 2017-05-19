/*
    chat页路由
    高京
    2017-05-04
*/

var router = require("express").Router(),
    mongo = require("mongodb"),
    mongoUrl = "mongodb://localhost:27017/ChatServicer_RegularServicer";

var async = require("async");

// 生成token
var create_Token = function() {

};

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

router.get("/", function(req, res) {
    // var fs = require("fs");

    // [地址栏] 访问者种类: 1-客户 2-客服
    var kind = 0;

    // [地址栏] 客户id
    var cid = 0;

    // [地址栏] 商户id，-1为平台
    var bid = 0;

    // [地址栏] 客户token
    var ctoken = "";

    // [地址栏] 客服token
    var stoken = "";

    // 客户姓名
    var cname = "";

    // 客服姓名
    var sname = "";

    // （不用了）消息记录存放位置
    // var dirPath = "./ChatRecord";

    // （不用了）客户消息记录存放的子文件夹的前缀，后接客户id
    // var dirCustomerPrefix = "customer_";

    // 获取地址栏
    var getParameters = function(callback) {

        kind = req.query.kind || 0;
        kind = parseFloat(kind) || 0;

        cid = req.query.cid || 0;
        cid = parseFloat(cid) || 0;

        bid = req.query.bid || 0;
        bid = parseFloat(bid) || 0;

        ctoken = req.query.ctoken || "";
        stoken = req.query.stoken || "";

        callback(null);
    };

    // 数据库连接
    var mongodbConnect = function(callback) {

        mongo.connect(mongoUrl, function(err, db) {
            if (err) {
                res.send("line 62: 数据库连接错误" + err.toString());
            } else
                callback(null, db);
        });
    };

    // 进行一系列验证并获取会话
    // db: mongodb连接对象
    var get_chat = function(db, callback) {

        // 客户集合
        var collection_chats = db.collection("chats");

        // 客服集合
        var collection_servicers = db.collection("servicers");

        // console.log("\n\nchat", 73, "collection\n", collection_waiting);

        if (kind === 0 || cid === 0 || bid === 0)
            res.send("line 81: 参数不正确");
        else {


            // 可以通过restful api接口验证客户合法性和获得客户姓名。
            var api_result = function() {

                cname = "客户";

                // 根据cid+bid查找会话，没有则创建
                var find_chat = function(api_result_callback) {
                    collection_chats.find({ "cid": cid, "bid": bid }).next(function(err, chat) {
                        // console.log("\n\nchat", 143, "chat:\n", chat);

                        // 没有则添加
                        if (!chat) {

                            if (kind == 2)
                                res.send("line 107: 参数不正确");

                            // 指派客服
                            var appoint_servicer = function(_callback) {

                                // 获得该商户全部客服
                                var get_servicers = function(__callback) {
                                    collection_servicers.find({ "alive": true, "bid": bid }, { "sid": 1 }).toArray(function(err, servicers) {
                                        if (err) {
                                            api_result_callback("noServicers");
                                        } else {
                                            __callback(null, servicers);
                                        }
                                    });
                                };

                                // 获得会话数量最少的客服
                                var get_chats_count = function(servicers, __callback) {
                                    collection_chats.group(
                                        ["sid"], {}, { "count": 0 },
                                        "function(now, prev) {prev.count++;}",
                                        function(err, r) {
                                            // console.log("\n\nchat", 116, "r\n", r);


                                            var count_min = null, // 当前最少会话数。遍历时当有客服会话数小于此值时，则更新
                                                servicer; // 会话数最少的客服

                                            // 判断客服的会话数量是否为最少，是的话更新count_min和servicer两个变量
                                            var check_count_min = function(_servicer) {

                                                // console.log("\n\nchat", 125, "count_min:", count_min, "_servicer.count:", _servicer.count, "!count_min:", (!count_min), "_servicer.count<count_min:", (_servicer.count < count_min));
                                                if (count_min === null || _servicer.count < count_min) {
                                                    servicer = _servicer;
                                                    count_min = _servicer.count;
                                                }
                                            };

                                            servicers.forEach(function(s) {
                                                s.count = 0;
                                                r.some(function(_r, _index) {
                                                    // console.log(index, _index);
                                                    if (s.sid == _r.sid) {
                                                        s.count = _r.count;
                                                        r.splice(_index, 1);
                                                        check_count_min(s);
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
                                    get_chats_count, // 遍历客服，获得会话数量
                                ], function(err, servicer) {
                                    _callback(null, servicer);
                                });
                            };

                            // 添加会话
                            var add_chat = function(servicer, _callback) {
                                var date = new Date();
                                chat = {
                                    "cid": cid,
                                    "bid": bid,
                                    "sid": servicer.sid,
                                    "last_time": date.getTime(),
                                    "records": []
                                };
                                collection_chats.insertOne(chat, function(err) {
                                    _callback(err, chat);
                                });
                            };

                            // 执行async
                            async.waterfall([
                                appoint_servicer, // 指派客服
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

                // async
                async.waterfall([
                    find_chat,
                    check_servicer
                ], function(err, chat) {
                    callback(err, chat);
                });

            };

            api_result();
        }
    };

    // async
    async.waterfall([
        getParameters, // 获取地址栏
        mongodbConnect, // 数据库连接
        get_chat // 进行一系列验证并获取会话
    ], function(err, chat) {

        // console.log("\n\nchat", 297, "chat\n", chat);

        var render_para = {
            kind: kind,
            err: err,
            cid: cid,
            sid: chat ? chat.sid : 0,
            cname: cname,
            sname: sname,
            records: chat ? chat.records : []
        };
        console.log("\n\nchat", 294, "render_para\n", render_para);
        res.render("Chat/index.html", render_para);

    });

});

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

module.exports = router;
