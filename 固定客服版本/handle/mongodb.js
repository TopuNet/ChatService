var mongo = require("mongodb");

exports.ObjectID = mongo.ObjectID;

// 数据库连接_async模式
exports.connect_async = function(callback) {
    var mongoUrl = "mongodb://localhost:27017/ChatServicer_RegularServicer";

    mongo.connect(mongoUrl, function(err, db) {
        if (err) {
            callback("mongodb连接错误" + err.toString());
        } else
            callback(null, db);
    });
};
