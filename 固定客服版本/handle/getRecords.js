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
    getRecords_handle = require("./getRecords"),
    fs = require("fs"),
    RECORD_COUNT = 10; // 每次读取历史记录的条数

// 获得更多消息记录
// @sid: sid，null的话会从form表单中获得
// @highlightKeywords: true/false(默认) 筛选疑似问题并高亮渲染
exports.getRecords = function (req, res, sid, highlightKeywords) {

    var form_data,
        find_opt = {},
        db;

    highlightKeywords = highlightKeywords || false;

    var getParams = function (callback) {

        var _body = req.body;
        form_data = {
            cid: func.filterNoNum(_body.cid),
            sid: (sid || _body.sid).toString(),
            risk_match: _body.risk_match,
            start_count: func.filterNoNum(_body.start_count) // 已读数量。此次读取从start_count+1开始
        };

        if (form_data.cid !== "")
            find_opt.cid = form_data.cid;
        if (form_data.sid !== "")
            find_opt.sid = form_data.sid;
        if (form_data.risk_match == "true")
            find_opt.risk_maybe = true;

        // console.log("\n\nhandle/getRecords", 30, "form_data:\n", form_data);

        // if (form_data.cid === "0" || form_data.sid === "") {
        //     callback("err");
        // }

        callback(null);
    };

    var _getRecords = function (_db, callback) {

        db = _db;

        var collection_records = db.collection("records");
        collection_records.find(find_opt).sort([
            ["timestamp", -1],
            ["_id", -1]
        ]).limit(RECORD_COUNT).skip(parseInt(form_data.start_count))
            .toArray(function (err, result) {
                // console.log("\n\nhandle/getRecords", 49, "result:\n", result);

                if (!result.length)
                    callback("no more");

                callback(err, result);
            });

    };

    // 统计消息记录包含的cid和sid，归纳数组
    var getCidAndSid = function (result, callback) {

        var cids = [],
            sids = [];

        // console.log("\n\n", "getRecords", 72, "result:\n", result);

        result.forEach(function (r) {
            cids.push(r.cid);
            sids.push(mongo.ObjectID(r.sid));
        });

        // console.log("\n\n", "getRecords", 79, "cids:\n", cids, "sids:\n", sids);

        callback(null, result, cids, sids);
    };

    // 统计消息记录包含的client和servicer
    var getClientAndServicer = function (result, cids, sids, callback) {

        var collection_chats = db.collection("chats");

        // 获得客户
        var getClient = function (getClientAndServicer_callback) {

            collection_chats.group(
                ["cid"], { "cid": { $in: cids } }, { "client": [] },
                "function(curr, result) {" +
                "result.client=curr.client;" +
                "}",
                function (err, client) {
                    // console.log("\n\n", "getRecords", 98, "err:\n", err);
                    getClientAndServicer_callback(err, client);
                }
            );
        };

        // 获得客服
        var getServicer = function (getClientAndServicer_callback) {

            collection_chats.group(
                ["sid"], { "sid": { $in: sids } }, { "servicer": [] },
                "function(curr, result) {" +
                "result.servicer=curr.servicer;" +
                "}",
                function (err, servicer) {
                    // console.log("\n\n", "getRecords", 118, "err:", err, "\n servicer:\n", servicer);
                    // console.log("\n\n", "getRecords", 119, "err:", err, "\n servicer[0]:\n", servicer[0]);
                    // console.log("\n\n", "getRecords", 119, "err:", err, "\n servicer[1]:\n", servicer[1]);
                    // console.log("\n\n", "getRecords", 120, "err:", err, "\n servicer[0].servicer:\n", servicer[0].servicer);
                    getClientAndServicer_callback(err, servicer);
                }
            );
        };

        async.parallel([
            getClient,
            getServicer
        ], function (err, ClientsAndServicers) {
            if (err) {
                console.log("\n\n", "getRecords", 129, "err:\n", err);
            }
            // console.log("\n\n", "getRecords", 131, "ClientsAndServicers:\n", ClientsAndServicers.getClient);

            callback(null, result, {
                clients: ClientsAndServicers[0],
                servicers: ClientsAndServicers[1]
            });
        });
    };

    // 处理记录——该插时间的时候插时间；扩展Clients和Servicers; 高亮关键词
    var dealRecords = function (result, ClientsAndServicers, callback) {

        // console.log("\n\n", "getRecords", 143, "clients:\n", ClientsAndServicers.clients[0].client);
        // console.log("\n\n", "getRecords", 144, "servicers:\n", ClientsAndServicers.servicers[0].servicer);

        var news = [];

        var i = 0,
            len = result.length;

        var dealClientsAndServicers = function () {
            return (function () {

                // 扩展Clients
                result[i].client = {
                    nickname: '',
                    headimg: ''
                };
                result[i].servicer = {
                    nickname: '',
                    headimg: ''
                };
                ClientsAndServicers.clients.some(function (client) {
                    if (result[i].cid == client.cid) {
                        result[i].client = client.client;
                        return true;
                    }
                });

                // 扩展Servicers
                ClientsAndServicers.servicers.some(function (servicer) {
                    // console.log("\n\n", "getRecords", 174, "servicer.servicer:");
                    // console.dir(servicer.servicer);
                    if (result[i].sid == servicer.sid) {
                        result[i].servicer = servicer.servicer;
                        return true;
                    }
                });
            })();
        };

        for (; i < len; i++) {
            // 插时间
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

            // 处理客户和客服的扩展
            dealClientsAndServicers();

            news.push(result[i]);
        }

        if (len > 0)
            news.push({
                "_id": func.CreateRandomStr(24, 5),
                "cid": "",
                "sid": "",
                "content": func.formatTimeStamp(result[i - 1].timestamp, true),
                "kind": 1,
                "sender": "o",
                "timestamp": result[0].timestamp,
                "rdate": result[i - 1].rdate.toLocaleString()
            });

        callback(null, news);
    };

    // 高亮关键词
    var _highlightKeywords = function (news, callback) {
        if (highlightKeywords)
            getRecords_handle.highlightKeywords_async(news, true, callback);
        else
            callback(null, news);
    };

    async.waterfall([
        getParams,
        mongo.connect_async,
        _getRecords,
        getCidAndSid,
        getClientAndServicer,
        dealRecords,
        _highlightKeywords
    ], function (err, result) {

        db.close();
        // console.log("\n\nhandle/getRecords",106,"err:",err,"\nresult:\n",result);
        if (err)
            res.send("no more");
        else
            res.json(result);
    });
};

// init表中的highlights_regExp
exports.init_highlightsRegExp = null;

// 执行疑似问题词汇筛查。callback(err,talk_list)。talk_list中增加.risk_maybe=true|false
// @talk_list: 消息列表
// @deal_filter: 是否执行高亮渲染 true | false
exports.highlightKeywords_async = function (talk_list, deal_filter, callback) {

    var db;

    // 获得正则表达式
    var getRegExp = function (_db, callback_hl) {
        db = _db;

        if (getRecords_handle.init_highlightsRegExp)
            callback_hl(null, getRecords_handle.init_highlightsRegExp);

        var collection_init = db.collection("init");
        collection_init.find({ kind: "use" }).next(function (err, init) {
            getRecords_handle.init_highlightsRegExp = init.highlights_regExp;
            callback_hl(err, init.highlights_regExp);
        });
    };

    // 执行过滤高亮
    var filter = function (regExp_arr, callback_hl) {
        var regExp;

        var deal = function (talk, talk_list_index) {
            return (function () {
                regExp = new RegExp(/(&nbsp;|\t)+/ig);
                talk = talk.replace(regExp, "");
                // console.log("\n\n", "getRecords", 264, "talk:", talk);

                var match_result = false;
                regExp_arr.forEach(function (regExp_str) {
                    regExp = new RegExp("(" + regExp_str + ")", "ig");
                    // console.log("\n\n", "getRecords", 264, "talk:", talk, "\nregExp:", regExp_str, "\nresult:", talk.match(regExp));

                    if (regExp.exec(talk))
                        match_result = true;

                    if (deal_filter) {
                        talk_list[talk_list_index].content = talk = talk.replace(regExp, function (m, $1) {

                            // console.log("\n\n", "getRecords", 291, "$1:", $1, "\n regExp_str:", regExp_str);
                            return "<hl>" + $1 + "</hl>";
                        });
                    }
                });

                return match_result;
            })();
        };

        talk_list.forEach(function (talk, index) {
            talk_list[index].risk_maybe = deal(talk.content, index);
        });

        callback_hl(null);
    };

    async.waterfall([
        mongo.connect_async,
        getRegExp,
        filter
    ], function (err) {

        db.close();

        if (err) {
            console.log("\n\n", "getRecords", 263, "err:\n", err);
        }

        callback(err, talk_list);
    });
};