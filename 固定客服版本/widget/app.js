define(function() {

    var page_name = document.getElementById("script_page").getAttribute("page");
    switch (page_name) {

        case "chat": // 移动端会话页
            require(["modules/mobile_end_init", "app/chat"], function($mei, $obj) {
                $obj.init();
            });
            break;

        case "chat_tobeConnect": // 移动端会话列表页————不用了
            require(["modules/mobile_end_init", "app/chat_tobeConnect"], function($mei, $obj) {
                $obj.init();
            });
            break;

        case "chat_mp_login": // pc端客服管理平台 - 登录页
            require(["lib/jquery.min", "app/chat_mp_login"], function($jquery, $obj) {
                $obj.init();
            });
            break;

        case "chat_mp_index": // pc端客服管理平台 - 主管理页
            require(["lib/jquery.min", "app/chat_mp_index"], function($jquery, $obj) {
                $obj.init();
            });
            break;
    }
});
