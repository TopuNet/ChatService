/*
    封装socket.io，以便获得server，从而监听

    that = {
        io
    }
*/
var socket_io = require('socket.io'),
    // config = require('./config.js'),
    mongo = require("../handle/mongodb.js"),
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

                // 监听客户端灌注socket属性的推送
                that.socket_send_join_room.apply(that, [socket]);

                // 监听客户端发送内容
                that.socket_send_message_Listener.apply(that, [socket]);

                // 监听断开事件
                that.socket_disconnect_Listener.apply(that, [socket]);
            });
        },
        // 监听断开事件
        socket_disconnect_Listener: function(socket) {
            // var that = this;

            socket.on("disconnect", function() {
                // if (socket.cid === 0) { // 客服socket
                //     config.socket_global_2.some(function(socket, index) {
                //         if (socket.sid == socket.sid) {
                //             config.socket_global_2.splice(index, 1);
                //             return true;
                //         }
                //     });
                // } else { // 客户socket
                //     config.socket_global_1.some(function(socket, index) {
                //         if (socket.cid == socket.cid && socket.sid == socket.sid) {
                //             config.socket_global_1.splice(index, 1);
                //             return true;
                //         }
                //     });
                // }
            });
        },

        // 监听客户端灌注socket属性的推送
        socket_send_join_room: function(socket) {
            var that = this;
            socket.on("join_room", function(data) {

                // console.log("\n\nsocket", 57, "data:\n", data);
                // console.log("\n\nsocket", 58, "config.socket_global_2:\n", config.socket_global_2);
                // console.log("\n\nsocket", 59, "data.kind:\n", data.kind);

                // socket.cid = data.cid;
                // socket.sid = data.sid;

                var db;

                // 将socket加入房间
                var joinRoom = function(_db, callback) {

                    db = _db;

                    switch (data.kind.toString()) {
                        case "1":

                            // console.log("\n\nsocket.io", 99, "that.io.sockets.adapter.rooms:\n", that.io.sockets.adapter.rooms);
                            // 遍历所有rooms，找到第一个相同客服的房间
                            var rooms = Object.keys(that.io.sockets.adapter.rooms);
                            rooms.some(function(r) {
                                if (r.match("^room(_\\w+)?_" + data.sid + "$")) {

                                    // console.log("\n\nsocketio", 105, "room:", r);

                                    socket.to(r).emit("newClient_connected", data.cid);
                                    return true;
                                }
                            });

                            socket.join("room_" + data.cid + "_" + data.sid, function() {

                                callback(null);
                            });
                            break;
                        case "2":

                            // console.log("\n\nsocketio", 117, "data.cid:", data.cid);

                            if (data.cid.toString() !== "0") {
                                socket.join("room_" + data.cid + "_" + data.sid);
                                callback(null);

                                // console.log("\n\nsocketio", 123, "rooms:", Object.keys(that.io.sockets.adapter.rooms));
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

                    // console.log("\n\nsocketio", 137, "\nsocket.rooms:", socket.rooms);

                });
            });
        },

        // 监听内容发送
        socket_send_message_Listener: function(socket) {
            // var that = this;

            // sender"c"-客户消息 "s"-客服消息 "o"-系统消息
            socket.on("send_message", function(msg, sender, cid, sid, rdate) {

                // console.log("\n\nsocket", 156, "msg:", msg, "sender:", sender, "cid:", cid, "sid:", sid, "rdate:", rdate);
                // that.io.clients(function(err, c) {

                //     var i = 0,
                //         len = c.length;

                //     console.log("\n\nsocket", 149, that.io.sockets.sockets);
                // });

                var db;
                rdate = new Date(rdate);

                // 更新chats表的last_time和last_content
                var update_last_time = function(_db, callback) {
                    db = _db;

                    var collection_chats = db.collection("chats");

                    // 更新last_timestamp
                    collection_chats.updateOne({
                        cid: cid,
                        sid: mongo.ObjectID(sid)
                    }, {
                        $set: {
                            last_timestamp: rdate.getTime(),
                            last_content: msg
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

                // 添加记录
                var addRecord = function(callback) {
                    var collection_records = db.collection("records");

                    // 添加records
                    collection_records.insertOne({
                        "cid": cid,
                        "sid": sid,
                        "content": msg,
                        "kind": 1,
                        "sender": sender,
                        "timestamp": rdate.getTime(),
                        "rdate": rdate.toLocaleString()
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

                    // console.log("\n\nsocketio", 216, "socket.rooms:\n", socket.rooms);

                    // 客户上线状态
                    socket.to("room_" + cid + "_" + sid).emit("send_message", sender == "o" ? 1 : 3, msg, cid, sid, rdate);

                    callback(null);
                };

                // 执行async
                async.waterfall([
                    mongo.connect_async,
                    update_last_time,
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
