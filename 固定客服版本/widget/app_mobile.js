define(["lib/zepto.min", "modules/mobile_end_init"], function() {

    var page_name = document.getElementById("script_page").getAttribute("page");
    switch (page_name) {

        case "chat_list": // 移动端会话列表页
            require(["app/chat_list"], function($obj) {
                $obj.init();
            });
            break;

        case "chat": // 移动端会话页
            require(["app/chat"], function($obj) {
                $obj.init();
            });
            break;

        case "chat_tobeConnect": // 移动端会话列表页————不用了
            require(["app/chat_tobeConnect"], function($obj) {
                $obj.init();
            });
            break;
    }
});