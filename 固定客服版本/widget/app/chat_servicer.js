/*
    高京
    2017-06-10
    客服会话

    this= {
        socket,
        loadingToast,
        iosDialog2,
        lastTime // 最后一条消息的时间的毫秒数(long)
    }
*/

define([
    "lib/socket.io.min",
    "lib/functions"
], function($io, $func) {
    var chat_servicer = {
        init: function() {

            var that = this;

            that.loadingToast = $(".loadingToast");
            that.iosDialog2 = $("#iosDialog2");

            // 左侧会话列表的点击监听
            that.left_chatLine_click_Listener.apply(that);

            // 退出按钮点击监听
            that.quit_button_click_Listener.apply(that);

            // 发送消息按键监听
            that.textarea_keypress_Listener.apply(that);

            // 连接socket
            that.socket_connect.apply(that);

        },
        // 左侧会话列表的点击监听
        left_chatLine_click_Listener: function() {
            var that = this;

            $(".chat_list .chat_line").unbind("click").on("click", function() {
                var chat_line = $(this); // 点击行
                var talk_list = $("ul.talk_list"); // 右侧消息列表
                var content_fixed = $(".content_fixed");
                var p_loading = $(".wrapper_right p.loading"); // 加载中提示盒

                // 判断是否为当前高亮会话
                if (chat_line.hasClass("now"))
                    return;

                // 切换高亮行
                chat_line.siblings(".now").removeClass("now");
                chat_line.removeClass("new").addClass("now");

                // 隐藏输入框
                if (!content_fixed.hasClass("hidden"))
                    content_fixed.addClass("hidden");

                // 清空右侧消息列表
                talk_list.find("li:not(.template)").remove();

                // 还原that.lastTime
                that.lastTime = 0;

                // 显示loading
                p_loading.css("display", "block");

                // 获取消息记录
                $.ajax({
                    url: "/servicer/getRecordsHtmlByCid",
                    type: "post",
                    data: {
                        cid: chat_line.attr("cid")
                    },
                    success: function(result) {

                        if (result != "err") {
                            var sender_kind = 1;
                            result.forEach(function(r) {
                                switch (r.sender.toLowerCase()) {
                                    case "o":
                                        sender_kind = 1;
                                        break;
                                    case "s":
                                        sender_kind = 2;
                                        break;
                                    case "c":
                                        sender_kind = 3;
                                        break;
                                    default:
                                        break;
                                }
                                // console.log(r.rdate);
                                that.send_message.apply(that, [sender_kind, r.content, r.cid, Base_meta.sid, r.rdate, false]);

                            });
                        }

                        // 隐藏“加载中”
                        p_loading.css("display", "none");

                        // 显示消息输入框
                        if (content_fixed.hasClass("hidden"))
                            content_fixed.removeClass("hidden");
                    }
                });

            });
        },
        // 退出按钮点击监听
        quit_button_click_Listener: function() {

            $(".wrapper_right .cell_title .quit").unbind().on("click", function() {
                $.ajax({
                    url: "/servicer/quit",
                    type: "post",
                    beforeSend: function() {
                        var loadingToast = $(".loadingToast");
                        loadingToast.find(".weui-toast__content").text("清理中");
                        loadingToast.css("display", "block");
                    },
                    success: function() {
                        location.href = "/servicer/login";
                    }
                });
            });
        },
        // 发送消息按键监听
        textarea_keypress_Listener: function() {
            var that = this;

            $(".content_fixed textarea").unbind().on("keypress", function(e) {
                var sendKind = $(".tool_icon.sendKey").attr("kind");
                var send = false;
                if (sendKind == 1 && e.charCode == 13 && !(e.altKey || e.ctrlKey || e.shiftKey)) { // Enter发送
                    send = true;
                }

                if (send) {
                    var kind = 2,
                        msg = $(this).val(),
                        cid = $(".chat_list .chat_line.now").attr("cid"),
                        sid = Base_meta.sid;

                    if (msg.trim() === "") {
                        that.show_error_dialog.apply(that, ["请键入内容"]);
                    } else {
                        that.send_message(kind, msg.replace(/  /g, "&nbsp;&nbsp;").replace(/\n/g, "<br />"), cid, sid);
                    }

                    // 清空消息框
                    $(this).val("");

                    return false;
                }
            });
        },
        // 连接socket
        socket_connect: function() {
            var that = this;
            that.socket = $io.connect(Base_meta.GLOBAL_SOCKET_URL);

            // 监听socket连接成功
            that.socket_connect_success.apply(that);
        },

        // 接收socket连接成功推送
        socket_connect_success: function() {
            var that = this;
            that.socket.on("connect_success", function() {
                // $(".footer_button").css("display", "block");

                // 向服务器端socket灌注属性
                var changeData = {
                    kind: 2, // 记录此socket来源 1-客户端 2-客服端
                    cid: 0, // 客户id/token
                    sid: Base_meta.sid // 客服_id
                };
                that.send_join_room.apply(that, [changeData]);

                // 接收新客户连接成功推送
                that.socket_newClient_connected.apply(that);

                // 接收socket推送消息
                that.socket_send_message.apply(that);
            });
        },

        // 接收新客户连接成功推送
        socket_newClient_connected: function() {
            var that = this;

            that.socket.on("newClient_connected", function(cid) {

                that.send_join_room.apply(that, [{

                    kind: 2, // 记录此socket来源 1-客户端 2-客服端
                    cid: cid, // 客户id/token
                    sid: Base_meta.sid // 客服_id
                }]);
            });
        },

        // 向服务器端socket灌注属性
        // changeData = {
        //             kind: 2, // 记录此socket来源 1-客户端 2-客服端
        //             cid: 0, // 客户id/token
        //             sid: Base_meta.sid // 客服_id
        //         };
        send_join_room: function(changeData) {
            var that = this;
            that.socket.emit("join_room", changeData);
        },

        // 接收socket推送消息
        socket_send_message: function() {
            var that = this;

            that.socket.on("send_message", function(kind, msg, cid, sid, rdate) {

                // console.log("here");

                // 验证消息发送者是否为当前对话框
                var chat_line = $(".chat_line[cid=" + cid + "]");

                // console.log(chat_line.length);

                if (chat_line.length === 0) { // 没找到此发送者记录，需要添加

                    // 根据cid和sid查找会话记录(sid来源于登录验证)
                    $.ajax({
                        url: "/servicer/findChatByCid",
                        type: "post",
                        data: {
                            cid: cid
                        },
                        success: function(chat) {

                            // console.dir(chat);

                            if (chat === "err") {
                                console.log("err");
                                return;
                            }

                            // 添加左侧消息者记录
                            var last_time = new Date(chat.last_timestamp);
                            var chat_template = $(".chat_line.template").clone()
                                .removeClass("template")
                                .addClass("new")
                                .attr("cid", chat.cid);
                            chat_template.find("img").attr("src", chat.client.headimg);
                            chat_template.find(".nickname").text(chat.client.nickname);
                            chat_template.find(".last_time").text($func.dateFormat_wx(last_time).toLocaleString());
                            chat_template.find(".last_content").text(chat.last_content);
                            chat_template.prependTo(".chat_list");

                            // 监听左侧会话列表
                            that.left_chatLine_click_Listener.apply(that);
                        }
                    });

                } else { // 有此发送者记录

                    chat_line.find(".last_time").text($func.dateFormat_wx(rdate));
                    chat_line.find(".last_content").text(msg);

                    // 不在顶部，则移动至顶部
                    if (chat_line.parent().find("li").index(chat_line) !== 0)
                        chat_line.prependTo(".chat_list");

                    if (chat_line.hasClass("now")) { // 是当前对话框，向右侧增加会话记录
                        that.send_message.apply(that, [3, msg, cid, sid, rdate]);
                    } else {
                        chat_line.addClass("new");
                    }
                }
            });
        },

        // 处理消息推送（包括本页自己发送的消息 和 socketio推送的消息）
        // kind: 1-系统消息 2-我的消息 3-对方消息
        // date: null为系统当前时间
        // sendto_socketio: 是否发送socket广播，默认true。读历史记录时，就可以传false
        send_message: function(kind, msg, cid, sid, date, sendto_socketio) {
            var that = this;

            // console.log(kind, msg, cid, sid, date);

            date = date || new Date();
            date = new Date(date.toString().replace(/-/ig, "/"));

            if (sendto_socketio === undefined)
                sendto_socketio = true;

            // console.log(date);

            if (kind == 2 && sendto_socketio) {
                // 将消息发往服务器
                that.socket.emit("send_message", msg, "s", cid, sid, date);

                // 更新左侧记录
                var chat_line = $(".chat_list .chat_line.now");
                chat_line.find(".last_time").text($func.dateFormat_wx(date));
                chat_line.find(".last_content").html(msg);
                if (chat_line.parent().find(".chat_list").index(chat_line) !== 0)
                    chat_line.prependTo(".chat_list");
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

                console.log(!that.lastTime, date.getTime(), that.lastTime, date.getTime() - that.lastTime, 60 * 1000);

                // 时间差大于1分钟
                if (!that.lastTime || date.getTime() - that.lastTime >= 60 * 1000) {
                    console.log(date);
                    that.send_message.apply(that, [1, $func.dateFormat_wx(date)]);
                }

            }

            // 更新最后消息时间
            // console.log(date);
            if (kind != 1)
                that.lastTime = date.getTime();

            // 装载内容
            li.find("p").html("<span class=\"arrow\"></span>" + msg);

            // 装载昵称和头像
            if (kind == 2) {
                li.find("img").attr("src", Base_meta.headimg);
            } else if (kind == 3) {
                li.find(".name").text($(".chat_list .chat_line.now .nickname").text());
                li.find("img").attr("src", $(".chat_list .chat_line.now img").attr("src"));
            }

            // 装载li
            li.removeClass("template")
                .appendTo("ul.talk_list");

            // 消息窗口向上滚动
            var ul = li.parents(".talk_list");
            var ul_height_px = ul.height();
            var ul_scrollHeight = ul[0].scrollHeight - ul.css("padding-bottom").replace("px", "");
            if (ul_scrollHeight > ul_height_px) {
                ul.scrollTop(ul_scrollHeight - ul_height_px);
            }
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
        }
    };

    return chat_servicer;
});
