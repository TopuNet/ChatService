/*
    高京
    2017-07-08
    chat_config
    配置内容，不同项目有不同的绑定值
*/

var config = require("./config"),
    func = require("./functions"),
    chat_config = require("./chat_config"),
    chat_restful = require("./chat_restful");

// socket连接地址
exports.GLOBAL_SOCKET_URL = "http://localhost:4545";

// 客户端默认欢迎语
exports.welcome_message = "您好!欢迎来到XXX！很高兴为您服务!<br />我们的专业顾问服务5*8小时在线，期待与您的沟通。";

// mongodb连接地址
exports.mongoUrl = "mongodb://localhost:27017/ChatServicer_RegularServicer";

// 客户端title
exports.client_title = "我的顾问";

// 客服pc端title
exports.servicer_pc_title = "顾问";

exports.ImageDomain = "http://mp.zhongqifu.com.cn"; //数据库中读取的图片的域名前缀 (测试环境)
exports.host = "mp.zhongqifu.com.cn"; //测试环境
exports.port = 80; //端口号

// 根据cid拉取会员信息-姓名(昵称)、头像、性别
// @query: req.query
exports.getClientInfo = function(cid, query, callback) {

    chat_restful.getClientInfo(cid, query, callback);
};

// 拉取服务分类
// @query: req.query
exports.getSort = function(query, callback) {

    chat_restful.getSort(query, callback);
};