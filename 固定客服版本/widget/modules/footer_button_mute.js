/*
    底部静音相关

    $obj.init.apply($obj,[opt]);

    opt = {
        button_mute_selector: 静音按钮选择器，默认 ".footer_button .mute"
    }

    that = {
        button_mute: 静音按钮对象
    }

*/

define(function() {
    var footer_button_mute = {

        // 初始化
        init: function(opt) {
            var that = this;

            that.opt = that.deal_opt.apply(that, [opt]);

            that.button_mute = $(that.opt.button_mute_selector);

            if (that.button_mute.length > 0) {
                that.judge.apply(that);
                that.Listener.apply(that);
            }
        },

        // 处理opt并返回
        deal_opt: function(opt) {
            var that = this;

            var opt_default = {
                button_mute_selector: ".footer_button .mute"
            };

            return $.extend(opt_default, opt);
        },

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