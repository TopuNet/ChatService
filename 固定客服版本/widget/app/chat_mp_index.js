/*
	chat管理平台页js
	高京
	2017-05-26
	that = {
		servicer_form_layershow: 添加修改客服的表单弹层对象
	}
*/

define(["lib/LayerShow"], function($LayerShow) {
    var chat_mp_index = {

        init: function() {

            var that = this;

            // 监听添加按钮点击
            that.button_add_click_Listener.apply(that);

            // 监听按钮点击
            that.button_inline_click_Listener.apply(that);

        },
        // 监听添加按钮点击
        button_add_click_Listener: function() {
            var that = this;

            // 监听添加按钮点击
            $(".add_button").unbind().on("click", function() {
                var callback = function(result) {
                    that.showLayer_add_servicer.apply(that, [result]);
                };
                that.get_form.apply(that, [callback]);
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
                info_box_width_per: parseInt(350 / $(window).width() * 100),
                // info_box_height_per: showKind = 2 时有效， 内容盒高度百分比。 默认90
                // info_box_radius: showKind = 2 时有效， 内容盒是否圆角。 默认true
                // info_box_bg: showKind = 2 时有效， 内容盒背景。 默认 "#ffffff"
                info_box_padding_px: 0,
                // info_box_fontSize: showKind = 2 时有效， 内容盒字体大小。 默认 "14px"
                // info_box_fontColor: showKind = 2 时有效， 内容盒字体颜色。 默认 "#333"
                // info_box_lineHeight: showKind = 2 时有效， 内容盒行间距。 默认 "30px"
                info_box_use_JRoll: false,
                // JRoll_obj: JRoll对象。 不使用JRoll做内容盒滚动， 可不传。
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
            that.headimg_click_Lisetener.apply(that);

            // 监听表单提交
            that.form_submit_Listener.apply(that);
        },
        // 监听头像点击
        headimg_click_Lisetener: function() {
            // var that = this;

            $(".headimg_ul li").unbind().click(function() {
                $(this).siblings(".selected").removeClass("selected");
                $(this).addClass("selected");
            });
        },
        // 监听表单提交
        form_submit_Listener: function() {
            var that = this;
            $(".mp_servicer_form form").unbind().on("submit", function() {

                // 表单提交验证
                that.form_submit_check.apply(that, [$(this)]);
                return false;
            });
        },
        // 表单提交验证
        form_submit_check: function(form_obj) {
            var that = this;
            var _id = form_obj.find(".form_line_ul").attr("_id"),
                sname = form_obj.find("input.sname").val(),
                nickname = form_obj.find("input.nickname").val(),
                passwd = form_obj.find("input.passwd").val(),
                headimg_li = form_obj.find(".selected");

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

                that.form_submit_deal.apply(that, [form_obj, {
                    _id: _id,
                    sname: sname,
                    nickname: nickname,
                    passwd: passwd,
                    headimg: headimg_li.find("img").attr("src")
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
