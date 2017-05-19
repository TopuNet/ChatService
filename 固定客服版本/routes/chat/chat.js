/*
    chat页路由
    高京
    2017-05-04
*/

/*
    mongodb库结构
    
    chat_gj: {
        customer : {
            "customer_id": customer_id,
            "customer_name": 客户姓名,
            "cstatus": 1, // 1-待接入 2-接入中 3-客户断线 4-客服断线
            "ostatus": // 排序状态 1-靠前显示(连线中) 2-靠后显示
            "servicer_id": servicer_id,
            "servicer_name": 客服姓名,
            "last_time": // 最后接入的时间（毫秒数，排序用）
        }
    }
*/

var router = require("express").Router(),
    mongo = require("mongodb"),
    mongoUrl = "mongodb://localhost:27017/chat_gj";

router.get("/", function(req, res) {

    var async = require("async");
    // var fs = require("fs");

    // [地址栏] 访问者种类: 1-客户 2-客服
    var kind = 0;

    // [地址栏] 客户id
    var customer_id = 0;

    // [地址栏] 客服id（kind=2时需要）
    var servicer_id = 0;

    // [地址栏] 访问者token
    var token = "";

    // 客户姓名
    var customer_name = "";

    // 客户姓名
    var servicer_name = "";

    // （不用了）消息记录存放位置
    var dirPath = "./ChatRecord";

    // （不用了）客户消息记录存放的子文件夹的前缀，后接客户id
    var dirCustomerPrefix = "customer_";

    // 获取地址栏
    var getParameters = function(callback) {

        kind = req.query.kind || 0;
        kind = parseFloat(kind);

        customer_id = req.query.cid || 0;
        customer_id = parseFloat(customer_id);

        servicer_id = req.query.sid || 0;
        servicer_id = parseFloat(servicer_id);

        token = req.query.token || "";

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

    // 验证合法性并获取客户和客服姓名，并读取消息记录
    // db: mongodb连接对象
    var valid_service_status = function(db, callback) {

        // 客户集合
        var collection_customers = db.collection("customers");

        // 消息集合
        var collection_record = db.collection("record");

        // console.log("\n\nchat", 73, "collection\n", collection_waiting);

        if (kind === 0 || customer_id === 0 || (kind == 2 && servicer_id === 0))
            res.send("line 81: 参数不正确");
        else {
            // 可以通过restful api接口验证合法性和获得姓名
            var api_result = function() {

                customer_name = "客户";
                servicer_name = "客服";

                // 根据customer_id查找customer，没有则创建
                var find_customer = function(api_result_callback) {
                    collection_customers.find({ "customer_id": customer_id }).next(function(err, customer) {
                        // console.log("\n\nchat", 87, "customer:\n", customer);

                        // 没有则添加
                        if (!customer) {
                            servicer_id = 0;
                            var date = new Date();
                            customer = {
                                "customer_id": customer_id,
                                "customer_name": customer_name,
                                "cstatus": 1,
                                "ostatus": 1,
                                "servicer_id": servicer_id,
                                "servicer_name": servicer_name,
                                "last_time": date.getTime()
                            };
                            collection_customers.insertOne(customer, function(err, r) {
                                api_result_callback(null, customer);
                            });
                        } else if (kind == 1) { // 有且kind==1，则更新cstatus从3为1
                            collection_customers.findOneAndUpdate({ "customer_id": customer_id, "cstatus": 3 }, { $set: { "cstatus": 1 } }, function() {
                                api_result_callback(null, customer);
                            });
                        } else {
                            api_result_callback(null, customer);
                        }

                    });
                };

                // kind=2时，检查customer的cstatus。3为已退出
                var check_customer_cstatus = function(customer, api_result_callback) {
                    if (kind == 2 && customer.cstatus == 3)
                        api_result_callback("Quited");
                    else
                        api_result_callback(null, customer);
                };

                // kind=2时，比对servicer_id。如之前为空则更新；之前不为空则比对是否相同，不相同则为其他客服已接入。
                var check_servicer = function(customer, api_result_callback) {
                    if (kind != 2) {
                        api_result_callback(null);
                    } else {
                        if (customer.servicer_id === 0) {
                            collection_customers.findOneAndUpdate({ "customer_id": customer_id }, { $set: { "servicer_id": servicer_id, "cstatus": 2 } }, function() {
                                api_result_callback(null);
                            });
                        } else if (customer.servicer_id == servicer_id) {
                            api_result_callback(null);
                        } else {
                            api_result_callback("hadServicer");
                        }
                    }
                };

                // 查找消息记录
                var find_record = function(err) {
                    if (err) {
                        callback(err, []);
                    } else {
                        collection_record.find({ "customer_id": customer_id })
                            .sort("rdate", -1)
                            .limit(20)
                            .toArray(function(err, records) {
                                if (err)
                                    console.log("\n\nchat", 117, "find_record err:", err.toString());

                                callback(null, records);
                            });
                    }
                };

                // async
                async.waterfall([
                    find_customer,
                    check_customer_cstatus,
                    check_servicer
                ], find_record);

            };

            api_result();
        }
    };

    // （不用了）打开消息记录文件，获取消息
    var getRecordFile = function(callback) {

        // 判断存放位置的文件夹是否存在，不存在则创建
        var checkDir = function(check_callback) {
            fs.stat(dirPath, function(stat_err) {
                if (stat_err) {
                    fs.mkdir(dirPath, function(mk_err) {
                        if (mk_err) {
                            console.log("\n\nchat", 72, "mk_err\n", mk_err);
                            res.send(mk_err);
                        } else {
                            check_callback(null);
                        }
                    });
                } else {
                    check_callback(null);
                }
            });
        };

        // 判断该用户的子文件夹是否存在，不存在则创建
        var checkSubDir = function(check_callback) {
            var subdirPath = dirPath + "/" + dirCustomerPrefix + customer_id;
            fs.stat(subdirPath, function(stat_err) {
                if (stat_err) {
                    fs.mkdir(subdirPath, function(mk_err) {
                        if (mk_err) {
                            console.log("\n\nchat", 91, "mk_err\n", mk_err);
                            res.send(mk_err);
                        } else {
                            check_callback(null, subdirPath);
                        }
                    });
                } else {
                    check_callback(null, subdirPath);
                }
            });
        };

        // 读取消息记录，没有文件则创建
        var checkFile = function(subdirPath, check_callback) {

            var filePath = subdirPath + "/record.txt";

            fs.open(filePath, "a+", function(open_err) {
                if (open_err) {
                    console.log("\n\nchat", 110, "open_err\n", open_err);
                    res.send(open_err);
                } else {
                    fs.readFile(filePath, function(read_err, data) {
                        if (read_err) {
                            console.log("\n\nchat", 115, "read_err\n", read_err);
                            res.send(read_err);
                        } else {
                            check_callback(null, data);
                        }
                    });
                }
            });
        };

        // async
        async.waterfall([
            checkDir, checkSubDir, checkFile
        ], function(err, record) {
            callback(null, record);
        });
    };

    // async
    async.waterfall([
        getParameters,
        mongodbConnect,
        valid_service_status
        // getRecordFile
    ], function(err, record) {

        console.log("\n\nchat", 234, "record\n", record);
        res.render("Chat/index.html", {
            kind: kind,
            err: err,
            customer_id: customer_id,
            servicer_id: servicer_id,
            customer_name: customer_name,
            servicer_name: servicer_name,
            record: record
        });

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
