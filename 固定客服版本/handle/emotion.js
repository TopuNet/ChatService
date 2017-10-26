/*
    表情相关
*/

var emotion_handler = require("./emotion.js"),
    fs = require("fs");

// 文件夹
exports.emotion_dir = "./inc/emotion/";

// 文件名前缀
exports.emotion_fp_pre = "Expression_";

// 文件后缀名（无优先级，建议不要出现同一文件名的多个后缀文件）
exports.emotion_fp_ext = ["png", "jpg", "gif"]

// 表情名称列表
exports.emotion_name_list = [
    "",
    "[微笑]", // 1
    "[撇嘴]", // 2
    "[色]", // 3
    "[发呆]", // 4
    "[得意]", // 5
    "[流泪]", // 6
    "[害羞]", // 7
    "[闭嘴]", // 8
    "[睡]", // 9
    "[大哭]", // 10
    "[尴尬]", // 11
    "[发怒]", // 12
    "[调皮]", // 13
    "[呲牙]", // 14
    "[惊讶]", // 15
    "[难过]", // 16
    "[厉害]", // 17
    "[囧]", // 18
    "[抓狂]", // 19
    "[吐]", // 20
    "[偷笑]", // 21
    "[愉快]", // 22
    "[白眼]", // 23
    "[傲慢]", // 24
    "[饥饿]", // 25
    "[困]", // 26
    "[惊恐]", // 27
    "[流汗]", // 28
    "[憨笑]", // 29
    "[悠闲]", // 30
    "[奋斗]", // 31
    "[咒骂]", // 32
    "[疑问]", // 33
    "[嘘]", // 34
    "[晕]", // 35
    "[可怜]", // 36
    "[衰]", // 37
    "[骷髅]", // 38
    "[敲打]", // 39
    "[再见]", // 40
    "[擦汗]", // 41
    "[抠鼻]", // 42
    "[鼓掌]", // 43
    "[呃]", // 44
    "[坏笑]", // 45
    "[左哼哼]", // 46
    "[右哼哼]", // 47
    "[哈欠]", // 48
    "[鄙视]", // 49
    "[委屈]", // 50
    "[快哭了]", // 51
    "[阴险]", // 52
    "[亲亲]", // 53
    "[吓]", // 54
    "[奸笑]", // 55
    "[嘿哈]", // 56
    "[捂脸]", // 57
    "[机智]", // 58
    "[耶]", // 59
    "[皱眉]", // 60
    "[咖啡]", // 61
    "[啤酒]", // 62
    "[拥抱]", // 63
    "[玫瑰]", // 64
    "[凋谢]", // 65
    "[嘴唇]", // 66
    "[爱心]", // 67
    "[心碎]", // 68
    "[太阳]", // 69
    "[月亮]", // 70
    "[礼物]", // 71
    "[蛋糕]", // 72
    "[米饭]", // 73
    "[蜡烛]", // 74
    "[西瓜]", // 75
    "[强]", // 76
    "[弱]", // 77
    "[握手]", // 78
    "[胜利]", // 79
    "[抱拳]", // 80
    "[勾引]", // 81
    "[拳头]", // 82
    "[小指]", // 83
    "[rock]", // 84
    "[食指]", // 85
    "[ok]", // 86
    "[恩爱]", // 87
    "[亲]", // 88
    "[跳跳]", // 89
    "[发抖]", // 90
    "[怄火]", // 91
    "[转圈]", // 92
    "[立正]", // 93
    "[背身]", // 94
    "[摊手]", // 95
    "[投降]", // 96
    "[运动]", // 97
    "[光环]", // 98
    "[奋斗2]", // 99
    "[dab girl]", // 100
    "[dab boy]", // 101
    "[热咖啡]", // 102
    "[红包]", // 103
    "[菜刀]", // 104
    "[篮球]", // 105
    "[乒乓]", // 106
    "[闪电]", // 107
    "[猪头]", // 108
    "[炸弹]", // 109
    "[匕首]", // 110
    "[足球]", // 111
    "[瓢虫]", // 112
    "[便便]" // 113
];

var checkFile_count = 0;

// 验证表情图片是否存在，并按优先顺序选择后缀
/*
    @emotion_index: 表情序号,
    @emotion_count: 表情数量，异步成功数追平后执行callback_success
    @callback_access: function(err, fp)  完成单个图片验证的回调。@err = 错误 || null。@fp = 图片路径
    @callback_success: function() 完成所有异步后执行
*/
var checkFile = function(emotion_index, emotion_count, callback_access, callback_success) {

    return (function() {

        var fp = emotion_handler.emotion_dir + emotion_handler.emotion_fp_pre + emotion_index.toString() + ".";

        emotion_handler.emotion_fp_ext.some(function(ext) {

            fs.access(fp + ext, function(err) {
                if (err)
                    callback_access("error: 表情图片不存在", "");
                else
                    callback_access(null, fp + ext);

                if (++checkFile_count >= emotion_count * emotion_handler.emotion_fp_ext.length) {
                    callback_success();
                }
            });
        });
    })();

};

// 【async】获得表情列表
/* 
    @callback: function([{
        imgPath: 表情图片路径,
        name: 表情名称，如：[微笑]
    }])
*/
exports.get_emotionList_async = function(callback) {
    var result = [];

    checkFile_count = 0;

    emotion_handler.emotion_name_list.forEach(function(emotion_name, index) {
        result.push({
            imgPath: "",
            name: emotion_name
        });

        checkFile(
            index,
            emotion_handler.emotion_name_list.length,
            function(err, fp) {
                if (!err)
                    result[index].imgPath = fp;
            },
            function() {
                result.splice(0, 1);
                callback(null, result);
            }
        );
    })
};

// 【async】通过表情名称换取表情图片路径。
/*
    @name: [表情名称]，如：[微笑]
    @callback: function(图片路径)
*/
exports.get_emotionImg_async = function(name, callback) {
    var emotion_index = emotion_handler.emotion_name_list.indexOf(name);

    if (emotion_index == -1)
        return "error: 该表情名称不存在";

    else {
        checkFile(emotion_index, 1, function(err, fp) {
            callback(err, fp);
        })
    }
};



// 【同步】消息过滤表情消息为图片
/*
    @msg: 消息
*/
exports.message_filter_emotion = function(msg) {

    // 基础正则
    var regExp_base_str = "(\\[.+?\\])";

    // 扩展正则，出现在基础正则前面
    var regExp_ext_str = "";

    // 正则条件对象
    var regExp = new RegExp("()" + regExp_base_str);

    var result,
        name_index;
    var replace_callback = function(m, $1) {
        return (function() {
            return $1 + "<span class=\"emotion\" style=\"background-image:url('/inc/emotion/Expression_" + name_index + ".png');\"></span>";
        })();
    };
    while (true) {
        result = regExp.exec(msg);

        // console.log("\n\n", "socketio", 257, "result:", result, "\n regExp_ext_str:" + regExp_ext_str);

        if (!result)
            break;

        name_index = emotion_handler.emotion_name_list.indexOf(result[2]);

        // console.log("\n\n", "socketio", 265, "name_index:", name_index);
        if (name_index == -1) {
            regExp_ext_str += "\\" + result[2].replace("]", "\\]") + ".*?";
            regExp = new RegExp("(" + regExp_ext_str + ")" + regExp_base_str);
        } else {
            msg = msg.replace(regExp, replace_callback);
        }
    }

    return msg;
};