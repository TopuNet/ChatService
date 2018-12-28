// default settings. fis3 release
// fis.set('project.charset', 'utf8');
// fis.set('project.fileType.text', 'htm');
fis.set('project.ignore', ['/fis-conf.js',
    '/web.config',
    '/iisnode/**',
    '/css/**.less',
    '/node_modules/**',
    '/**/.DS_Store',
    '/**/server.log',
    '/**/npm-debug.log',
    'package*',

    '**/test_*.*',
    '**/pub_*.*',
    '**/*_zqf.*',
    '**/*_zqfdev.*',
    '**/*_tht.*'
]);
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

fis.match('/app_pub.js', {
    release: '/app.js'
});

// Global end

// zqfdev start
fis.media('zqfdev').match('/inc/**', {
    url: '$0',
    domain: 'http://chat-dev.zhongqifu.com.cn'
});

fis.media('zqfdev').match('{/css/**,/images/**,/widget/**}', {
    url: '$0',
    domain: 'http://chat-dev.zhongqifu.com.cn/static'
});

fis.media('zqfdev').match('/widget/**.js', {
    optimizer: fis.plugin('uglify-js')
});

fis.media('zqfdev').match('/css/**.css', {
    optimizer: fis.plugin('clean-css')
});
// zqfdev end

// zqf start

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