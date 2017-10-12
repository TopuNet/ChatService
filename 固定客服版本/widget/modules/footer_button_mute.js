/*
    底部静音相关

    调用：$obj.action.apply($obj);
*/

define(function() {
    var footer_button_mute = {

        button_mute: $(".footer_button .mute"),

        // 判断localStorage中存储的静音状态，并修改底部按钮样式
        judge: function() {
            var that = this;

            localStorage.chat_service_gj_mute = localStorage.chat_service_gj_mute || "yes";

            if (localStorage.chat_service_gj_mute == "no") {
                that.button_mute.addClass("cancel");
            } else {
                that.button_mute.removeClass("cancel");
            }
        },

        // 事件监听
        Listener: function() {
            var that = this;

            that.button_mute.unbind().on("touchstart mousedown", function(e) {
                e.preventDefault();

                $(this).toggleClass("cancel");

                if (localStorage.chat_service_gj_mute == "yes")
                    localStorage.chat_service_gj_mute = "no";
                else
                    localStorage.chat_service_gj_mute = "yes";
            });
        }
    };

    return footer_button_mute;
});