/*
	chat管理平台登录页js
	高京
	2017-05-25
*/

define(function() {
    var chat_mp_login = {
        init: function() {

            var that = this;

            // 监听表单遮挡框的点击————后期要删除
            that.mask_form_valid_click_Listener.apply(that);

            // 监听表单提交
            that.form_submit_Listener.apply(that);
        },
        // 监听表单遮挡框的点击————后期要删除
        mask_form_valid_click_Listener: function() {

            var that = this;

            $("div.form div.mask_preValid").unbind().on("click", function() {
                $(this).hide(0);
                $(this).parents("div.form").find("input.username").focus();
            });
        },
        // 监听表单提交
        form_submit_Listener: function() {
            $("form").unbind().on("submit", function() {
                location.href = "/mp";
                return false;
            });
        }
    };

    return chat_mp_login;
});
