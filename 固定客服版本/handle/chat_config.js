/*
	高京
	2017-07-08
	chat_config
	配置内容，不同项目有不同的绑定值
*/

// socket连接地址
exports.GLOBAL_SOCKET_URL = "http://localhost:4545";
exports.GLOBAL_SOCKET_URL = "http://172.27.14.4:4545";

// 客户端默认欢迎语
exports.welcome_message = "已为您接入客服，请问您有什么问题？";

// mongodb连接地址
exports.mongoUrl = "mongodb://localhost:27017/ChatServicer_RegularServicer";
exports.mongoUrl = "mongodb://172.27.14.4:27017/ChatServicer_RegularServicer";

// 客户端title
exports.client_title = "客服系统-移动端";

// 客服pc端title
exports.servicer_pc_title = "客服系统-客服pc端";
