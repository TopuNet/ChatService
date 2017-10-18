/*
    chat管理平台页js
    高京
    2017-05-26
    that = {
        RECORD_COUNT: 消息每次加载数量,
        servicer_form_layershow: 添加修改客服的表单弹层对象,
        getRecords_opt = { // 获取消息记录的保留参数，获取更多历史消息时使用此值
            cid: cid,
            sid: sid
        }
    }
*/

define(["lib/LayerShow"], function($LayerShow) {
    var chat_mp_index = {

        RECORD_COUNT: 10,

        loadingToast: $(".loadingToast"),

        init: function() {

            var that = this;

            // 监听顶部按钮点击
            that.button_top_click_Listener.apply(that);

            // 监听行内按钮点击
            that.button_inline_click_Listener.apply(that);

        },
        // 监听顶部按钮点击
        button_top_click_Listener: function() {
            var that = this;

            $(".buttons li").unbind().on("click", function() {

                var button_this = $(this);

                if (button_this.hasClass("add_servicer")) {

                    /* 添加新客服 */
                    var callback = function(result) {
                        that.showLayer_add_servicer.apply(that, [result]);
                    };
                    that.get_form.apply(that, [callback]);

                } else if (button_this.hasClass("quit")) {

                    /* 退出 */
                    $.ajax({
                        url: "/mp/quit",
                        type: "post",
                        beforeSend: function() {
                            that.loadingToast.css("display", "block");
                        },
                        success: function() {
                            location.href = "/mp/login";
                        }
                    });

                } else if (button_this.hasClass("show_record")) {

                    // 清空原先记录
                    $(".wrapper_right li:not(.template,.more_record)").remove();

                    /* 消息记录 */
                    var cid = "";
                    var sid = "";
                    var start_count = 0;
                    var scroll_direction = "bottom";
                    that.getRecords_ajax.apply(that, [cid, sid, start_count, scroll_direction]);
                }

            });
        },

        // ajax获取消息记录
        // @scroll_direction: "top" || "bottom"(默认)
        getRecords_ajax: function(cid, sid, start_count, scroll_direction) {
            var that = this;

            var p_loading = $(".wrapper_right p.loading"); // 加载中提示盒

            that.getRecords_opt = {
                cid: cid,
                sid: sid
            };

            // 获取消息记录
            $.ajax({
                url: "/mp/getRecords",
                type: "post",
                data: {
                    cid: cid,
                    sid: sid,
                    start_count: start_count
                },
                beforeSend: function() {
                    p_loading.css("display", "block");
                },
                success: function(result) {

                    // console.dir(result);

                    var c = 0;

                    if (result.forEach) {

                        result.forEach(function(r) {

                            if (r.sender.toLowerCase() != "o")
                                c++;

                            that.send_message.apply(that, [r, scroll_direction]);

                        });
                    }

                    // 隐藏“加载中”
                    p_loading.css("display", "none");

                    // 判断是否需要显示“查看更多历史消息”
                    var more_record = $("ul.talk_list .more_record");
                    if (c < that.RECORD_COUNT)
                        more_record.removeClass("show");
                    else {
                        if (!more_record.hasClass("show"))
                            more_record.addClass("show").css("cursor", "pointer");
                        more_record.prependTo("ul.talk_list");
                        that.show_more_records_Listener.apply(that);
                    }
                }
            });
        },

        // 处理消息推送（包括本页自己发送的消息 和 socketio推送的消息）
        // @r: 消息记录对象
        // @scroll_direction: 加载完成后滚动方向 "top" | "bottom"(默认)
        send_message: function(r, scroll_direction) {

            scroll_direction = scroll_direction || "bottom";

            // console.log("");
            // console.log(kind, msg, cid, sid, date, prepend);
            // console.log(date.toString().replace(/-/ig, "/"));

            var li;
            switch (r.sender.toLowerCase()) {
                case "o":
                    li = $("li.template.center").clone();
                    break;
                case "s":
                    li = $("li.template.right").clone();
                    break;
                case "c":
                    li = $("li.template.left").clone();
                    break;
            }

            // 装载内容
            li.find("p").html("<span class=\"arrow\"></span>" + r.content);

            // 装载昵称和头像
            switch (r.sender.toLowerCase()) {
                case "o":
                    break;
                case "s":
                    li.find("p").before(
                        $(document.createElement("span")).text(r.servicer.nickname + " TO: " + r.client.nickname).addClass("name")
                    );
                    li.find("img").attr("src", r.servicer.headimg);
                    break;
                case "c":
                    li.find(".name").text(r.client.nickname);
                    li.find("img").attr("src", r.client.headimg);
                    break;
            }

            // 装载li
            li.removeClass("template").prependTo("ul.talk_list");

            // 消息窗口向上滚动
            var ul = li.parents(".talk_list");
            if (scroll_direction == "top")
                ul.scrollTop(0);
            else {
                var ul_height_px = ul.height();
                var ul_scrollHeight = ul[0].scrollHeight - ul.css("padding-bottom").replace("px", "");
                if (ul_scrollHeight > ul_height_px) {
                    ul.scrollTop(ul_scrollHeight - ul_height_px);
                }
            }
        },

        // 获取更多历史消息的点击监听
        show_more_records_Listener: function() {
            var that = this;

            $(".more_record.show").unbind().on("touchstart mousedown", function(e) {
                e.preventDefault();

                var start_count = $(".wrapper_right .talk_list li.message:not(.template)").length;
                that.getRecords_ajax.apply(that, [that.getRecords_opt.cid, that.getRecords_opt.sid, start_count, "top"]);

            });
        },

        // 获取添加/修改表单数据
        // callback(result): 成功回调
        // _id: 记录id，修改用
        get_form: function(callback, _id) {

            // var that = this;
            _id = _id || "";
            var loadingToast = $(".loadingToast");

            // ajax获得添加客服的表单代码
            $.ajax({
                url: "/mp/servicer/get_form",
                type: "post",
                data: {
                    _id: _id
                },
                beforeSend: function() {
                    loadingToast.find(".weui-toast__content").text("加载中");
                    loadingToast.css("display", "block");
                },
                success: function(result) {
                    loadingToast.css("display", "none");
                    if (callback)
                        callback(result);
                }
            });
        },

        // 监听行内按钮点击
        button_inline_click_Listener: function() {
            var that = this;

            $(".button_inline .weui-btn").unbind().on("click", function() {
                var li_obj = $(this).parents(".button_inline");
                var index = li_obj.parent().find(".button_inline").index(li_obj) + 1;
                switch (index) {
                    case 1:
                        that.button_inline_click_1.apply(that, [li_obj]);
                        break;
                    case 2:
                        that.button_inline_click_2.apply(that, [li_obj.parents(".line_li").attr("_id")]);
                        break;
                    case 3:
                        that.button_inline_click_3.apply(that, [li_obj.parents(".line_li")]);
                        break;
                    case 4:
                        that.button_inline_click_4.apply(that, [li_obj.parents(".line_li").attr("_id")]);
                        break;
                    default:
                        break;
                }
            });
        },
        // 行内按钮点击-1-接收新会话
        button_inline_click_1: function(button_obj) {
            // var that = this;

            var bubble_obj = button_obj.find(".bubble");
            var hasNo = bubble_obj.hasClass("no");

            $.ajax({
                url: "/mp/servicer/alive",
                type: "post",
                data: {
                    id: bubble_obj.parents("li.line_li").attr("_id")
                },
                beforeSend: function() {
                    bubble_obj.addClass("rotate");
                },
                success: function(result) {
                    var reg = /^success/i;
                    if (result.match(reg)) {
                        bubble_obj.removeClass("rotate");
                        if (hasNo)
                            bubble_obj.removeClass("no");
                        else
                            bubble_obj.addClass("no");
                    } else {
                        var iosDialog2 = $("#iosDialog2");
                        iosDialog2.find(".weui-dialog__bd").text(result);
                        iosDialog2.find(".weui-dialog__btn_primary").unbind().on("click", function() {
                            iosDialog2.css("display", "none");
                        });
                        iosDialog2.css("display", "block");
                    }
                }
            });
        },
        // 行内按钮点击-2-修改
        button_inline_click_2: function(_id) {
            var that = this;

            var callback = function(result) {
                that.showLayer_add_servicer.apply(that, [result]);
            };

            that.get_form.apply(that, [callback, _id]);
        },
        // 行内按钮点击-3-删除
        button_inline_click_3: function(line_obj) {
            // var that = this;
            var loadingToast = $(".loadingToast"),
                iosDialog1 = $("#iosDialog1"),
                iosDialog2 = $("#iosDialog2");

            var _id = line_obj.attr("_id");

            // 执行ajax
            var _deal_ajax = function(_id) {
                $.ajax({
                    url: "/mp/servicer/del",
                    type: "post",
                    data: {
                        _id: _id
                    },
                    beforeSend: function() {
                        loadingToast.find(".weui-toast__content").text("处理中");
                        loadingToast.css("display", "block");
                    },
                    success: function(result) {
                        if (result == "success") { // 删除成功
                            line_obj.animate({
                                height: 0
                            }, 200, function() {
                                line_obj.remove();
                                loadingToast.css("display", "none");
                            });
                        } else { // 失败
                            iosDialog2.find(".weui-dialog__bd").text(result);
                            iosDialog2.find(".weui-dialog__btn_primary").unbind().on("click", function() {
                                iosDialog2.css("display", "none");
                            });
                            iosDialog2.css("display", "block");
                        }
                    }
                });
            };

            // 发起删除询问
            iosDialog1.find(".weui-dialog__title").text("删除确认");
            iosDialog1.find(".weui-dialog__bd").text("此操作不可逆，是否继续？");
            iosDialog1.find(".weui-dialog__btn_default").text("取消").unbind().on("click", function() {
                iosDialog1.css("display", "none");
            });
            iosDialog1.find(".weui-dialog__btn_primary").text("继续").attr("_id", _id).unbind().on("click", function() {
                iosDialog1.css("display", "none");
                _deal_ajax($(this).attr("_id"));
            });
            iosDialog1.css("display", "block");
        },
        // 行内按钮点击-4-查看消息
        button_inline_click_4: function(_id) {

            var that = this;

            // 清空原先记录
            $(".wrapper_right li:not(.template,.more_record)").remove();
            
            that.getRecords_ajax.apply(that, ["", _id, 0, "bottom"]);
        },
        // 弹层-添加/修改客服
        showLayer_add_servicer: function(form_html) {
            var that = this;

            // 创建新LayerShow实例。注意：不要反复的创建实例，每个实例会在show()之后创建一组dom
            that.servicer_form_layershow = new $LayerShow();

            // 显示
            var opt = {
                // z_index: 弹层的z - index。 图片 / 图文内容层为z_index + 1。 默认400
                // bg_color: 背景层16进制颜色。 默认 #000000
                // bg_opacity: 背景层透明度，0～1。默认0.8
                showKind: 2,
                // Pics: showKind = 1 时有效。 图片路径列表， 数组。 如["/images/001.jpg", "/images/002.png"]。 无默认值
                // Pics_show_index: 默认显示图片的序号， 值大于等于图片数组的length时无效。 默认0
                // Pics_scroll_speed: showKind = 1 时有效。 图片切换时的速度。 毫秒。 默认500。 移动端建议设置为100 - 200， 过慢会有卡顿的现象
                // Pics_arrow_left: showKind = 1 时有效。 图片切换 左箭头图片路径。 默认 / inc / LayerShow_arrow_left.png。
                // Pics_arrow_right: showKind = 1 时有效。 图片切换 右箭头图片路径。 默认 / inc / LayerShow_arrow_left.png。
                // callback_image_click: showKind = 1 时有效。 图片点击回调： 1 - 关闭弹层 | 2 - 下一张图片 | function(li_obj) - 自定义方法。 默认 "1"
                info_content: form_html,
                info_box_width_per: 80,
                // info_box_height_per: showKind = 2 时有效， 内容盒高度百分比。 默认90
                // info_box_radius: showKind = 2 时有效， 内容盒是否圆角。 默认true
                // info_box_bg: showKind = 2 时有效， 内容盒背景。 默认 "#ffffff"
                info_box_padding_px: 0,
                // info_box_fontSize: showKind = 2 时有效， 内容盒字体大小。 默认 "14px"
                // info_box_fontColor: showKind = 2 时有效， 内容盒字体颜色。 默认 "#333"
                // info_box_lineHeight: showKind = 2 时有效， 内容盒行间距。 默认 "30px"
                info_box_use_JRoll: false,
                // JRoll_obj: JRoll对象。 不使用JRoll做内容盒滚动， 可不传。
                info_bottom_fixed_content: "<input type=\"submit\" class=\"form_submit_button weui-btn weui-btn_plain-default\" style=\"height:50px;\" value=\"提 交\">",
                info_bottom_fixed_height: 50,
                // Pics_close_show: true / false。 显示关闭按钮。 默认true
                // Pics_close_path: 关闭按钮图片路径。 默认 / inc / LayerShow_close.png。
                // callback_before: 弹层前回调。 如显示loading层。 无默认
                // callback_close: 关闭弹层后的回调。 没想好如什么。 无默认
                callback_success: function() {
                    $("input.sname").focus();

                    // 监听表单
                    that.showLayer_add_servicer_form_Listener.apply(that);
                }

            };
            that.servicer_form_layershow.show(opt);
        },
        // 监听添加/修改客服表单
        showLayer_add_servicer_form_Listener: function() {
            var that = this;

            // 监听头像点击
            that.headimg_click_Listener.apply(that);

            // 监听全部分类的点击
            that.sort_checkall_Listener.apply(that);

            // 监听分类点击
            that.sort_li_click_Listener.apply(that);

            // 监听表单提交
            that.form_submit_Listener.apply(that);
        },
        // 监听头像点击
        headimg_click_Listener: function() {
            // var that = this;

            $(".headimg_ul li").unbind().click(function() {
                $(this).siblings(".selected").removeClass("selected");
                $(this).addClass("selected");
            });
        },
        // 监听全部分类的点击
        sort_checkall_Listener: function() {
            var that = this;

            var checkall = $(".mp_servicer_form ul.form_line_ul li.sort_li .checkall");
            var sort_ul = $(".mp_servicer_form ul.form_line_ul .sort_ul");

            // 获取ul高度并存于that
            that.sort_ul_height_px = sort_ul.height();

            // 给ul定高
            sort_ul.css("height", that.sort_ul_height_px + "px");

            // 监听点击
            checkall.unbind().on("click", function() {
                var checked = checkall[0].checked;
                if (checked) {
                    // sort_ul.css({
                    //     height: 0
                    // });
                    sort_ul.find(".sort_b:not(.checked)").addClass("checked");
                } else {
                    // sort_ul.css({
                    //     height: that.sort_ul_height_px + "px"
                    // });
                    sort_ul.find(".sort_b").removeClass("checked");
                }
            });
        },
        // 监听分类的点击
        sort_li_click_Listener: function() {

            var li = $(".mp_servicer_form ul.form_line_ul li.sort_li li.sort_b");

            li.unbind().on("click", function() {
                var _this = $(this);

                _this.toggleClass("checked");
            });
        },
        // 监听表单提交
        form_submit_Listener: function() {
            var that = this;

            // 监听表单提交
            $(".mp_servicer_form form").unbind().on("submit", function() {

                // 表单提交验证
                that.form_submit_check.apply(that, [$(this)]);
                return false;
            });

            // 监听按钮点击，发起表单提交
            $(".form_submit_button").unbind().on("click", function() {
                $(".mp_servicer_form form").submit();
            });
        },
        // 表单提交验证
        form_submit_check: function(form_obj) {
            var that = this;
            var _id = form_obj.find(".form_line_ul").attr("_id"),
                sname = form_obj.find("input.sname").val(),
                nickname = form_obj.find("input.nickname").val(),
                passwd = form_obj.find("input.passwd").val(),
                headimg_li = form_obj.find(".headimg_ul .selected"),
                sort_li = form_obj.find(".sort_ul .sort_b.checked");

            // 验证报错，空字符串为正确
            var error_str = "";

            if (sname === "") {
                error_str = "请键入账号";
            } else if (nickname === "") {
                error_str = "请键入昵称";
            } else if (passwd === "" && _id === "") {
                error_str = "请键入密码";
            } else if (headimg_li.length === 0) {
                error_str = "请选择头像";
            }

            // 有错show错，没错提交
            if (error_str !== "") {
                var iosDialog2 = $("#iosDialog2");
                iosDialog2.find(".weui-dialog__bd").text(error_str);
                iosDialog2.find(".weui-dialog__btn_primary").text("好的").unbind().on("click", function() {
                    iosDialog2.css("display", "none");
                });
                iosDialog2.css("display", "block");

            } else {

                // 拼接sort
                var sort = "";
                $.each(sort_li, function(index, s) {
                    sort += "<" + $(s).attr("Scid") + ">";
                });

                // 表单提交处理
                that.form_submit_deal.apply(that, [form_obj, {
                    _id: _id,
                    sname: sname,
                    nickname: nickname,
                    passwd: passwd,
                    headimg: headimg_li.find("img").attr("src"),
                    sort: sort
                }]);
            }
        },
        // 表单提交处理
        form_submit_deal: function(form_obj, form_data) {
            var that = this,
                loadingToast = $(".loadingToast"),
                toast = $("#toast");

            $.ajax({
                url: "/mp/servicer/form_deal",
                type: "post",
                data: form_data,
                beforeSend: function() {
                    loadingToast.css("display", "block");
                },
                success: function(result) {
                    var reg = /^success:(\d):(.+)$/i;
                    var reg_result = reg.exec(result);

                    if (!reg_result) { // 失败

                        var iosDialog2 = $("#iosDialog2");
                        iosDialog2.find(".weui-dialog__bd").text(result);
                        iosDialog2.find(".weui-dialog__btn_primary").unbind().on("click", function() {
                            iosDialog2.css("display", "none");
                        });
                        iosDialog2.css("display", "block");

                        loadingToast.css("display", "none");

                    } else { // 成功

                        // ul外盒
                        var list_ul = $(".servicer_list_ul");
                        var li;

                        switch (reg_result[1]) {
                            case "1": // 添加

                                // 追加新行
                                li = list_ul.find(".template").clone().removeClass("template");
                                li.attr("_id", reg_result[2]);
                                li.find(".line_item_ul img").attr("src", form_data.headimg);
                                li.find(".line_item_ul p").text(form_data.nickname);
                                li.appendTo(list_ul);

                                // 对新行内按钮进行监听
                                that.button_inline_click_Listener.apply(that);

                                break;

                            case "2": // 修改

                                // 修改行内信息
                                li = list_ul.find("li.line_li[_id=" + reg_result[2] + "]");
                                if (li) {
                                    li.find(".line_item_ul img").attr("src", form_data.headimg);
                                    li.find(".line_item_ul p").text(form_data.nickname);
                                }

                                // 关闭表单盒
                                that.servicer_form_layershow.close();

                                break;
                            default:
                                break;
                        }

                        // 表单还原
                        form_obj.find("input:not(.form_submit_button)").val("");
                        form_obj.find(".headimg_ul li.selected").removeClass("selected");

                        // 隐藏loading
                        loadingToast.css("display", "none");

                        // 完成提示
                        toast.find(".weui-toast__content").text("操作成功");
                        var toast_hide = function() {
                            toast.css("display", "none");
                            form_obj.find("input.sname").focus();
                        };
                        toast.unbind().on("click", toast_hide);
                        toast.css("display", "block");
                        setTimeout(toast_hide, 1000);

                    }
                }
            });
        }
    };

    return chat_mp_index;
});