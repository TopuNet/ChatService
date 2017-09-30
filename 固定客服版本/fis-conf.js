// default settings. fis3 release
// fis.set('project.charset', 'utf8');
// fis.set('project.fileType.text', 'htm');
fis.set('project.ignore', ['/fis-conf.js', '/web.config', '/iisnode/**', '/css/**.less', '/node_modules/**', '/app.js', '/handle/chat_config.js', '/handle/*.js_bak', '/**/.DS_Store', '/**/server.log', '/**/npm-debug.log']);
fis.config.set('settings.optimizer.uglify-js', {
    mangle: false // 不混淆
});

// Global start
fis.match('/css/**.css', {
    release: '/static$0',
    useHash: true
});

fis.match('/css/**.css.map', {
    release: '/static$0'
});

fis.match('/widget/**', {
    release: false
});

fis.match('/widget/aio.js', {
    release: '/static$0',
    useHash: true
});

fis.match('/images/**', {
    release: '/static$0',
    useHash: true
});

fis.match('/images/**.png', {
    optimizer: fis.plugin('png-compressor')
});
// Global end

// Publish start
fis.media('pub').match('/inc/**', {
    url: '$0',
    domain: 'http://chat.zhongqifu.com.cn'
});

fis.media('pub').match('{/css/**,/images/**,/widget/**}', {
    url: '$0',
    domain: 'http://chat.zhongqifu.com.cn/static'
});

fis.media('pub').match('/widget/**.js', {
    optimizer: fis.plugin('uglify-js')
});

fis.media('pub').match('/css/**.css', {
    optimizer: fis.plugin('clean-css')
});
// Publish end