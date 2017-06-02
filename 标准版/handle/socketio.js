/*
    封装socket.io，以便获得server，从而监听
*/
var socket_io = require('socket.io');
var func = require('./functions.js');

//获取io
var socketio = function() {

    return {

        io: null,
        socket: [],
        nickname: [],

        // socket连接监听
        connection_Listener: function(server) {
            var that = this;

            that.io = socket_io.listen(server);

            that.io.sockets.on("connection", function(socket) {

                // console.log("\n\nsocketio", 24, "io.sockets\n", that.io.sockets);

                that.socket.push(socket);

                // 推送连接成功消息给socket
                socket.emit("connect_success");

                // 获取cookie
                // that.check_name(socket, "", 1);

                // 监听客户端键入昵称
                // that.prompt_name_Listener.apply(that, [socket]);

                // 监听客户端断开
                that.disconnect_Listener.apply(that, [socket]);

                // 监听客户端发送内容
                that.send_message_Listener.apply(that, [socket]);
            });
        },
        // 监听客户端键入昵称
        prompt_name_Listener: function(socket) {
            var that = this;

            // _nickname: 客户端输入的昵称
            socket.on("prompt_name", function(_nickname) {

                that.check_name(this, _nickname);
                // console.log("\n\nsocketio", 58, "\nthat.nickname:", that.nickname);
            });
        },
        // 验证昵称合法性，并进行socket广播
        // kind: 1-连接成功后自动进入 2-客户端输入昵称后进入
        check_name: function(socket, _nickname, kind) {

            var that = this;

            // 判断_nickname是否存在
            var hasNickname = that.nickname.indexOf(_nickname) == -1 && _nickname !== "" ? false : true;

            // console.log("\n\nsocketio", 58, "\nhasNickname:", hasNickname);
            // console.log("\n\nsocketio", 59, "\nthat.nickname:", that.nickname);

            if (hasNickname) {
                if (kind == 1)
                    socket.emit("connected");
                else if (kind == 2)
                    socket.emit("prompt_name_error", "对不起，此姓名已存在");
            } else {
                that.nickname.push(_nickname);
                var socketIndex = that.socket.indexOf(socket);
                that.socket[socketIndex].nickname = _nickname;
                socket.emit("prompt_name_success", that.nickname.length);
                socket.broadcast.emit("broadcast", 1, _nickname + " 加入了群聊");
                socket.broadcast.emit("set_title", "Chat_gj（" + that.nickname.length + "人）");
            }

            // console.log("\n\nsocketio", 73, "\nthat.nickname:", that.nickname);
        },
        // 监听客户端断开
        disconnect_Listener: function(socket) {
            var that = this;

            socket.on("disconnect", function() {

                // console.log("\n\nsocketio", 68, "\nthat.nickname:", that.nickname);
                var _socket = this;
                var socket_index = that.socket.indexOf(_socket);
                var nickname_index = that.nickname.indexOf(_socket.nickname);
                _socket.broadcast.emit("broadcast", 1, _socket.nickname + " 离开了群聊");
                that.nickname.splice(nickname_index, 1);
                that.socket.splice(socket_index, 1);
                _socket.broadcast.emit("set_title", "Chat_gj（" + that.nickname.length + "人）");

                // console.log("\n\nsocketio", 76, "\nthat.nickname:", that.nickname);
            });
        },
        // 监听客户端发送内容
        send_message_Listener: function(socket) {
            var that = this;
            socket.on("send_message", function(msg) {
                var _socket = this;
                if (_socket.nickname)
                    _socket.broadcast.emit("broadcast", 3, msg, _socket.nickname);
            });
        }
    };
};

module.exports = socketio;
