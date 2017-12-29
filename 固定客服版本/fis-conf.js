// default settings. fis3 release
// fis.set('project.charset', 'utf8');
// fis.set('project.fileType.text', 'htm');
fis.set('project.ignore', ['/fis-conf.js',
    '/web.config',
    '/iisnode/**',
    '/css/**.less',
    '/node_modules/**',
    '/app.js',
    '/handle/chat_config.js',
    '/routes/chat.js',
    // '/handle/*.js_bak',
    '/**/.DS_Store',
    '/**/server.log',
    '/**/npm-debug.log',
    '/launch/www.js',
    '/inc/abc.txt',
    '/views/chat/mp_servicer_form.html',
    '/views/chat/chat_list_getSort.html'
]);
fis.config.set('settings.optimizer.uglify-js', {
    mangle: false // 不混淆
});

// Global start

fis.match('/app_pub.js', {
    release: '/app.js'
});

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

fis.match('/widget/aio*.js', {
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

// zqfdev start
fis.media('zqfdev').match('/handle/chat_config_zqfdev.js_bak', {
    release: '/handle/chat_config',
    rExt: '.js'
});

fis.media('zqfdev').match('/routes/chat_zqf.js_bak', {
    release: '/routes/chat',
    rExt: '.js'
});

fis.media('zqfdev').match('/inc/abc_zqfdev.txt_bak', {
    release: '/inc/abc',
    rExt: '.txt'
});

fis.media('zqfdev').match('/launch/www_zqfdev.js_bak', {
    release: '/launch/www',
    rExt: '.js'
});

fis.media('zqfdev').match('/views/Chat/mp_servicer_form_zqf.html', {
    release: '/views/Chat/mp_servicer_form',
    rExt: '.html'
});

fis.media('zqfdev').match('/views/Chat/chat_list_getSort_zqf.html', {
    release: '/views/Chat/chat_list_getSort',
    rExt: '.html'
});

fis.media('zqfdev').match('/inc/**', {
    url: '$0',
    domain: 'http://chat-dev.zhongqifu.com.cn'
});

fis.media('zqfdev').match('{/css/**,/images/**,/widget/**}', {
    url: '$0',
    domain: 'http://chat-dev.zhongqifu.com.cn/static'
});
// zqfdev end

// zqf start
fis.media('zqf').match('/handle/chat_config_zqf.js_bak', {
    release: '/handle/chat_config',
    rExt: '.js'
});

fis.media('zqfdev').match('/routes/chat_zqf.js_bak', {
    release: '/routes/chat',
    rExt: '.js'
});

fis.media('zqf').match('/inc/abc_zqf.txt_bak', {
    release: '/inc/abc',
    rExt: '.txt'
});

fis.media('zqf').match('/launch/www_zqf.js_bak', {
    release: '/launch/www',
    rExt: '.js'
});

fis.media('zqf').match('/views/Chat/mp_servicer_form_zqf.html', {
    release: '/views/Chat/mp_servicer_form',
    rExt: '.html'
});

fis.media('zqf').match('/views/Chat/chat_list_getSort_zqf.html', {
    release: '/views/Chat/chat_list_getSort',
    rExt: '.html'
});

fis.media('zqf').match('/inc/**', {
    url: '$0',
    domain: 'http://chat.zhongqifu.com.cn'
});

fis.media('zqf').match('{/css/**,/images/**,/widget/**}', {
    url: '$0',
    domain: 'http://chat.zhongqifu.com.cn/static'
});

fis.media('zqf').match('/widget/**.js', {
    optimizer: fis.plugin('uglify-js')
});

fis.media('zqf').match('/css/**.css', {
    optimizer: fis.plugin('clean-css')
});
// zqf end

// tht start
fis.media('tht').match('/handle/chat_config_tht.js_bak', {
    release: '/handle/chat_config',
    rExt: '.js'
});

fis.media('zqfdev').match('/routes/chat_tht.js_bak', {
    release: '/routes/chat',
    rExt: '.js'
});

fis.media('tht').match('/inc/abc_tht.txt_bak', {
    release: '/inc/abc',
    rExt: '.txt'
});

fis.media('tht').match('/launch/www_tht.js_bak', {
    release: '/launch/www',
    rExt: '.js'
});

fis.media('tht').match('/views/Chat/mp_servicer_form_tht.html', {
    release: '/views/Chat/mp_servicer_form',
    rExt: '.html'
});

fis.media('tht').match('/views/Chat/chat_list_getSort_tht.html', {
    release: '/views/Chat/chat_list_getSort',
    rExt: '.html'
});

fis.media('tht').match('/inc/**', {
    url: '$0',
    domain: 'http://chat.taohuantang.com.cn'
});

fis.media('tht').match('{/css/**,/images/**,/widget/**}', {
    url: '$0',
    domain: 'http://chat.taohuantang.com.cn/static'
});

fis.media('tht').match('/widget/**.js', {
    optimizer: fis.plugin('uglify-js')
});

fis.media('tht').match('/css/**.css', {
    optimizer: fis.plugin('clean-css')
});
// tht end