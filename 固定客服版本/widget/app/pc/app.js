define(["lib/jquery.min"], function() {

    var page_name = document.getElementById("script_page").getAttribute("page");
    switch (page_name) {

        case "chat_mp_login": // pc端客服管理平台 - 登录页
            require(["app/chat_mp_login"], function($obj) {
                $obj.init();
            });
            break;

        case "chat_mp_index": // pc端客服管理平台 - 主管理页
            require(["app/chat_mp_index"], function($obj) {
                $obj.init();
            });
            break;

        case "chat_servicer": // pc端客服会话页
            require(["app/chat_servicer"], function($obj) {
                $obj.init();
            });
            break;
    }
});