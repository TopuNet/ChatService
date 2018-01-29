var program = require('commander'),
    fs = require('fs'),
    shell = require('child_process');


// 处理参数
program
    .version('0.1.0')
    .option('-e, --env [env]', 'environment type [test|pub]', /^(test|pub)$/i, 'test')
    .option('-p, --project [project]', 'project type [zqfdev|zqf|tht]', /^(zqfdev|zqf|tht)$/i, 'zqfdev')
    .option('-s, --start [start]', 'autostart [true|false]', /^(true|false)$/i, true)
    .option('-v, --supervisor [supervisor]', 'use supervisor [true|false]', /^(true|false)$/i, true)
    .parse(process.argv);

process.stdout.write("please wait a moment ");
var interval_print = setInterval(function() {
    process.stdout.write(".");
}, 500);

// 获得文件路径
var file_templates,
    file_temp = [],
    project = program.project.replace("dev", "");

file_templates = [
    "./" + program.env + "_app.js",
    "./handle/" + program.env + "_chat_config_" + program.project + ".js",
    "./handle/chat_restful_" + project + ".js",
    "./inc/abc_" + program.project + ".txt",
    "./routes/chat/chat_" + project + ".js",
    "./views/Chat/chat_list_getSort_" + project + ".html",
    "./views/Chat/mp_servicer_form_" + project + ".html"
];

if (program.env == "test") {

    file_templates.push("./launch/test_www.js");

} else if (program.env == "pub") {

    file_templates.push(
        "./launch/www_" + program.project + ".js"
    );

}

// copy文件
// var finished_index = 0;
file_templates.forEach(function(f) {

    var file_des = f.replace("/" + program.env + "_", "/")
        .replace("_" + program.project + ".", ".")
        .replace("_" + project + ".", ".");

    var rs = fs.createReadStream(f);
    var ws = fs.createWriteStream(file_des);
    rs.pipe(ws);

    file_temp.push(file_des);
});

// 打包js
var r = function() {
    var r_index = 0,
        r_count = 2;

    var check_r_count=function(){
        if(++r_index>=r_count)
            doFis();
    };
    shell.exec("node widget/r.js -o widget/build.js", function() {
        check_r_count();
    });
    shell.exec("node widget/r.js -o widget/build_mobile.js", function() {
        check_r_count();
    });
}();

// 执行fis操作
var doFis = function() {

    var fis_media = program.env == "test" ? "" : program.project,
        fis_releaseDir = "../" + program.project;

    var cmd = "fis3 release " + fis_media + " -d " + fis_releaseDir;

    shell.exec(cmd, function(error, stdout, stderr) {

        delete_tempFile();

        // console.log("\n", "fis3:", stdout);

        // 获取命令执行的输出
        if (error)
            console.log(error);

        // 判断是否需要copy node_modules
        fs.access(fis_releaseDir + "/node_modules", function(err) {
            // console.log("66 err:", err);
            if (err) {
                var cmd = "cp -R ./node_modules " + fis_releaseDir + "/node_modules";

                shell.exec(cmd, function(error, stdout) {
                    // console.log("\n", "copy node_modules:", stdout);
                    run(fis_releaseDir);
                });
            } else
                run(fis_releaseDir);
        });
    });
};

// 运行
var run = function(fis_releaseDir) {

    clearInterval(interval_print);
    console.log("\n" + "success. release dir:", fis_releaseDir);

    if (program.start.toString().toLowerCase() === "false") {
        return;
    }

    // console.log("launch project");

    var cmd = "";
    var argv = [];
    var launch_fp = fis_releaseDir + "/launch.js";

    if (program.supervisor.toString().toLowerCase() === "false") {
        cmd = "node";
        argv.push(launch_fp);
    } else {
        cmd = "supervisor";
        argv.push("-w", `${fis_releaseDir}/app.js,${fis_releaseDir}/launch,${fis_releaseDir}/routes,${fis_releaseDir}/handle`, "--debug", launch_fp);
    }

    var spawn = shell.spawn(cmd, argv);

    spawn.stdout.on("data", function(data) {
        console.log(data.toString());
    });

    spawn.stderr.on("data", function(data) {
        console.log(data.toString());
    });

    // function(error, stdout, stderr) {
    //     console.log("\n", "start:", stdout);
    //     if (error)
    //         console.log(error);

    //     delete_tempFile();
    // }
};

// 删除临时文件
var delete_tempFile = function() {
    file_temp.forEach(function(f) {
        fs.unlink(f);
    });
};