/*
    chat管理平台登录页js
    高京
    2017-05-25
*/

define(["lib/pic_code"], function($pic_code) {
    var chat_mp_login = {
        init: function() {

            var that = this;

            // 用户名获得焦点
            that.form_reset.apply(that);

            // 监听表单提交
            that.form_submit_Listener.apply(that);

            // 初始化 pic_code
            var opt = {
                pic_position: ".pic_code", //图片验证码外包层class或id，默认.pic_code
                div_width: 600, //设置显示的大图的宽，默认300
                valid_range: 5, // 图片验证正确的容错范围，默认是5,单位是px，不受unit影响
                // unit: "px", // 宽高及容错范围单位 "px|vw", 默认px，且IE6/7/8强制使用px
                // pic_mask: true, //验证码大遮罩层，false-不显示遮罩层，true-显示遮罩层，默认true
                // Pic_mask_color: "#000", //验证码大遮罩层颜色，默认黑色
                // Pic_mask_opacity: 0.8, ////验证码大遮罩层透明度，默认0.8
                // Pic_click_key: true, //开关，点击遮罩层验证码是否隐藏，true-隐藏，false-不隐藏，默认true
                // Is_Cross_domain: false, //是否跨域 true-跨域（后端需配置跨域允许当前来源），false-不跨域，默认false
                Url_getPic: '/Pic_code/create', //获取图片地址的接口，跨域请填写带域名的地址，默认'/Pic_code/Pic_code.ashx'
                url_submit: '/Pic_code/valid' //验证码，验证完成提交的地址，跨域请填写带域名的地址，默认'/Pic_code/Pic_code_valid.ashx'
                // z_index: 800, //设置标签z_index，默认800
                // position_default: true, //验证码是否居中显示，true-居中显示，false-自定义显示位置，默认true
                // Callback_error: function() { // 验证失败回调，默认为滑块和拼图小块滑回原位pic_code.doMove();
                //     pic_code.doMove();
                // },
                // Callback_error_repeatedly: function() { // 多次验证失败回调，刷新验证码重新验证，优先于Callback_error  默认事件pic_code.change_background_url();
                //     pic_code.change_background_url();
                // },
                // Callback_error_repeatedly_count: 3, // 触发多次验证失败回调的失败次数，默认3
                // Callback_success: function() { //验证成功回调，提示验证成功，默认方法：pic_code.valid_success_callback()  
                //     pic_code.valid_success_callback();
                // }
            }

            $pic_code.init(opt);
        },
        // 清空用户名密码，并让用户名获得焦点
        form_reset: function() {
            $(".username").val("").focus();
            $(".passwd").val("");
        },
        // 监听表单提交
        form_submit_Listener: function() {
            var that = this;
            $("form").unbind().on("submit", function() {

                that.form_submit_check.apply(that);
                return false;
            });
        },
        // 验证表单
        form_submit_check: function() {
            var that = this;

            var form = $("form");
            var form_data = {
                username: form.find("input.username").val(),
                passwd: form.find("input.passwd").val()
            };

            var iosDialog2 = $("#iosDialog2");

            if (form_data.username === "" || form_data.passwd === "") {
                iosDialog2.find(".weui-dialog__bd").text("用户名或密码错误");
                iosDialog2.find(".weui-dialog__btn_primary").unbind().on("click", function() {
                    iosDialog2.css("display", "none");
                });
                iosDialog2.css("display", "block");
            } else {
                that.show_PicCode.apply(that, [function() {
                    that.form_submit_deal.apply(that, [form_data]);
                }]);
            }

        },
        // 显示图片验证码
        // @callback: 成功回调
        show_PicCode: function(callback) {
            
            $pic_code.open({
                Callback_success: function() {
                    pic_code.valid_success_callback();
                    pic_code.pic_code_hide();
                    pic_code.change_background_url();
                    if (callback)
                        callback();
                }
            });
        },


        // 表单提交
        form_submit_deal: function(form_data) {

            var that = this;

            var loadingToast = $(".loadingToast");
            var iosDialog2 = $("#iosDialog2");

            $.ajax({
                url: "/" + Base_meta.from + "/login/deal",
                type: "post",
                data: form_data,
                beforeSend: function() {
                    loadingToast.find(".weui-toast__content").text("处理中");
                    loadingToast.css("display", "block");
                },
                success: function(result) {
                    // loadingToast.css("display", "none");
                    // console.log(result);
                    if (result == "success") {
                        location.href = "/" + Base_meta.from;
                    } else {
                        iosDialog2.find(".weui-dialog__bd").text("用户名或密码错误");
                        iosDialog2.find(".weui-dialog__btn_primary").unbind().on("click", function() {
                            iosDialog2.css("display", "none");
                            that.form_reset.apply(that);
                        });
                        iosDialog2.css("display", "block");
                        loadingToast.css("display", "none");
                    }
                }
            });

        }
    };

    return chat_mp_login;
});