/*
    chat管理平台登录页js
    高京
    2017-05-25
*/

define(function() {
    var chat_mp_login = {
        init: function() {

            var that = this;

            // 监听表单提交
            that.form_submit_Listener.apply(that);
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
                that.form_submit_deal.apply(that, [form_data]);
            }

        },
        // 表单提交
        form_submit_deal: function(form_data) {

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
                    console.log(result);
                    if (result == "success") {
                        location.href = "/" + Base_meta.from;
                    } else {
                        iosDialog2.find(".weui-dialog__bd").text("用户名或密码错误");
                        iosDialog2.find(".weui-dialog__btn_primary").unbind().on("click", function() {
                            iosDialog2.css("display", "none");
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
