/*
    高京
    2017-07-08
    chat_config
    配置内容，不同项目有不同的绑定值
*/

var config = require("./config"),
    func = require("./functions"),
    chat_config = require("./chat_config");
// async = require("async");

// socket连接地址
exports.GLOBAL_SOCKET_URL = "http://172.27.14.4:4545";

// 客户端默认欢迎语
exports.welcome_message = "已为您接入客服，请问您有什么问题？";

// mongodb连接地址
exports.mongoUrl = "mongodb://localhost:27017/ChatServicer_RegularServicer";

// 客户端title
exports.client_title = "客服系统-移动端";

// 客服pc端title
exports.servicer_pc_title = "客服系统-客服pc端";

exports.ImageDomain = "http://xcmp.topu.net"; //数据库中读取的图片的域名前缀
exports.host = "xcmp.topu.net"; //接口地址
exports.port = 80; //端口号

// 根据cid拉取会员信息-姓名(昵称)、头像、性别
// @query: req.query
exports.getClientInfo = function(cid, query, callback) {

    var api_callback = function(err, result) {
        if (err) {
            callback(err);
        } else {

            callback(null, result[0]);
        }
    };

    var Json_Select = [{
        "type": "Members",
        "act": "Select_Detail",
        "para": {
            "params": {
                "d_Alive": "1",
                "d_Mid": cid.toString(),
                "s_Total_parameter": "Mid,Nickname,Head_img,Mname,Sex"
            }
        }
    }];

    chat_config.getDataFromRestFul(api_callback, Json_Select, query);
};



// 访问接口获得数据方法
/*
    callback:function(err, result)，err===null时为request正常;
    Json_Select: [{
        "cache": 缓存obj，如不需缓存，传null。如需使用上下级连带数据，不要使用缓存。
        "type": "Article",
        "act": "Select_List",
        "para": {
            "params": {
                见wf文档
            },
            "pages": {
                见wf文档
            }
        }
    },
    {}];
    query: req.query;
    validate_k: 1(默认)-签名认证 2-adminUsers的Token认证;
    valid_token_obj:
        validate_k=2时:
        {
            "Auser": "topu.net",
            "token": "0eff33c8631a4b69196a11b6db065b380a5d22c0"
        }
*/
exports.getDataFromRestFul = function(callback, Json_Select, query, validate_k, valid_token_obj) {
    validate_k = validate_k || "1";
    valid_token_obj = valid_token_obj || "";
    query = func.transParameters(query, "");

    // 接口地址
    var RestFul_url = "http://" + chat_config.host + ":" + chat_config.port + "/Handler/Handlers.ashx?" + query;

    // console.dir(RestFul_url);

    // 成功回调
    var finish_deal = function(err, result) {
        callback(err, result);
    };

    var i = 0,
        j = 0,
        len = Json_Select.length,
        cache_obj = null,
        cache_result = [],
        Json_Select_Result = [],
        result = [];

    // 遍历Json_Select，判断缓存，生成签名，组织para
    for (; i < len; i++) {
        cache_obj = Json_Select[i].cache;

        // 清掉cache
        Json_Select[i].cache = "";

        // 如使用缓存且有缓存，则记录缓存数据并跳过
        if (typeof cache_obj === "object" && cache_obj !== null) {
            cache_result[i] = cache_obj;
            continue;
        }
        // 生成签名
        Json_Select[i].para.sign_valid = func.CreateTopuSignatureSync(Json_Select[i].para.params);

        // 拼接最终的查询条件
        Json_Select_Result[j++] = Json_Select[i];
    }

    if (j === 0) { // 无需调用，全部使用缓存
        i = 0;
        len = cache_result.length;
        for (; i < len; i++) {
            result[i] = cache_result[i];
        }
        finish_deal(null, result);
    } else { // 调用接口

        // 调接口参数
        var ajax_para = {
            "validate_k": validate_k,
            "adminUsers": valid_token_obj,
            "params": Json_Select_Result
        };

        var opt = {
            url: RestFul_url,
            method: "post_json",
            PostData: ajax_para
        };

        func.Request(opt, function(data) {

            // console.log("\n\nconfig", 123, "opt:\n", opt);

            var i = 0,
                j = 0,
                len = Json_Select.length;

            for (; i < len; i++) {
                if (cache_result[i] === null || cache_result[i] === "" || cache_result[i] === undefined) {
                    result[i] = data.result[j++];
                } else {
                    result[i] = cache_result[i];
                }
            }

            finish_deal(null, result);

        }, function(err) {
            finish_deal(err);
        });
    }
};