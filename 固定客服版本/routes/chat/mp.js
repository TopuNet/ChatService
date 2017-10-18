/*
    mp相关路由
    高京
    2017-05-25
*/

var router = require("express").Router(),
    func = require("../../handle/functions"),
    async = require("async"),
    mongo = require("../../handle/mongodb"),
    config = require("../../handle/config"),
    getRecord_handle = require("../../handle/getRecords"),
    chat_config = require("../../handle/chat_config"),
    login_bid = -1, // 登录商家bid
    login_route = "/mp/login", // 登录页
    db;

// 生成token并返回
// username: 用户名
// passwd_sha1: sha1处理过的密码
var create_token = function(username, passwd_sha1) {
    var random_str = func.CreateRandomStr(10, 7);

    var date = new Date();
    var timestamp = date.getTime();

    return func.CreateHash(username + passwd_sha1 + random_str + timestamp.toString(), "sha1", 1);
};

// 验证登录状态_middleware模式。未登录跳转至登录页
var mw_check_login_status = function(req, res, next) {

    // 获取cookie中保存的token
    var get_cookie = function(_db, callback) {
        db = _db;

        // var collection_init = db.collection("init");
        // collection_init.insertOne({
        //     "mp_user": "topu.net",
        //     "mp_passwd": "356a192b7913b04c54574d18c28d46e6395428ab"
        // });

        if (!req.cookies)
            res.redirect(login_route);
        else {

            var token;
            var deal_eval_str = "token = req.cookies." + config.cookie_pre + "mp_cookie;";
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
        var collection_init = db.collection("init");
        collection_init.find({
            token: token
        }).next(function(err, servicer) {
            // console.log("\n\nservicer", 55, "servicer:\n", servicer);
            if (!servicer) // 未找到servicer记录
                res.redirect(login_route);
            else {
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

// 主管理页
router.get("/", mw_check_login_status, function(req, res) {



    // 验证bid状态
    var check_bid = function(callback) {
        if (!login_bid || login_bid === 0)
            res.redirect("/mp/login");
        else {
            callback(null);
        }
    };

    // 获取客服列表
    var get_servicer_list = function(_db, callback) {
        db = _db;

        var collection_servicers = db.collection("servicers");

        collection_servicers.find({
            bid: login_bid
        }).toArray(function(err, servicers) {
            if (err)
                console.log("\n\nmp", 46, "err:\n", err);
            callback(err, servicers);
        });
    };

    // 处理async结果
    // 商家id，-1为平台
    var async_result = function(err, servicers) {
        db.close();

        if (err) {
            console.log("\n\nmp", 55, "err:\n", err);
        } else {
            // console.log("\n\nmp", 55, "servicers:\n", servicers);
            res.render("Chat/mp.html", {
                servicers: servicers,
                comm_talk_list_template: []
            });
        }
    };

    // 执行async
    async.waterfall([
        check_bid, // 验证bid状态
        mongo.connect_async, // 连接mongodb
        get_servicer_list // 获取客服列表
    ], async_result);
});

// 登录页
router.get("/login", function(req, res) {
    res.render("chat/mp_login.html", {
        from: "mp"
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

        var collection_init = db.collection("init");
        collection_init.find({
            "mp_user": params.username,
            "mp_passwd": func.CreateHash(params.passwd, "sha1", 1)
        }).next(function(err, user) {
            if (err || !user)
                callback("用户名或密码错");
            else {
                callback(null);
            }
        });
    };

    // 创建token并写入cookie
    var set_cookie = function(callback) {
        var token = create_token(params.username, params.passwd);

        res.cookie(config.cookie_pre + "mp_cookie", token, { httpOnly: false });

        callback(null, token);
    };

    // 更新表token
    var update_db_token = function(token, callback) {

        var collection_init = db.collection("init");
        collection_init.updateMany({}, { $set: { token: token } }, function(err) {
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

// 退出
router.post("/quit", function(req, res) {

    res.cookie(config.cookie_pre + "mp_cookie", "", { maxAge: -1 });
    res.send("success");
});

// 根据cid和sid获得会话记录，并返回html代码
router.post("/getRecords", function(req, res) {

    getRecord_handle.getRecords(req, res);

});

// 客服 - 添加/修改 表单生成页
router.post("/servicer/get_form", function(req, res) {
    var _id = req.body._id,
        fs = require("fs"),
        service_sort,
        dirPath = "./inc/headimg";

    // 获得 service_sort
    var get_service_sort = function(sort, callback) {
        service_sort = sort;
        callback(null);
    }

    // 验证文件夹是否存在
    var valid_dir = function(_db, callback) {
        db = _db;
        fs.stat(dirPath, function(err) {
            if (err) {
                callback(err);
            } else {
                callback(null);
            }
        });
    };

    // 获得头像文件集
    var get_headimg = function(callback) {

        fs.readdir(dirPath, function(err, files) {
            if (err)
                callback(err);
            else
                callback(null, files);
        });
    };

    // 获取_id对应的客服记录
    var get_servicer = function(files, callback) {
        if (_id === "") // 添加
            callback(null, files, null);
        else { // 修改
            var collection_servicers = db.collection("servicers");
            collection_servicers.find({
                _id: mongo.ObjectID(_id)
            }).next(function(err, servicer) {
                if (err)
                    callback("未找到相关数据，更新失败");
                else
                    callback(null, files, servicer);
            });
        }
    };

    // 获取分类
    var get_service_sort = function(files, servicer, callback) {

        chat_config.getSort(req.query, function(err, sort) {

            if (err) {
                console.log("\n\nroutes mp", 141, "err:\n", err);
                callback(err);
            } else {

                callback(null, files, servicer, sort[0].list);
            }
        })
    };

    // 执行async
    async.waterfall([
        mongo.connect_async,
        valid_dir,
        get_headimg,
        get_servicer,
        get_service_sort
    ], function(err, files, servicer, service_sort) {

        db.close();

        if (err)
            console.log("\n\nmp", 78, "\nerr:\n", err);
        servicer = servicer || {
            _id: "",
            sname: "",
            nickname: "",
            passwd: "",
            headimg: "",
            sort: ""
        };
        res.render("Chat/mp_servicer_form.html", {
            servicer: servicer,
            dirPath: dirPath,
            files: files,
            sort: service_sort
        });
    });
});

// 客服 - 添加/修改 表单处理页。成功输出"success:" + insertedId(添加时此参数有值)，失败输出错误信息
router.post("/servicer/form_deal", mw_check_login_status, function(req, res) {
    var dataForm; // 表单数据

    // 获取表单数据
    var getForm = function(_db, callback) {
        db = _db;

        var head_replaceRegx = /^\./g; // 去掉headimg路径开头的.
        dataForm = {
            _id: req.body._id || "",
            sname: req.body.sname.toString(),
            nickname: req.body.nickname.toString(),
            passwd: req.body.passwd.toString(),
            headimg: req.body.headimg.toString().replace(head_replaceRegx, ""),
            sort: req.body.sort.toString()
        };
        if (dataForm._id !== "")
            dataForm._id = mongo.ObjectID(dataForm._id);

        callback(null, dataForm);
    };

    // 添加或修改数据
    var dealData = function(dataForm, callback) {
        var collection_servicers = db.collection("servicers");

        if (dataForm._id === "") { // 没有id，执行添加流程
            collection_servicers.find({
                sname: dataForm.sname
            }).next(function(err, doc) {
                if (err) {
                    callback(err);
                } else if (doc) {
                    callback("该账户已存在");
                } else {
                    // 添加记录
                    collection_servicers.insertOne({
                        bid: login_bid,
                        sname: dataForm.sname,
                        nickname: dataForm.nickname,
                        passwd: func.CreateHash(dataForm.passwd, "sha1", 1),
                        headimg: dataForm.headimg,
                        sort: dataForm.sort,
                        alive: true
                    }, function(err, r) {
                        if (err)
                            callback("添加记录失败，请稍后再试");
                        else {
                            callback(null, 1, r.insertedId);
                        }
                    });
                }
            });
        } else { // 有id，执行修改流程
            // 查询重复账户
            collection_servicers.find({
                sname: dataForm.sname,
                _id: { $ne: dataForm._id }
            }).next(function(err, doc) {
                // console.log("\n\nmp", 200, "doc:\n", doc);
                if (err) {
                    callback(err);
                } else if (doc) {
                    callback("该账户已存在");
                } else {
                    // 更新记录
                    var updateItems = {
                        sname: dataForm.sname,
                        nickname: dataForm.nickname,
                        headimg: dataForm.headimg,
                        sort: dataForm.sort
                    };
                    if (dataForm.passwd !== "")
                        updateItems.passwd = func.CreateHash(dataForm.passwd, "sha1", 1);
                    collection_servicers.findOneAndUpdate({
                        _id: dataForm._id
                    }, {
                        $set: updateItems
                    }, function(err, r) {

                        // console.log("\n\nmp", 230, "r:\n", r);
                        if (err)
                            callback("更新记录失败，请稍后再试");
                        else if (!r.value) {
                            callback("未找到相关数据，更新失败");
                        } else
                            callback(null, 2, r.value._id);
                    });
                }
            });
        }
    };

    // 执行async
    async.waterfall([
        mongo.connect_async, // 连接数据库，返回db
        getForm, // 获取表单数据
        dealData // 添加或修改数据
    ], function(err, kind, insertedId) { // kind: 1-添加 2-修改

        db.close();

        insertedId = insertedId || "";
        // console.log("\n\nmp", 240, "err:\n", err);
        if (err) {
            res.send(err);
        } else {
            res.send("success:" + kind + ":" + insertedId);
        }
    });
});

// 客服 - 修改alive。成功输出"success"，失败输出错误信息
router.post("/servicer/alive", mw_check_login_status, function(req, res) {
    var id;

    // 验证bid
    var check_bid = function(callback) {
        if (login_bid === 0)
            callback("修改失败，请稍后再试");
        else
            callback(null);
    };

    // 获取地址栏
    var getParams = function(_db, callback) {

        db = _db;

        // console.log("\n\nmp", 234, "mongo:\n", mongo);

        id = req.body.id || "";
        var findData = {
            _id: mongo.ObjectID(id)
        };
        callback(null, findData);
    };

    // 执行修改
    var deal = function(findData, callback) {

        // console.log("\n\nmp", 244, "findData:\n", findData);

        var collection_servicers = db.collection("servicers");
        collection_servicers.find(findData).next(function(err, r) {
            if (err) {
                console.log("\n\nmp", 251, "err:\n", err);
                callback("修改失败，请稍后再试");
            } else if (!r) {
                console.log("\n\nmp", 254, "r:\n", r);
                callback("修改失败，请稍后再试");
            } else {
                collection_servicers.findOneAndUpdate(
                    findData, { $set: { alive: r.alive ? false : true } },
                    function(err) {
                        if (err) {
                            console.log("\n\nmp", 261, "err:\n", err);
                            callback("修改失败，请稍后再试");
                        } else {
                            callback(null);
                        }
                    }
                );
            }
        });
    };

    // 执行async
    async.waterfall([
        check_bid,
        mongo.connect_async, // 连接mongodb
        getParams, // 获取地址栏
        deal // 执行修改
    ], function(err) {

        db.close();

        if (err) {
            // console.log("\n\nmp", 276, "err:\n", err);
            res.send(err);
        } else {
            res.send("success");
        }
    });
});

// 客服 - 删除。成功输出"success"，失败输出错误信息
router.post("/servicer/del", mw_check_login_status, function(req, res) {
    var _id;

    // 验证bid
    var check_bid = function(callback) {
        if (login_bid === 0)
            callback("修改失败，请稍后再试");
        else
            callback(null);
    };

    // 获得表单参数
    var get_Params = function(callback) {
        _id = req.body._id;

        if (!_id)
            callback("修改失败，请稍后再试");

        _id = mongo.ObjectID(_id);

        callback(null);
    };

    // 执行删除
    var deal_del = function(_db, callback) {

        db = _db;

        var collection_servicers = db.collection("servicers");

        collection_servicers.deleteOne({
            _id: _id
        }, function(err) {
            if (err)
                callback(err);
            else
                callback(null);
        });
    };

    // 执行async
    async.waterfall([
        check_bid,
        get_Params,
        mongo.connect_async,
        deal_del
    ], function(err) {

        db.close();

        if (err) {
            res.send(err);
        } else {
            res.send("success");
        }
    });
});

module.exports = router;