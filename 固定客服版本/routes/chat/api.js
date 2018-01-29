/*
    api接口路由

    高京
    2017-10-11
*/

var router = require("express").Router(),
    async = require("async"),
    func = require("../../handle/functions"),
    mongo = require("../../handle/mongodb");

// 判断是否有未读消息
/*
    @req.body = {
        cid: 客户id,
        sort: 分类id，0为全部
    }
*/
router.post("/getNoReadRecord", function(req, res) {
    var post_data,
        db;

    // 获得表单参数
    var getParameters = function(callback) {
        post_data = {
            cid: func.filterNoNum(req.body.cid),
            sort: req.body.sort || 0
        };

        // console.log("\n\n api", 31, "post_data:\n", post_data);

        if (post_data.cid === "")
            callback("invalid cid:" + post_data.cid);

        callback(null);
    };

    // 查询记录
    var getResult = function(_db, callback) {
        db = _db;

        var collection_chats = db.collection("chats");

        var find_para = {
            cid: post_data.cid.toString(),
            has_noRead_record_client: true
        };
        if (parseFloat(post_data.sort) !== 0)
            find_para.sort = eval("/<" + post_data.sort.toString() + ">/ig");

        collection_chats.find(find_para).limit(1).next(function(err, chat) {
            callback(err, chat);
        });
    };

    async.waterfall([
        getParameters,
        mongo.connect_async,
        getResult
    ], function(err, chat) {

        // console.log("\n\n api", 63, "chat:\n", chat);

        db.close();

        if (err) {
            console.log("\n\n api", 62, "err:\n", err);
            res.send(err);
        } else if (chat) {
            res.send("true");
        } else {
            res.send("false");
        }
    });

});

module.exports = router;