var mongo = require("mongodb");
var chat_config = require("./chat_config");

exports.ObjectID = mongo.ObjectID;

// 数据库连接_async模式
exports.connect_async = function(callback) {

    mongo.connect(chat_config.mongoUrl, function(err, db) {
        if (err) {
            db.close();
            callback("mongodb连接错误" + err.toString());
        } else
            callback(null, db);
    });
};
