/*
	移动端初始化设置
	zepto、横屏、mobile_stop_moved
	高京
	2017-05-25
*/

define([
    "lib/zepto.min",
    "lib/mobile_stop_moved",
    "lib/landscape_mask"
], function(
    $zepto,
    $mobile_stop_moved,
    $landscape_mask
) {

    var opt = {
        selector: "div.stoped_wrapper", // 容器盒选择器（resize_toWindow为false时，需要在样式表中将此盒定高），无默认值
        scroll: true, // 盒内可滚动，默认true
        resize_toWindow: true // 将容器盒自动设置为有效窗口高度(window.innerHeight)，并监听窗口大小改变——解决ios safari浏览器底部工具栏遮挡页面的问题，默认true
    };
    $mobile_stop_moved.init(opt);
    $landscape_mask.init();
});
