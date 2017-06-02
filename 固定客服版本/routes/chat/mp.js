/*
    mp相关路由
    高京
    2017-05-25
*/

var router = require("express").Router(),
    func = require("../../handle/functions"),
    async = require("async"),
    mongo = require("../../handle/mongodb"),
    login_bid; // 验证登录状态后的bid，0代表失败

// 验证登录状态_async模式。bid存入login_bid中，0代表未登录
var check_login_status = function(callback) {

    // 此处应结合api接口+cookie，验证身份，返回bid
    login_bid = -1;

    // next
    callback(null);
};

// 主管理页
router.get("/", function(req, res) {

    // 验证bid状态
    var check_bid = function(callback) {
        if (!login_bid || login_bid === 0)
            res.redirect("/mp/login");
        else {
            callback(null);
        }
    };

    // 获取客服列表
    var get_servicer_list = function(db, callback) {
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
        if (err) {
            console.log("\n\nmp", 55, "err:\n", err);
        } else {
            console.log("\n\nmp", 55, "servicers:\n", servicers);
            res.render("Chat/mp.html", {
                servicers: servicers
            });
        }
    };

    // 执行async
    async.waterfall([
        check_login_status, // 验证登录状态
        check_bid, // 验证bid状态
        mongo.connect_async, // 连接mongodb
        get_servicer_list // 获取客服列表
    ], async_result);
});

// 登录页
router.get("/login", function(req, res) {
    res.render("chat/mp_login.html");
});

// 客服 - 添加/修改 表单生成页
router.post("/servicer/get_form", function(req, res) {
    var _id = req.query.id,
        fs = require("fs"),
        dirPath = "./images/headimg";

    // 验证文件夹是否存在
    var valid_dir = function(callback) {
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

    // 执行async
    async.waterfall([
        valid_dir,
        get_headimg
    ], function(err, files) {
        if (err)
            console.log("\n\nmp", 78, "\nerr:\n", err);
        res.render("Chat/mp_servicer_form.html", {
            dirPath: dirPath,
            files: files
        });
    });
});

// 客服 - 添加/修改 表单处理页。成功输出"success:" + insertedId(添加时此参数有值)，失败输出错误信息
router.post("/servicer/form_deal", function(req, res) {
    var dataForm; // 表单数据

    // 获取表单数据
    var getForm = function(db, callback) {
        var head_replaceRegx = /^\./g; // 去掉headimg路径开头的.
        dataForm = {
            id: req.body.id || 0,
            sname: req.body.sname.toString(),
            nickname: req.body.nickname.toString(),
            passwd: req.body.passwd.toString(),
            headimg: req.body.headimg.toString().replace(head_replaceRegx, "")
        };
        dataForm.id = func.filterNoNum(dataForm.id.toString());

        callback(null, db, dataForm);
    };

    // 添加或修改数据
    var dealData = function(db, dataForm, callback) {
        var collection_servicers = db.collection("servicers");

        if (dataForm.id == "0") { // 没有id，执行添加流程
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
                        alive: true
                    }, function(err, r) {
                        if (err)
                            callback("添加记录失败，请稍后再试");
                        else {
                            callback(null, r.insertedId);
                        }
                    });
                }
            });
        } else { // 有id，执行修改流程
            // 查询重复账户
            collection_servicers.find({
                sname: dataForm.sname,
                _id: { $ne: dataForm.id }
            }).next(function(err, doc) {
                if (err) {
                    callback(err);
                } else if (doc) {
                    callback("该账户已存在");
                } else {
                    // 更新记录
                    var updateItems = {
                        sname: dataForm.sname,
                        nickname: dataForm.nickname,
                        headimg: dataForm.headimg
                    };
                    if (dataForm.passwd !== "")
                        updateItems.passwd = func.CreateHash(dataForm.passwd, "sha1", 1);
                    collection_servicers.findOneAndUpdate({
                        _id: dataForm.id
                    }, {
                        $set: updateItems
                    }, function(err, r) {

                        console.log("\n\nmp", 121, "r:\n", r);
                        if (err)
                            callback("更新记录失败，请稍后再试");
                        else if (!r.value) {
                            callback("未找到相关数据，更新失败");
                        } else
                            callback(null);
                    });
                }
            });
        }
    };

    // 执行async
    async.waterfall([
        check_login_status, // 验证登录，返回bid
        mongo.connect_async, // 连接数据库，返回db
        getForm, // 获取表单数据
        dealData // 添加或修改数据
    ], function(err, insertedId) {
        if (err) {
            res.send(err);
        } else {
            res.send("success:" + insertedId);
        }
    });
});

// 客服 - 修改alive。成功输出"success"，失败输出错误信息
router.post("/servicer/alive", function(req, res) {
    var id;

    // 验证bid
    var check_bid = function(callback) {
        if (login_bid === 0)
            callback("修改失败，请稍后再试");
        else
            callback(null);
    };

    // 获取地址栏
    var getParams = function(db, callback) {

        // console.log("\n\nmp", 234, "mongo:\n", mongo);

        id = req.body.id || "";
        var findData = {
            _id: mongo.ObjectID(id)
        };
        callback(null, db, findData);
    };

    // 执行修改
    var deal = function(db, findData, callback) {

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
                )
            }
        });
    }

    // 执行async
    async.waterfall([
        check_login_status,
        check_bid,
        mongo.connect_async, // 连接mongodb
        getParams, // 获取地址栏
        deal // 执行修改
    ], function(err) {
        if (err) {
            // console.log("\n\nmp", 276, "err:\n", err);
            res.send(err);
        } else {
            res.send("success");
        }
    });
});

module.exports = router;
