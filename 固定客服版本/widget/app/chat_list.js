/*
    移动端会话列表页 js

    高京
    2017-10-09

    that = {
        sortHtml: 分类的视图,
        layershow: 弹层实例化对象,
        socket: socket连接对象
    }
*/

define([
    "lib/functions",
    "lib/LayerShow",
    "lib/jroll",
    "lib/socket.io.min",
    "modules/footer_button_mute"
], function(
    $func,
    $LayerShow,
    $jroll,
    $io,
    $footer_button_mute
) {
    var chat_list = {
        loadingToast: $(".loadingToast"),
        init: function() {

            var that = this;

            // 进入页面时，如没有会话记录 则直接弹层选分类；否则 连接socket
            that.judge_LayerShow_auto.apply(that);

            // 咨询其他服务按钮的监听
            that.add_button_Listener.apply(that);

            // 静音按钮的监听
            that.mute_button_Listener.apply(that);
        },

        // 进入页面时，如没有会话记录 则直接弹层选分类；否则 连接socket
        judge_LayerShow_auto: function() {
            var that = this;

            if ($(".comm_chat_list_template li:not(.template)").length === 0) {
                that.add_button_Handler.apply(that);
            } else {
                that.socket_connect.apply(that);
            }
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

                // 遍历会话列表，获取sid
                var sid = "";
                var chat_line_obj = $(".comm_chat_list_template li.chat_line:not(.template)");
                chat_line_obj.forEach(function(li) {
                    if (sid !== "")
                        sid += "|";
                    sid += $(li).attr("sid");
                });

                // 加入room
                var changeData = {
                    kind: 1, // 记录此socket来源 1-客户端 2-客服端
                    cid: Base_meta.cid, // 客户id，0为全部
                    sid: sid // 客服id，多个|分隔
                };
                that.send_join_room.apply(that, [changeData]);

                // 接收socket推送消息
                that.socket_send_message.apply(that);
            });
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
            that.socket.emit("join_room", changeData);
        },

        // 接收socket推送消息
        socket_send_message: function() {
            var that = this;

            var audio_newMessage = document.getElementById("newMessage"),
                button_mute = $(".footer_button .mute");

            that.socket.on("send_message", function(kind, msg, cid, sid, rdate_locale, rdate) {

                // 播放声音
                if (button_mute.hasClass("cancel")) {
                    // alert(audio_newMessage.readyState);
                    audio_newMessage.muted = false;
                    audio_newMessage.play();
                }

                var chat_line = $(".chat_line.sid_" + sid);

                chat_line.find(".last_time").text($func.dateFormat_wx(rdate));
                chat_line.find(".last_content").text(msg);
                chat_line.addClass("new");

                // 不在顶部，则移动至顶部
                if (chat_line.parent().find("li").index(chat_line) !== 0)
                    chat_line.prependTo(".comm_chat_list_template");


            });
        },

        // 咨询其他服务按钮的监听
        add_button_Listener: function() {
            var that = this;

            $(".footer_button input.weui-btn_primary").unbind().on("click", function() {
                that.add_button_Handler.apply(that);
            });
        },

        // 静音按钮的监听
        mute_button_Listener: function() {
            
            $footer_button_mute.init.apply($footer_button_mute);
        },

        // 咨询其他服务按钮的点击处理
        add_button_Handler: function() {
            var that = this;

            that.loadingToast.css("display", "block");

            // 获得分类视图 并 弹层显示
            that.getSortHtml.apply(that, [function() {
                that.LayerShow.apply(that);
            }]);
        },

        // 获得分类视图
        getSortHtml: function(callback) {
            var that = this;

            if (that.sortHtml) {
                if (callback) {
                    callback();
                }
            } else {
                $.ajax({
                    url: "/chat/getSort",
                    type: "post",
                    success: function(result) {
                        that.sortHtml = result;
                        if (callback)
                            callback();
                    }
                });
            }
        },

        // 弹层
        LayerShow: function() {
            var that = this;

            if (!that.layershow)
                that.layershow = new $LayerShow();

            var opt = {
                // z_index: 弹层的z-index。图片/图文内容层为z_index+1。默认400
                // bg_color: 背景层16进制颜色。默认#000000
                // bg_opacity: 背景层透明度，0～1。默认0.8
                showKind: 2,
                // Pics: showKind=1时有效。图片路径列表，数组。如 ["/images/001.jpg","/images/002.png"]。无默认值
                // Pics_show_index: 默认显示图片的序号，值大于等于图片数组的length时无效。默认0
                // Pics_scroll_speed: showKind=1时有效。图片切换时的速度。毫秒。默认500。移动端建议设置为100-200，过慢会有卡顿的现象
                // Pics_arrow_left: showKind=1时有效。图片切换 左箭头图片路径。默认/inc/LayerShow_arrow_left.png。
                // Pics_arrow_right: showKind=1时有效。图片切换 右箭头图片路径。默认/inc/LayerShow_arrow_left.png。
                // callback_image_click: showKind=1时有效。图片点击回调：1-关闭弹层 | 2-下一张图片 | function(li_obj)-自定义方法。默认"1"
                info_content: that.sortHtml,
                // info_box_width_per: showKind=2时有效，内容盒宽度百分比。默认80
                // info_box_height_per: showKind=2时有效，内容盒高度百分比。默认90
                // info_box_radius: showKind=2时有效，内容盒是否圆角。默认true
                // info_box_bg: showKind=2时有效，内容盒背景。默认"#ffffff"
                // info_box_padding_px: showKind=2时有效，内容盒padding。默认20
                // info_box_fontSize: showKind=2时有效，内容盒字体大小。默认"14px"
                // info_box_fontColor: showKind=2时有效，内容盒字体颜色。默认"#333"
                // info_box_lineHeight: showKind=2时有效，内容盒行间距。默认"30px"
                // info_box_use_JRoll: showKind = 2 时有效， 内容盒使用JRoll滚动（ 建议移动端使用， web端不用。 IE7、 8 不兼容） 如使用， 则需要依赖或引用jroll.js。 默认true
                JRoll_obj: $jroll,
                // info_bottom_fixed_content: showKind = 2 时有效， 底部固定层内容。 无默认。
                // info_bottom_fixed_height: showKind = 2 && info_bottom_fixed_content != "" 时有效， 高度， 单位px。 默认40
                // Pics_close_show: true / false。 显示关闭按钮。 默认true
                // Pics_close_path: 关闭按钮图片路径。 默认 / inc / LayerShow_close.png。
                // callback_before: 弹层前回调。 如显示loading层。 无默认
                callback_success: function(_jroll) {

                    that.loadingToast.css("display", "none");

                    // 监听分类sort_b，过滤已选分类
                    that.LayerShow_filterSelected.apply(that, [$(_jroll.wrapper).find(".sort_b")]);

                }
                // callback_close(info_wrapper_html): 关闭弹层后的回调。 info_wrapper_html为$("#info_wrapper").html()。 无默认
            };
            that.layershow.show(opt);
        },

        // 弹层 - 过滤已选分类
        // @sort_obj: sort_b对象数组
        LayerShow_filterSelected: function(sort_obj) {

            // 监听
            sort_obj.unbind().on("click", function(e) {

                location.href = "/chat?cid=" + Base_meta.cid + "&bid=-1&sort=" + $(this).attr("scid");

                $(this).addClass("isChecked").unbind();
            });

            // 拼接已选分类
            var sort = "";
            $(".comm_chat_list_template .chat_line").forEach(function(obj) {
                sort += $(obj).attr("sort");
            });

            // 遍历sort_b对象数组，比较是否已选
            sort_obj.forEach(function(s) {
                var _obj = $(s);
                if (sort.indexOf("<" + _obj.attr("scid") + ">") > -1) {
                    _obj.addClass("isChecked").unbind();
                }
            });
        }
    };

    return chat_list;

});