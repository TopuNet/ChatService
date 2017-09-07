/*
	获得更多历史消息记录的handler
	chat和servicer的路由都要用，区别是servicer的路由需要先验证登录状态并获得sid
	高京
	2017-09-07
*/

// var express = require("express");

var func = require("./functions"),
    async = require("async"),
    mongo = require("./mongodb"),
    RECORD_COUNT = 10; // 每次读取历史记录的条数

// 获得更多消息记录
// @sid: sid，null的话会从form表单中获得
exports.getRecords = function(req, res, sid) {

    var form_data;

    var getParams = function(callback) {

        var _body = req.body;
        form_data = {
            cid: func.filterNoNum(_body.cid),
            sid: (sid || _body.sid).toString(),
            start_count: func.filterNoNum(_body.start_count) // 已读数量。此次读取从start_count+1开始
        };

        // console.log("\n\nhandle/getRecords", 30, "form_data:\n", form_data);

        if (form_data.cid === "0" || form_data.sid === "") {
            callback("err");
        }

        callback(null);
    };

    var _getRecords = function(_db, callback) {
        var collection_records = _db.collection("records");
        collection_records.find({
                cid: form_data.cid,
                sid: form_data.sid
            }).sort([
                ["timestamp", -1],
                ["_id", -1]
            ]).limit(RECORD_COUNT).skip(parseInt(form_data.start_count))
            .toArray(function(err, result) {
                // console.log("\n\nhandle/getRecords", 49, "result:\n", result);
                _db.close();

                if (!result.length)
                    callback("no more");

                callback(err, result);
            });

    };

    // 处理记录——该插时间的时候，插时间
    var dealRecords = function(result, callback) {

        var news = [];

        var i = 0,
            len = result.length;

        for (; i < len; i++) {
            if (
                i > 0 &&
                result[i - 1].timestamp - result[i].timestamp >= 60 * 1000
            ) {
                news.push({
                    "_id": func.CreateRandomStr(24, 5),
                    "cid": form_data.cid,
                    "sid": form_data.sid,
                    "content": func.formatTimeStamp(result[i].timestamp, true),
                    "kind": 1,
                    "sender": "o",
                    "timestamp": result[i].timestamp,
                    "rdate": result[i].rdate.toLocaleString()
                });
            }
            news.push(result[i]);
        }

        if (len > 0)
            news.push({
                "_id": func.CreateRandomStr(24, 5),
                "cid": form_data.cid,
                "sid": form_data.sid,
                "content": func.formatTimeStamp(result[0].timestamp, true),
                "kind": 1,
                "sender": "o",
                "timestamp": result[0].timestamp,
                "rdate": result[0].rdate.toLocaleString()
            });

        callback(null, news);
    };

    async.waterfall([
        getParams,
        mongo.connect_async,
        _getRecords,
        dealRecords
    ], function(err, result) {
        // console.log("\n\nhandle/getRecords",106,"err:",err,"\nresult:\n",result);
        if (err)
            res.send("no more");
        else
            res.json(result);
    });
};