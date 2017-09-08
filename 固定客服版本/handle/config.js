/*
 *@ 高京
 *@ 20150824
 *@ 全局配置文件，添加属性的话，请先确认没有功能类同的属性存在
 */
var multer = require("multer");
var func = require("./functions.js");
var uuid = require('node-uuid');
var config = require('./config.js');

exports.cookie_pre = "chatgj_"; // cookie名前缀

// exports.socket_global_1 = []; // 存放客户端socket
// exports.socket_global_2 = []; // 存放客服端socket

exports.session_secret = "1z4d7r2t5h8m3k6o8a4z5e1g7f5u3a0y"; //session密钥

// exports.cookieName_Member = "TouRongQuan2015_Member"; //登录用的cookie名称
// exports.cookies_key = [2, 5, 6, 8, 9, 10, 11, 15, 16, 17, 18, 19, 20, 22, 25, 29]; //从cookies中取出密码的16位秘钥数组(内部值不能大于32,且从小到大排序)
// exports.cookies_str = "6a8g6k7w2b9h1n8v6a8g6k7w2b9h1n8v"; //定义在cookies中为密码加密的32位随机变量


//Advertise,Init,Info缓存
exports.CacheData = {
    Advertise: null,
    Init: null,
    Info: null
};

/*
 *@ 陈斌
 *@ 20160301
 *@ 【同步】获得页面公用参数
 *@ 返回：
    {
        seo: {
            ieTitle: '',
            seoKeywords: '',
            seoDescription: ''
        }
    }
 *@ ieTitle_ex：不为空时，seo.ieTitle返回ieTitle_ex - config.CacheData.Init[0].Iinfo + " - " + config.CacheData.Init[2].Iinfo;否则返回config.CacheData.Init[0].Iinfo + " - " + config.CacheData.Init[2].Iinfo;
 *@ seoKeywords：不为空时，返回seoKeywords；否则返回config.CacheData.Init[3].Iinfo;
 *@ seoDescription：不为空时，返回seoDescription；否则返回config.CacheData.Init[4].Iinfo;
 */
exports.GetCommon = function(ieTitle_ex, seoKeywords_ex, seoDescription_ex, num) {
    var ieTitle = config.CacheData.Init.list[0].Iinfo + " - " + config.CacheData.Init.list[2].Iinfo;
    var seoKeywords = config.CacheData.Init.list[3].Iinfo;
    var seoDescription = config.CacheData.Init.list[4].Iinfo;
    var menu = num;

    //版权信息
    var copyright = config.CacheData.Info.list[0].Iinfo;

    if (ieTitle_ex !== undefined && ieTitle_ex !== "")
        ieTitle = ieTitle_ex + " - " + ieTitle;
    if (seoKeywords_ex !== undefined && seoKeywords_ex !== "")
        seoKeywords = seoKeywords_ex;
    if (seoDescription_ex !== undefined && seoDescription_ex !== "")
        seoDescription = seoDescription_ex;

    return {
        seo: {
            ieTitle: ieTitle,
            seoKeywords: seoKeywords,
            seoDescription: seoDescription
        },
        footer: {
            copyright: copyright
        },
        menu: {
            menu: menu
        }
    };
};


/*
 *@ 高京
 *@ 20150911
 *@【同步】设定multer上传目录及规则
 */
exports.multer_diskStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "UploadFile/temp/");
    },
    filename: function(req, file, cb) {
        var ext = func.GetExtension(file.originalname);
        // var d = new Date().toLocaleDateString().replace(/-/g, "");
        // var r = func.CreateRandomStr(10, 1);
        // cb(null, d + "_" + r + "." + ext);
        var filename = uuid.v4();
        cb(null, filename + "." + ext);
    }
});
/*
 *@高京
 *@20150911
 *@【同步】设定multer文件过滤
 */
exports.multer_fileFilter = function(req, file, cb) {
    var ext = func.GetExtension(file.originalname).toLowerCase();
    if (ext == "jpg" || ext == "jpeg" || ext == "gif" || ext == "png" || ext == "bmp") {
        cb(null, true);
    } else {
        cb(null, false);
    }

};


/*
 *@ 陈斌
 *@ 20150722
 *@ 【异步】更新Advertise,Init,Info
 */
exports.updateCacheData = function(callback_success) {

    var Json_Select = [{
        "cache": config.CacheData.Advertise,
        "type": "Advertise",
        "act": "Select_List",
        "para": {
            "params": {
                "s_Aid": "",
                "s_Total_parameter": "Aid,Atitle,Url,Pic1"
            }
        }
    }, {
        "cache": config.CacheData.Init,
        "type": "Init",
        "act": "Select_List",
        "para": {
            "params": {
                "s_not_Iid": ""
            }
        }
    }, {
        "cache": config.CacheData.Info,
        "type": "Info",
        "act": "Select_List",
        "para": {
            "params": {
                "s_Iid": ""
            }
        }
    }];
    config.getDataFromRestFul(function(err, data) {
        config.CacheData.Advertise = data[0];
        config.CacheData.Init = data[1];
        config.CacheData.Info = data[2];
        callback_success();
    }, Json_Select);

};
