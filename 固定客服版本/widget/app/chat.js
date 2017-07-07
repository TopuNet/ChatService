/*
    Chat 配套js文件
    高京
    2017-05-16

    this= {
        socket,
        loadingToast,
        iosDialog2,
        lastTime // 最后一条消息的时间的毫秒数(long)
    }
*/

var GLOBAL_SOCKET_URL = "http://localhost:4545";

define([
    "lib/socket.io.min",
    "lib/functions"
], function($io, $func) {
    var chat = {
        init: function() {
            var that = this;

            that.loadingToast = $(".loadingToast");
            that.iosDialog2 = $("#iosDialog2");

            // 处理服务器端渲染err
            that.deal_err.apply(that);

            // 监听socket连接成功
            that.socket_connect_success.apply(that);

            // 接收socket推送消息
            that.socket_send_message.apply(that);

            // 监听表单提交
            that.form_send_submit_Listener.apply(that);
        },

        // 处理服务器端渲染err，无err则执行socket_connect⬇️
        deal_err: function() {
            var that = this;

            // 客服进入已有其他客服接入的对话时
            if (Base_meta.err == "noServicers") {
                that.show_error_dialog("此商户暂时没有顾问可提供服务", function() {
                    location.history.back();
                });
            } else if (Base_meta.err == "sidError") {
                that.show_error_dialog("此会话已结束", function() {
                    location.href = "list";
                });
            } else {

                // 连接socket
                that.socket_connect.apply(that);
            }
        },

        // 连接socket
        socket_connect: function() {
            var that = this;

            // 客户
            if (Base_meta.kind == 1)
                that.send_message.apply(that, [1, "已为您接入客服，请问您有什么问题？"]);
                // that.send_message.apply(that, [1, "您好!欢迎来到中企服！很高兴为您服务!<br />我们的专业顾问服务5*8小时在线，期待与您的沟通。"]);


            // that.socket = $io.connect("http://117.79.92.82:4545");
            that.socket = $io.connect(GLOBAL_SOCKET_URL);
        },

        // 接收socket连接成功推送
        socket_connect_success: function() {
            var that = this;
            that.socket.on("connect_success", function() {
                $(".footer_button").css("display", "block");

                // 向服务器端socket灌注属性
                var changeData = {
                    kind: Base_meta.kind, // 记录此socket来源 1-客户端 2-客服端
                    cid: Base_meta.cid, // 客户id/token
                    sid: Base_meta.sid // 客服_id
                };
                that.send_join_room.apply(that, [changeData]);

                // 客户
                // if (Base_meta.kind == 1) {

                // 向客服推送某个客户的在线状态
                // var online = true; // 上线/下线
                // that.send_onlineStatus_toServicer.apply(that, [online, Base_meta.cid, Base_meta.sid]);
                // }

                // 客服
                // if (Base_meta.kind == 2)
                //     that.send_message.apply(that, [2, "您好，请问有什么可以帮您？"]);

            });
        },

        // 接收socket推送消息
        socket_send_message: function() {
            var that = this;

            that.socket.on("send_message", function(kind, msg, cid, sid, rdate) {

                that.send_message.apply(that, [kind, msg, cid, sid, rdate]);
            });
        },

        // 处理消息推送（包括本页自己发送的消息 和 socketio推送的消息）
        // kind: 1-系统消息 2-我的消息 3-对方消息
        send_message: function(kind, msg, cid, sid) {
            var that = this;

            var date = new Date();

            // console.log(kind, msg, cid, sid, date.toLocaleString());

            // 将消息发往服务器
            if (kind == 2) { // 客户发送的消息
                that.socket.emit("send_message", msg, "c", cid, sid, date);
            }

            var li;
            switch (kind) {
                case 1:
                    li = $("li.template.center").clone();
                    break;
                case 2:
                    li = $("li.template.right").clone();
                    break;
                case 3:
                    li = $("li.template.left").clone();
                    break;
            }

            // 如果上一条消息的时间不为空，并且不是系统消息，则需要判断时间间隔来决定是否推送一条时间消息
            if (kind != 1) {

                // 时间差大于1分钟
                if (!that.lastTime || date.getTime() - that.lastTime >= 60 * 1000) {
                    that.send_message.apply(that, [1, $func.dateFormat_wx(date)]);
                }

            }

            // 更新最后消息时间
            if (kind != 1)
                that.lastTime = date.getTime();

            // 装载内容
            li.find("p").html("<span class=\"arrow\"></span>" + msg);

            // 装载昵称和头像
            if (kind == 2) {
                li.find("img").attr("src", Base_meta.client_headimg);
            } else if (kind == 3) {
                li.find(".name").text(Base_meta.sname);
                li.find("img").attr("src", Base_meta.servicer_headimg);
            }

            // 装载li
            li.removeClass("template")
                .appendTo("ul.list");

            // 消息窗口向上滚动
            var ul = li.parents(".list");
            var ul_height_px = parseFloat(ul.height()) + parseFloat(ul.css("padding-bottom").replace("px", "")) + parseFloat($(".fixed_space").height());
            var stoped_wrapper = $(".stoped_wrapper");
            var stoped_wrapper_height_px = stoped_wrapper.height();
            // console.log(ul_height_px, stoped_wrapper_height_px);
            if (ul_height_px > stoped_wrapper_height_px) {
                stoped_wrapper.scrollTop(ul_height_px - stoped_wrapper_height_px);
            }
        },

        // 向服务器端socket灌注属性
        send_join_room: function(changeData) {
            var that = this;
            that.socket.emit("join_room", changeData);
        },

        // 向客服推送某个客户的在线状态
        // online:true/false
        send_onlineStatus_toServicer: function(online, cid, sid) {
            var that = this;

            that.socket.emit("onlineStatus_change", online, cid, sid);
        },

        // 显示错误信息弹层
        show_error_dialog: function(msg, callback) {
            var that = this;

            that.iosDialog2.find(".weui-dialog__bd").text(msg);
            that.iosDialog2.find(".weui-dialog__btn_primary").unbind().on("touchstart mousedown", function(e) {
                e.preventDefault();

                if (callback)
                    callback();

                that.iosDialog2.css("display", "none");
            });
            that.iosDialog2.css("display", "block");
        },

        // 监听表单提交
        form_send_submit_Listener: function() {
            var that = this;
            var form = $(".footer_button form");
            var input = form.find(".message_content");

            form.unbind().on("submit", function(e) {
                e.preventDefault();

                var text = input.val();
                if (text === "") {
                    that.show_error_dialog("请键入内容");
                } else {
                    that.send_message.apply(that, [2, text, Base_meta.cid, Base_meta.sid]);
                    input.val("");
                }
            });

            $("input.button_modify_nickname").unbind().on("touchstart mousedown", function(e) {
                e.preventDefault();
                that.prompt_name.apply(that);
            });
        }
    };

    return chat;
});
