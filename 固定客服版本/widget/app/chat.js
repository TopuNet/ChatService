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

define(["lib/socket.io.min"], function($io) {
    var chat = {
        init: function() {
            var that = this;

            that.loadingToast = $(".loadingToast");
            that.iosDialog2 = $("#iosDialog2");

            // 处理服务器端渲染err
            that.deal_err.apply(that);

            // 监听socket连接成功
            that.socket_connect_success.apply(that);

            // 监听表单提交
            that.form_send_submit_Listener.apply(that);
        },

        // 处理服务器端渲染err
        deal_err: function() {
            var that = this;

            // 客服进入已有其他客服接入的对话时
            if (Base_meta.err == "noServicers") {
                that.show_error_dialog("此商户暂时没有顾问可提供服务", function() {
                    history.back();
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
                that.send_message.apply(that, [1, "正在为您接入客服，请保持屏幕常亮"]);

            // that.socket = $io.connect("http://117.79.92.82:4545");
            that.socket = $io.connect(GLOBAL_SOCKET_URL);
        },

        // 监听socket连接成功
        socket_connect_success: function() {
            var that = this;
            that.socket.on("connect_success", function() {
                $(".footer_button").css("display", "block");

                // 客服
                if (Base_meta.kind == 2)
                    that.send_message.apply(that, [2, "您好，请问有什么可以帮您？"]);
            });
        },

        // 从cookie中读取昵称
        name_loadfrom_cookie: function() {
            var that = this;
            var reg = new RegExp(/Chat_gj_nickname=(?:(.+); .+|(.+)$)/gi);
            var nickname = reg.exec(document.cookie);
            if (nickname === null)
                that.prompt_name.apply(that);
            else {
                that.nickname = nickname[1] || nickname[2];
                that.nickname = unescape(that.nickname);
                // console.log(that.nickname);
                that.socket.emit("prompt_name", that.nickname);
                that.loadingToast.css("display", "block");
            }


        },

        // 输入名称
        prompt_name: function() {
            var that = this;
            that.nickname = prompt("请键入您的姓名");

            if (!that.nickname)
                that.show_error_dialog.apply(that, ["请键入您的姓名"]);
            else {
                that.socket.emit("prompt_name", that.nickname);
                that.loadingToast.css("display", "block");
            }
        },
        // 监听输入名称失败
        prompt_name_error: function() {
            var that = this;

            that.socket.on("prompt_name_error", function(msg) {
                that.show_error_dialog.apply(that, [msg]);
            });
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
        // 监听输入名称成功
        prompt_name_success: function() {
            var that = this;

            that.socket.on("prompt_name_success", function() {
                that.send_message.apply(that, [1, "欢迎您加入群聊"]);

                that.loadingToast.css("display", "none");
                $("div.form").css("display", "block");
                $("div.preform").css("display", "none");

                that.name_savein_cookie.apply(that);
            });
        },
        // 名称存入cookie
        name_savein_cookie: function() {
            var that = this;

            var exp = new Date();
            exp.setTime(exp.getTime() + 24 * 60 * 60 * 1000);
            document.cookie = "Chat_gj_nickname=" + escape(that.nickname) + ";expires=" + exp.toGMTString();
        },
        // 监听消息推送
        broadcast: function() {
            var that = this;

            // kind: 1-系统消息 2-我的消息 3-其他人消息
            // sender: 发送人（kind=3有效）
            that.socket.on("broadcast", function(kind, msg, sender) {
                that.send_message.apply(that, [kind, msg, sender]);
            });
        },
        // 监听修改浏览器title的推送
        set_title_Listener: function() {
            var that = this;

            that.socket.on("set_title", function(t) {
                that.set_title.apply(that, [t]);
            });
        },
        // 设置页面标题
        // t: 标题内容
        set_title: function(t) {
            document.title = t;
        },
        // 推送消息
        // kind: 1-系统消息 2-我的消息 3-对方消息
        send_message: function(kind, msg) {
            var that = this;

            // 将我的消息发往服务器
            if (kind == 2) {
                // that.socket.emit("send_message", Base_meta.kind, )
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
            var date = new Date();
            if (kind != 1) {

                // 时间差大于1分钟
                if (!that.lastTime || date.getTime() - that.lastTime >= 60 * 1000) {
                    that.send_message.apply(that, [1, that.dateFormat.apply(that, [date])]);
                }

            }

            // 更新最后消息时间
            if (kind != 1)
                that.lastTime = date.getTime();

            // 装载内容
            li.find("p").html("<span class=\"arrow\"></span>" + msg);

            // 装载li
            li.removeClass("template")
                .appendTo("ul.list");
        },

        // 监听表单提交
        form_send_submit_Listener: function() {
            var that = this;
            var form = $(".footer_button form");
            var input = form.find(".message_content");
            var button = form.find(".weui-btn_primary");

            form.unbind().on("submit", function(e) {
                e.preventDefault();

                var text = input.val();
                if (text === "") {
                    that.show_error_dialog("请键入内容");
                } else {
                    that.socket.emit("send_message", text);
                    that.send_message.apply(that, [2, text]);
                    input.val("");
                }
            });

            $("input.button_modify_nickname").unbind().on("touchstart mousedown", function(e) {
                e.preventDefault();
                that.prompt_name.apply(that);
            });
        },
        // 日期格式化
        dateFormat: function(date) {

            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var hour = date.getHours();
            var minute = date.getMinutes();
            var second = date.getSeconds();

            var str = year + "年";
            // if (month < 10)
            //     str += "0";
            str += month + "月";
            // if (day < 10)
            //     str += "0";
            str += day + "日 ";
            if (hour < 10)
                str += "0";
            str += hour + ":";
            if (minute < 10)
                str += "0";
            str += minute + ":";
            if (second < 10)
                str += "0";
            str += second;

            return str;
        }
    };

    return chat;
});
