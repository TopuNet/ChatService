requirejs.config({
    // baseUrl: '/widget',
    // paths: {
    //     "jweixin": "http://res.wx.qq.com/open/js/jweixin-1.2.0.js"
    // }
    // shim: {
    //     "jweixin": {
    //         exports: "jweixin"
    //     }
    // }
});

require(["app/mobile/app", "http://res.wx.qq.com/open/js/jweixin-1.0.0.js"]);