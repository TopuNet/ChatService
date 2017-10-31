/*
    表情面板相关js
    执行$obj.init(opt)启动
    @opt: {
        device: "mobile" | "pc",
        box_selector: 外盒选择器，默认值：.emotion_box,
        pic_ul_selector: 图片li的ul盒选择器，此盒必须存在于box_selector中，且值中不用包含box_selector。默认值：.emotion_panel,
        point_ul_selector: 圆点li的ul盒选择器，空字符串为无圆点。此盒不必存在于box_selector中。默认值：.emotion_box .point_li
    }

    that = {
        opt: 参数
    }
*/

define(["lib/RotatingBanner"], function($rb) {
    var emotion = {
        init: function(opt) {
            var that = this;

            // 处理opt
            that.opt_deal.apply(that, [opt]);

            // 设置pic_ul_selector的宽度
            that.set_picUlSelector_width.apply(that);

            // 监听左右划屏轮播
            that.Rotating_Listener.apply(that);
        },

        // 处理opt
        opt_deal: function(opt) {

            var that = this;

            var opt_default = {
                mobile_effect: true,
                box_selector: ".emotion_box",
                pic_ul_selector: ".emotion_panel",
                point_ul_selector: ".emotion_box .point_ul",
                pic_li_selector: "li.screen_li",
                point_autoCreate: true,
                duration: 200,
                resize_li: false,
                mobile_effect_touchmove_distance_vw: 10
            };

            that.opt = $.extend(opt_default, opt);
        },

        // 设置pic_ul_selector的宽度
        set_picUlSelector_width: function() {
            var that = this;

            var panel = $(that.opt.pic_ul_selector),
                ul = panel.find("ul"),
                window_width_px = $(window).width();

            panel.css({
                width: ul.length * window_width_px + "px"
            });
        },

        // 监听左右划屏轮播
        Rotating_Listener: function() {

            var that = this;

            var RotatingBanner_1 = new $rb();
            RotatingBanner_1.init(that.opt);
        },

        // 更换表情，返回msg
        emotion_filter: function(msg) {

            // 正则条件对象
            var regExp = new RegExp(/((?:\[)*)(\[.+?\])/g);

            var name_index;

            msg = msg.replace(regExp, function(m, $1, $2) {

                name_index = comm_emotion.emotion_name_list.indexOf($2);

                if (name_index == -1)
                    return m;
                else
                    return $1 + "<span class=\"emotion\" style=\"background-image:url('/inc/emotion/Expression_" + name_index + ".png');\"></span>";
            });

            /*
            while (true) {
                result = regExp.exec(msg);

                // console.log("\n\n", "socketio", 257, "result:", result, "\n regExp_ext_str:" + regExp_ext_str);

                if (!result)
                    break;


                name_index = comm_emotion.emotion_name_list.indexOf(result[1]);

                console.log(name_index);

                // console.log("\n\n", "socketio", 265, "name_index:", name_index);
                if (name_index == -1) {
                    // regExp_ext_str += "\\" + result[2].replace("]", "\\]") + ".*?";
                    // regExp = new RegExp("(" + regExp_ext_str + ")" + regExp_base_str);
                } else {
                    msg = msg.replace(regExp, replace_callback);
                    console.log(msg);
                    break;
                }
            }
*/
            return msg;
        },

        // 备份
        emotion_filter_1: function(msg) {

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


                name_index = comm_emotion.emotion_name_list.indexOf(result[2]);

                // console.log("\n\n", "socketio", 265, "name_index:", name_index);
                if (name_index == -1) {
                    regExp_ext_str += "\\" + result[2].replace("]", "\\]") + ".*?";
                    regExp = new RegExp("(" + regExp_ext_str + ")" + regExp_base_str);
                } else {
                    msg = msg.replace(regExp, replace_callback);
                }
            }

            return msg;
        }
    };

    return emotion;
});