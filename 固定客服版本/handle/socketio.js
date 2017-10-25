/*
    封装socket.io，以便获得server，从而监听

    !注意!：socket.io连接的不是iis中的服务，连接的是另一个服务（服务器上iis架的是网站，服务里相当于架的是socketio），修改后需要重启服务而不是重启iis

    that = {
        io
    }
*/
var socket_io = require('socket.io'),
    // config = require('./config.js'),
    mongo = require("../handle/mongodb.js"),
    getRecords_handle = require("../handle/getRecords.js"),
    emotion_handler = require("../handle/emotion.js"),
    func = require("../handle/functions.js"),
    async = require("async");

//获取io
var socketio = function() {

    return {

        io: null,
        // socket: null,
        connection_Listener: function(server) {
            var that = this;

            that.io = socket_io.listen(server);

            that.io.sockets.on("connection", function(socket) {

                // console.log("\n\nsocketio", 23, "socket:", socket.id);

                // if (that.chat.chat_kind === 0) {
                //     return;
                // } else {

                //     socket.chat = chat;
                //     eval("socket_" + that.chat.chat_kind + ".push(socket);");

                //     // 推送客户上线消息给客服
                //     if (that.chat.chat_kind == 1)
                //         that.send_onlineInfo_toServicer.apply(that, [socket]);
                // }

                // 推送连接成功消息给socket客户端
                socket.emit("connect_success");

                // 监听客户端加入房间的推送
                that.socket_send_join_room.apply(that, [socket]);

                // 监听客户端发送内容
                that.socket_send_message_Listener.apply(that, [socket]);

                // 监听断开事件
                that.socket_disconnect_Listener.apply(that, [socket]);
            });
        },
        // 监听断开事件
        socket_disconnect_Listener: function(socket) {
            var that = this;

            socket.on("disconnect", function() {
                var rooms = Object.keys(that.io.sockets.adapter.rooms);

                rooms.forEach(function(r) {
                    socket.leave(r);
                });
            });
        },

        // 监听客户端加入房间的推送
        socket_send_join_room: function(socket) {
            var that = this;

            /* 
                @data: {
                    kind: // 记录此socket来源 1-客户端 2-客服端,
                    cid: // 客户id，0为全部
                    sid: // 客服id，""为全部
                } 
            */
            socket.on("join_room", function(data) {

                var db;

                // 将socket加入房间
                var joinRoom = function(_db, callback) {

                    db = _db;

                    switch (data.kind.toString()) {
                        case "1":

                            // console.log("\n\nsocket.io", 101, "that.io.sockets.adapter.rooms:\n", that.io.sockets.adapter.rooms);

                            // console.log("\n\n socketio", 103, "data.sid:", data.sid);

                            // 遍历所有rooms，找到第一个相同客服的房间，发送消息
                            var rooms = Object.keys(that.io.sockets.adapter.rooms);
                            rooms.some(function(r) {
                                if (r.match("^room(_\\w+)?_(" + data.sid + ")$") &&
                                    r != "room_" + data.cid + "_data.sid") {

                                    // console.log("\n\nsocketio", 110, "room:", r);

                                    socket.to(r).emit("newClient_connected", data.cid);
                                    return true;
                                }
                            });

                            // 加入房间
                            var sids = data.sid.split('|');
                            var joins = [];
                            sids.forEach(function(sid) {
                                joins.push("room_" + data.cid + "_" + sid);
                            });

                            // console.log("\n\n socketio", 134, "joins:\n", joins);
                            socket.join(joins, function() {

                                callback(null);
                            });
                            break;
                        case "2":

                            // console.log("\n\nsocketio", 117, "data.cid:", data.cid);

                            if (data.cid.toString() !== "0") {
                                socket.join("room_" + data.cid + "_" + data.sid);
                                // console.log("\n\nsocketio", 123, "rooms:", Object.keys(that.io.sockets.adapter.rooms));
                                callback(null);

                            } else {

                                // 查询sid对应的所有chats，遍历chats，join不同room
                                var collection_chats = db.collection("chats");
                                collection_chats.find({
                                    sid: mongo.ObjectID(data.sid)
                                }).toArray(function(err, r) {
                                    if (err) {
                                        callback(null);
                                    }
                                    var i = 0,
                                        len = r.length,
                                        rooms = [];
                                    for (; i < len; i++) {
                                        rooms.push("room_" + r[i].cid + "_" + data.sid);
                                    }
                                    // console.log("\n\nsocketio", 140, "r.length:", r.length);
                                    if (r.length === 0)
                                        rooms.push("room_0_" + data.sid);
                                    socket.join(rooms, function() {
                                        // console.log("\n\nsocketio", 144, "socket:\n", socket.rooms);
                                        callback(null);
                                    });
                                });
                            }
                            break;
                        default:
                            break;
                    }

                };

                // 执行async
                async.waterfall([
                    mongo.connect_async,
                    joinRoom
                ], function(err) {

                    db.close();

                    if (err) {
                        console.log("\n\nsocketio", 121, "err:\n", err);
                    }

                    // console.log("\n\nsocket.io", 183, "that.io.sockets.adapter.rooms:\n", that.io.sockets.adapter.rooms);

                    // console.log("\n\nsocketio", 185, "\nsocket.rooms:", socket.rooms);

                });
            });
        },

        // 监听内容发送
        socket_send_message_Listener: function(socket) {

            // sender"c"-客户消息 "s"-客服消息 "o"-系统消息
            socket.on("send_message", function(msg, sender, cid, sid, _rdate) {

                // console.log("\n\nsocket", 156, "msg:", msg, "sender:", sender, "cid:", cid, "sid:", sid, "rdate:", rdate);
                // that.io.clients(function(err, c) {

                //     var i = 0,
                //         len = c.length;

                //     console.log("\n\nsocket", 149, that.io.sockets.sockets);
                // });

                var db;
                var rdate = new Date(_rdate);

                // 过滤msg的非法字符
                var convers_msg = function(callback) {
                    msg = func.convers(msg);
                    callback(null);
                };

                // 更新chats表的has_noRead_record、last_timestamp、last_content和last_rdate
                var update_last_time = function(_db, callback) {
                    db = _db;

                    var collection_chats = db.collection("chats");

                    var has_noRead_record_client,
                        has_noRead_record_servicer;

                    if (sender == "c") {
                        has_noRead_record_client = false;
                        has_noRead_record_servicer = true;
                    } else if (sender == "s") {
                        has_noRead_record_client = true;
                        has_noRead_record_servicer = false;
                    } else {
                        has_noRead_record_client = false;
                        has_noRead_record_servicer = false;
                    }

                    // 更新last_timestamp
                    collection_chats.updateOne({
                        cid: cid,
                        sid: mongo.ObjectID(sid)
                    }, {
                        $set: {
                            has_noRead_record_client: has_noRead_record_client,
                            has_noRead_record_servicer: has_noRead_record_servicer,
                            last_timestamp: rdate.getTime(),
                            last_content: msg,
                            last_rdate: rdate.toLocaleString()
                        }
                    }, function(err) {
                        if (err) {
                            console.log("\n\nsocketio", 171, "err:\n", err);
                            callback(err);
                        } else {
                            // console.log("\n\nsocketio", 180, "r.result:\n", r.result);
                            callback(null);
                        }
                    });

                };

                // 更换表情[服务端不换了先，原样保存，客户端解析]
                var emotion_filter = function(callback) {

                    // 基础正则
                    var regExp_base_str = "(\\[.+?\\])";

                    // 扩展正则，出现在基础正则前面
                    var regExp_ext_str = "";

                    // 正则条件对象
                    var regExp = new RegExp("()" + regExp_base_str);

                    var result,
                        name_index;
                    var replace_callback = function(m, $1) {
                        return (function() {
                            return $1 + "<span class=\"emotion\" style=\"background-image:url('/inc/emotion/Expression_" + name_index + ".png');\"></span>";
                        })();
                    };
                    while (true) {
                        result = regExp.exec(msg);


                        // console.log("\n\n", "socketio", 257, "result:", result, "\n regExp_ext_str:" + regExp_ext_str);

                        if (!result)
                            break;


                        name_index = emotion_handler.emotion_name_list.indexOf(result[2]);

                        // console.log("\n\n", "socketio", 265, "name_index:", name_index);
                        if (name_index == -1) {
                            regExp_ext_str += "\\" + result[2].replace("]", "\\]") + ".*?";
                            regExp = new RegExp("(" + regExp_ext_str + ")" + regExp_base_str);
                        } else {
                            msg = msg.replace(regExp, replace_callback);
                        }
                    }

                    // console.log("\n\n", "socketio", 273, "msg:\n", msg);

                    callback(null);
                };

                // 风险筛查
                var risk_match = function(callback) {

                    // 准备工作
                    var prepare = function(callback_risk) {
                        var talk_list = [{
                            content: msg
                        }];

                        callback_risk(null, talk_list, false);
                    };

                    async.waterfall([
                        prepare,
                        getRecords_handle.highlightKeywords_async
                    ], function(err, result) {
                        if (err) {
                            console.log("\n\n", "socketio", 265, "err:\n", err);
                            callback(null, false);
                        } else {
                            callback(null, result[0].risk_maybe);
                        }

                    });
                };

                // 添加记录
                var addRecord = function(risk_maybe, callback) {
                    var collection_records = db.collection("records");

                    // 添加records
                    collection_records.insertOne({
                        "cid": cid,
                        "sid": sid,
                        "content": msg,
                        "kind": 1,
                        "sender": sender,
                        "timestamp": rdate.getTime(),
                        "rdate": rdate.toLocaleString(),
                        "risk_maybe": risk_maybe
                    }, function(err) {
                        if (err) {
                            console.log("\n\nsocketio", 185, "err:\n", err);
                            callback(err);
                        } else {
                            callback(null);
                        }

                    });
                };

                // 发送广播
                var send_broadcast = function(callback) {

                    // console.log("\n\nsocketio", 281, "rdate:\n", rdate, "\n", rdate.toLocaleString());
                    // console.log("\n\nsocket.io", 282, "that.io.sockets.adapter.rooms:\n", that.io.sockets.adapter.rooms);

                    socket.to("room_" + cid + "_" + sid).emit("send_message", sender == "o" ? 1 : 3, msg, cid, sid, rdate.toLocaleString(), rdate);

                    callback(null);
                };

                // 执行async
                async.waterfall([
                    convers_msg,
                    mongo.connect_async,
                    update_last_time,
                    // emotion_filter,
                    risk_match,
                    addRecord,
                    send_broadcast
                ], function(err) {
                    db.close();
                    if (err)
                        console.log("\n\nsocketio", 232, "err:\n", err);
                });
            });
        }
    };
};

module.exports = socketio;