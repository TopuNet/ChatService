/*
    Chat 配套js文件
    高京
    2017-05-16

    this= {
        socket,
        loadingToast,
        iosDialog2,
        lastTime, // 最后一条消息的时间的毫秒数(long)
        title_height_px // 微信标题栏高度
    }
*/

define([
    "lib/socket.io.min",
    "lib/functions"
], function($io, $func) {
    var chat = {
        RECORD_COUNT: 10, // 一次读取的记录条数
        init: function() {
            var that = this;

            that.loadingToast = $(".loadingToast");
            that.iosDialog2 = $("#iosDialog2");
            that.title_height_px = window.screen.height - window.innerHeight;

            // that.send_message.apply(that, [1, "window_screen_height:" + window.screen.height]);
            // that.send_message.apply(that, [1, "window_innerHeight:" + window.innerHeight]);

            // 处理服务器端渲染err，无错误再进行其他事件的监听和socket连接
            that.deal_err.apply(that);
        },

        // 判断是否需要显示“查看更多历史消息”
        jduge_show_more_records: function() {
            var that = this;

            var message_li_count = $(".message:not(.template)").length;
            if (message_li_count >= that.RECORD_COUNT) {
                $(".more_record:not(.show)").addClass("show");
                that.show_more_records_Listener.apply(that);
            }
        },

        // 获取更多历史消息的点击监听
        show_more_records_Listener: function() {
            var that = this;

            $(".more_record.show").unbind().on("touchstart mousedown", function(e) {
                e.preventDefault();

                // console.log("here");

                $.ajax({
                    url: "/getMoreRecords",
                    type: "post",
                    data: {
                        cid: Base_meta.cid.toString(),
                        sid: Base_meta.sid,
                        start_count: $(".list .message:not(.template)").length
                    },
                    beforeSend: function() {
                        that.loadingToast.find(".weui-toast__content").text("请稍候");
                        that.loadingToast.css("display", "block");
                    },
                    success: function(result) {
                        that.loadingToast.css("display", "none");

                        var more_record = $("ul.list .more_record");

                        var c = 0;
                        if (result.forEach) {
                            result.forEach(function(r) {

                                c++;

                                var kind;
                                switch (r.sender) {
                                    case "c":
                                        kind = 2;
                                        break;
                                    case "s":
                                        kind = 3;
                                        break;
                                    default:
                                        c--;
                                        kind = 1;
                                        break;
                                }
                                that.send_message(kind, r.content, r.cid, r.sid, true);
                            });

                        }

                        if (c < that.RECORD_COUNT)
                            more_record.removeClass("show");
                        else
                            more_record.prependTo("ul.list");
                    }
                });

            });
        },

        // 默认滚动到最底
        rollToBottom: function() {
            // var that = this;

            // 在/lib/mobile_stop_moved中，setTimeOut 修改.stoped_wrapper的高，所以此处要延时处理
            setTimeout(function() {

                var stoped_wrapper = $(".stoped_wrapper");
                // console.log(stoped_wrapper.length);
                var stoped_wrapper_scrollheight_px = stoped_wrapper[0].scrollHeight;
                var stoped_wrapper_height_px = stoped_wrapper.height();

                stoped_wrapper.scrollTop(stoped_wrapper_scrollheight_px - stoped_wrapper_height_px);
            }, 500);
        },

        // 处理服务器端渲染err，无err则执行socket_connect⬇️
        deal_err: function() {
            var that = this;

            // 无客服可提供服务
            if (Base_meta.err == "noServicers") {
                that.show_error_dialog("Sorry~暂时没有顾问可提供服务", function() {
                    location.href = "http://wx.zhongqifu.com.cn/f/Service_Classification.aspx?source=1"
                });
            } else if (Base_meta.err == "sidError") { // 基本不会了。
                that.show_error_dialog("此会话已结束", function() {
                    location.href = "list";
                });
            } else {

                // 判断是否需要显示“查看更多历史消息”
                that.jduge_show_more_records.apply(that);

                // 解决ios端fixed居底input被键盘遮挡的问题
                $func.fix_ios_fixed_bottom_input(".footer_button input[type=text]");

                // 默认滚动到最底
                that.rollToBottom.apply(that);

                // 监听表单提交
                that.form_send_submit_Listener.apply(that);

                // 连接socket
                that.socket_connect.apply(that);

                // 监听socket连接成功
                that.socket_connect_success.apply(that);

                // 接收socket推送消息
                that.socket_send_message.apply(that);

                // 监听返回按钮
                that.back_button_Listener.apply(that);
            }
        },

        // 连接socket
        socket_connect: function() {
            var that = this;

            // 客户
            if (Base_meta.kind == "1")
                that.send_message.apply(that, [1, Base_meta.welcome_message]);
            // that.send_message.apply(that, [1, "您好!欢迎来到中企服！很高兴为您服务!<br />我们的专业顾问服务5*8小时在线，期待与您的沟通。"]);


            // that.socket = $io.connect("http://117.79.92.82:4545");
            that.socket = $io.connect(Base_meta.GLOBAL_SOCKET_URL);
        },

        // 接收socket连接成功推送
        socket_connect_success: function() {
            var that = this;
            that.socket.on("connect_success", function() {

                // console.log("here");

                $(".footer_button").css("display", "block");

                // 加入room
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

                // 更新未读消息状态
                that.update_noRead_record.apply(that, [cid, sid]);

                // 处理消息推送
                that.send_message.apply(that, [kind, msg, cid, sid, rdate]);
            });
        },

        // 更新客户端未读消息状态
        update_noRead_record: function(cid, sid) {

            $.ajax({
                url: "/update_noRead_record_client",
                type: "post",
                data: {
                    cid: cid,
                    sid: sid
                }
            });
        },

        // 处理消息推送（包括本页自己发送的消息 和 socketio推送的消息）
        // kind: 1-系统消息 2-我的消息 3-对方消息
        // prepend: true/else。true时消息加在前面，而且不向服务器推送。读历史消息时，可以为true。
        send_message: function(kind, msg, cid, sid, prepend) {
            var that = this;

            prepend = prepend || false;

            var date = new Date();

            // console.log(kind, msg, cid, sid, date.toLocaleString());

            // 将消息发往服务器
            if (kind == 2 && prepend !== true) { // 客户发送的消息
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
            if (kind != 1 && prepend !== true) {

                // 时间差大于1分钟
                if (!that.lastTime || date.getTime() - that.lastTime >= 60 * 1000) {
                    that.send_message.apply(that, [1, $func.dateFormat_wx(date)]);
                }
                // 更新最后消息时间
                that.lastTime = date.getTime();

            }

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
            li.removeClass("template");
            if (prepend === true)
                li.prependTo("ul.list");
            else
                li.appendTo("ul.list");

            // 消息窗口向上／向下滚动
            var stoped_wrapper = $(".stoped_wrapper");
            if (prepend === true) {
                stoped_wrapper.scrollTop(0);
            } else {
                var ul = li.parents(".list");
                var ul_padding_bottom_px = (ul.css("padding-bottom") || "").replace("px", "");
                var ul_height_px = parseFloat(ul.height()) + parseFloat(ul_padding_bottom_px) + parseFloat($(".fixed_space").height());
                var stoped_wrapper_height_px = stoped_wrapper.height();
                // console.log(ul_height_px, stoped_wrapper_height_px);
                if (ul_height_px > stoped_wrapper_height_px) {
                    stoped_wrapper.scrollTop(ul_height_px - stoped_wrapper_height_px);
                }
            }
        },

        // 加入room
        /*
            
            @changeData : {
                kind: // 记录此socket来源 1-客户端 2-客服端,
                cid: // 客户id，0为全部
                sid: // 客服id，多个逗号分隔
            }
        */
        send_join_room: function(changeData) {
            var that = this;
            // console.log(changeData);
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

                $("input").blur();

                var text = input.val();
                if (text === "") {
                    that.show_error_dialog("请键入内容");
                } else {
                    that.send_message.apply(that, [2, text, Base_meta.cid, Base_meta.sid]);
                    input.val("");
                }
            });
        },

        // 监听返回按钮
        back_button_Listener: function() {
            $(".footer_button .back").unbind().on("click", function() {
                location.href = "/?cid=" + Base_meta.cid.toString();
            });
        }
    };

    return chat;
});