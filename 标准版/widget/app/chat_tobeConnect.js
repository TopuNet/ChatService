/*
	待接入列表页配套js
	高京
	2017-05-18

    this= {
        socket,
        loadingToast,
        iosDialog2
    }
*/

var GLOBAL_SOCKET_URL = "http://localhost:4545";

define(["lib/socket.io.min"], function($io) {

    var chat_tobeConnect = {
        init: function() {
            var that = this;

            that.loadingToast = $(".loadingToast");
            that.iosDialog2 = $("#iosDialog2");

            // 操作按钮点击监听
            that.line_button_Lisenter.apply(that);

            // 连接socket
            that.socket_connect.apply(that);
        },

        // 连接socket
        socket_connect: function() {
            var that = this;
            that.socket = $io.connect(GLOBAL_SOCKET_URL);
        },

        // 操作按钮点击监听
        line_button_Lisenter: function() {
            var that = this;

            $("span.buttons").unbind().on("click", function(e) {
                var _obj = $(e.target);
                switch (_obj.attr("class")) {
                    case "connectIn": // 接入
                        that.button_connectIn_click.apply(that, [_obj]);
                        break;
                    case "reIn": // 进入
                        that.button_reIn_click.apply(that, [_obj]);
                        break;
                    case "sendToOther": // 转接
                        that.button_sendToOther_click.apply(that, [_obj]);
                        break;
                }
            });
        },

        // 接入按钮点击执行
        button_connectIn_click: function(button) {
            var cid = button.parents("li.line").attr("cid");
            location.href = "./?kind=2&cid=" + cid + "&sid=" + Base_meta.servicer_id;
        },

        // 重进按钮点击执行
        button_reIn_click: function(button) {
            var cid = button.parents("li.line").attr("cid");
            location.href = "./?kind=2&cid=" + cid + "&sid=" + Base_meta.servicer_id;
        },

        // 转接按钮点击执行
        button_sendToOther_click: function(button) {
            var that = this;
            that.iosDialog2.find(".weui-dialog__bd").text("功能建设中");
            that.iosDialog2.find(".weui-dialog__btn_primary").unbind().on("mousedown touchstart", function(e) {
                e.preventDefault();
                that.iosDialog2.css("display", "none");
            });
            that.iosDialog2.css("display", "block");
        }

    };

    return chat_tobeConnect;
});
