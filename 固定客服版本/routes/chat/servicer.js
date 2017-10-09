/*
    高京
    2017-06-08
    客服会话页路由
*/

var router = require("express").Router(),
    async = require("async"),
    mongo = require("../../handle/mongodb.js"),
    func = require("../../handle/functions.js"),
    config = require("../../handle/config.js"),
    login_route = "/servicer/login", // 登录页
    db, // mongodb对象
    chat_config = require("../../handle/chat_config"),
    getRecord_handle = require("../../handle/getRecords");

// 生成token并返回
// username: 用户名
// passwd_sha1: sha1处理过的密码
var create_token = function(username, passwd_sha1) {
    var random_str = func.CreateRandomStr(10, 7);

    var date = new Date();
    var timestamp = date.getTime();

    return func.CreateHash(username + passwd_sha1 + random_str + timestamp.toString(), "sha1", 1);
};

// 验证登录状态_middleware模式，将客服存入req.mw.login_servicer。未登录跳转至登录页
var mw_check_login_status = function(req, res, next) {

    // 获取cookie中保存的token
    var get_cookie = function(_db, callback) {
        db = _db;

        if (!req.cookies)
            res.redirect(login_route);
        else {

            var token;
            var deal_eval_str = "token = req.cookies." + config.cookie_pre + "servicer_cookie;";
            eval(deal_eval_str);
            if (!token)
                res.redirect(login_route);
            else {
                callback(null, token);
            }
        }
    };

    // 验证token
    var valid_token = function(token, callback) {
        // console.log("\n\nservicer", 48, "token:", token);
        var collection_servicer = db.collection("servicers");
        collection_servicer.find({
            token: token
        }).next(function(err, servicer) {
            // console.log("\n\nservicer", 55, "servicer:\n", servicer);
            if (!servicer) // 未找到servicer记录
                res.redirect(login_route);
            else {
                if (!req.mw)
                    req.mw = {};
                req.mw.login_servicer = servicer;
                callback(null);
            }
        });
    };

    // 执行async
    async.waterfall([
        mongo.connect_async,
        get_cookie,
        valid_token
    ], function() {
        next();
    });
};

// 会话页
router.get("/", mw_check_login_status, function(req, res) {

    // 查询会话列表
    var getChats = function(callback) {
        var login_servicer = req.mw.login_servicer;
        var chats = [],
            chats_cid = [];

        var collection_chats = db.collection("chats");
        collection_chats.find({
            sid: login_servicer._id
        }).sort([
            ["last_timestamp", -1]
        ]).each(function(err, chat) {
            if (err) {
                console.log("\n\nservicer", 86, "err:\n", err);
                callback(err);
            } else if (!chat) {
                callback(null, login_servicer, chats, chats_cid);
                return false;
            } else {
                chats.push(chat);
                chats_cid.push(chat.cid.toString());
            }
        });
    };

    // 补齐chats的last_time和last_content
    var infuseChats = function(login_servicer, chats, cid, callback) {

        if (!chats.length)
            callback(null, login_servicer, chats);

        // 查询Chats的records
        var getRecords = function(_callback) {
            // console.log("\n\nservicer", 161, "cid:", cid, "\nlogin_servicer._id:", login_servicer._id);

            var collection_records = db.collection("records");
            collection_records.group(["cid", "sid"], { "sid": login_servicer._id.toString() }, { timestamp: 0 }, function(now, result) {
                if (now.timestamp > result.timestamp) {
                    result.timestamp = now.timestamp;
                    result.rdate = now.rdate;
                    result.content = now.content;
                }
            }, function(err, result) {
                // console.log("\n\nservicer", 170, "err:\n", err, "\nresult:\n", result);
                if (err)
                    _callback(err);
                else
                    _callback(null, result);
            });
        };

        // 执行补齐chats
        var infuse_deal = function(records, _callback) {
            // console.log("\n\nservicer", 181, "records.length:\n", records.length);
            chats.forEach(function(chat) {
                records.some(function(r) {
                    // console.log("\n", "chat:\n", chat, "\nr:\n", r);
                    if (chat.cid == r.cid && chat.sid == r.sid) {
                        chat.last_time = r.rdate.toLocaleString();
                        chat.last_content = r.content;
                        // chats
                        return true;
                    }
                });
            });

            _callback(null);
        };

        // 执行async
        async.waterfall([
            getRecords,
            infuse_deal
        ], function() {
            callback(null, login_servicer, chats);
        });
    };

    // 执行async
    async.waterfall([
        getChats,
        infuseChats
    ], function(err, login_servicer, chats) {
        db.close();
        if (err)
            console.log("\n\nservicer", 208, "err:\n", err);
        else {
            res.render("Chat/servicer.html", {
                servicer: login_servicer,
                chats: chats,
                GLOBAL_SOCKET_URL: chat_config.GLOBAL_SOCKET_URL,
                servicer_pc_title: chat_config.servicer_pc_title,
                comm_talk_list_template: []
            });
            // console.log("\n\nservicer", 214, "chats:\n", chats);
        }
    });
});

// 登录页
router.get("/login", function(req, res) {

    // console.log("\n\nservicer", 79, "token\n", req.cookies);
    res.render("Chat/mp_login.html", {
        from: "servicer"
    });
});

// 登录处理页
router.post("/login/deal", function(req, res) {
    var params;

    // 获取表单参数
    var get_Params = function(callback) {
        params = {
            username: req.body.username,
            passwd: req.body.passwd
        };

        callback(null);
    };

    // 验证登录
    var valid_login = function(_db, callback) {

        db = _db;

        var collection_servicer = db.collection("servicers");
        collection_servicer.find({
            sname: params.username,
            passwd: func.CreateHash(params.passwd, "sha1", 1)
        }).next(function(err, servicer) {
            if (err || !servicer)
                callback("用户名或密码错");
            else {
                callback(null, servicer);
            }
        });
    };

    // 创建token并写入cookie
    var set_cookie = function(servicer, callback) {
        var token = create_token(params.username, params.passwd);

        res.cookie(config.cookie_pre + "servicer_cookie", token, { httpOnly: false });

        callback(null, servicer, token);
    };

    // 更新表token
    var update_db_token = function(servicer, token, callback) {

        var collection_servicer = db.collection("servicers");
        collection_servicer.updateOne({
            _id: mongo.ObjectID(servicer._id)
        }, { $set: { token: token } }, function(err) {
            if (err)
                callback("系统错误，请稍后再试");
            else
                callback(null);
        });
    };

    // 执行async
    async.waterfall([
        get_Params,
        mongo.connect_async,
        valid_login,
        set_cookie,
        update_db_token
    ], function(err) {
        db.close();

        if (err)
            res.send(err);
        else
            res.send("success");
    });
});

// 客服退出
router.post("/quit", function(req, res) {
    res.cookie(config.cookie_pre + "servicer_cookie", "", { maxAge: -1 });
    res.send("success");
});

// 根据cid和sid查找会话（sid来源于登录验证）
router.post("/findChatByCid", mw_check_login_status, function(req, res) {

    // console.log("\n\nservicer", 195, "here");

    var db;
    var cid;

    // 获得表单数据
    var get_Params = function(callback) {
        cid = req.body.cid || "";
        callback(null);
    };

    // 查询
    var getChats = function(_db, callback) {

        db = _db;

        // console.log("\n\servicer", 285, "\ncid:", cid, "\nreq.mw.login_:\n", req.mw.login_servicer._id);

        var collection_chats = db.collection("chats");
        collection_chats.find({
            cid: cid,
            sid: mongo.ObjectID(req.mw.login_servicer._id)
        }).sort([
            ["last_timestamp", -1]
        ]).next(function(err, chat) {
            // console.log("\n\servicer", 294, "\nerr:", err, "\nchat:\n", chat);
            if (err)
                callback(err);
            else if (!chat)
                callback("未找到会话");
            else
                callback(null, chat);
        });
    };

    // 执行async
    async.waterfall([
        get_Params,
        mongo.connect_async,
        getChats
    ], function(err, chat) {

        db.close();

        if (err) {
            // console.log("\n\nservicer", 354, "err:\n", err);
            res.send("err");
        } else {
            res.json(chat);
        }
    });
});

// 根据cid和sid获得会话记录（sid来源于登录验证），并返回html代码
router.post("/getRecords", mw_check_login_status, function(req, res) {

    // 更新未读消息状态
    var update_noRead_record_servicer = function(db, callback) {

        var collection_chats = db.collection("chats");

        // console.log("\n\nservicer", 333, "cid:", func.filterNoNum(req.body.cid), "\nsid:", req.mw.login_servicer._id.toString());

        collection_chats.updateOne({
            cid: func.filterNoNum(req.body.cid),
            sid: mongo.ObjectID(req.mw.login_servicer._id.toString())
        }, {
            $set: {
                has_noRead_record_servicer: false
            }
        }, function(err, result) {

            // console.log("\n\nservicer", 344, "err:", err, "\nresult:\n",result);

            db.close();

            callback(null);

        });
    };

    // 获得记录
    var getRecords = function(callback) {

        getRecord_handle.getRecords(req, res, req.mw.login_servicer._id);

        callback(null);
    };

    async.waterfall([
        mongo.connect_async,
        update_noRead_record_servicer,
        getRecords
    ]);

});

// 更新客服端未读消息状态
router.post("/update_noRead_record_servicer", mw_check_login_status, function(req) {
    var cid;

    // 获得参数
    var getParameters = function(callback) {
        cid = func.filterNoNum(req.body.cid);
        sid = req.mw.login_servicer._id.toString();

        callback(null);
    };

    // 执行更新
    var deal_update = function(db, callback) {

        var collection_chats = db.collection("chats");

        console.log("\n\nservicer", 386, "cid:", cid, "\nsid:", sid);

        collection_chats.updateOne({
            "cid": cid,
            "sid": mongo.ObjectID(sid)
        }, {
            $set: {
                has_noRead_record_servicer: false
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
            console.log("\n\nservicer", 404, "err:\n", err);
        }
    });
});

module.exports = router;