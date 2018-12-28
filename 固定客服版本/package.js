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

process.stdout.write("please wait a moment \n");
// var interval_print = setInterval(function() {
//     process.stdout.write(".");
// }, 500);

var interval_print

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

process.stdout.write("copy file ");
interval_print = setInterval(function () {
    process.stdout.write(".");
}, 500);

// copy文件
// var finished_index = 0;
file_templates.forEach(function (f) {

    var file_des = f.replace("/" + program.env + "_", "/")
        .replace("_" + program.project + ".", ".")
        .replace("_" + project + ".", ".");

    var rs = fs.createReadStream(f);
    var ws = fs.createWriteStream(file_des);
    rs.pipe(ws);

    file_temp.push(file_des);
});

clearInterval(interval_print);
process.stdout.write(" success \n");
process.stdout.write("pack js ");
interval_print = setInterval(function () {
    process.stdout.write(".");
}, 500);

// 打包js
var r = function () {
    var r_index = 0,
        r_count = 2;

    var check_r_count = function () {
        if (++r_index >= r_count) {

            clearInterval(interval_print);
            process.stdout.write(" success \n");

            doFis();
        }
    };
    shell.exec("node widget/r.js -o widget/build.js", function () {
        check_r_count();
    });
    shell.exec("node widget/r.js -o widget/build_mobile.js", function () {
        check_r_count();
    });
}();

// 执行fis操作
var doFis = function () {

    process.stdout.write("fis ");
    interval_print = setInterval(function () {
        process.stdout.write(".");
    }, 500);

    var fis_media = program.env == "test" ? "" : " " + program.project,
        fis_releaseDir = "../" + program.project;

    var cmd = "sudo fis3 release" + fis_media + " -d " + fis_releaseDir;

    shell.exec(cmd, function (error, out_str) {

        clearInterval(interval_print);
        process.stdout.write(" finish \n");

        delete_tempFile();

        process.stdout.write("tempFile deleted \n");

        // console.log("\n", "fis3:", error);

        // 报错
        if (error) {
            console.error(error);
            process.stdout.write(out_str);
        }
        else {

            // 判断是否需要copy node_modules
            fs.access(fis_releaseDir + "/node_modules", function (err) {
                // console.log("66 err:", err);
                if (err) {

                    process.stdout.write("copy node_modules ");
                    interval_print = setInterval(function () {
                        process.stdout.write(".");
                    }, 500);

                    var cmd = "cp -R ./node_modules " + fis_releaseDir + "/node_modules";

                    shell.exec(cmd, function (error, out_str) {
                        // console.log("\n", "copy node_modules:", stdout);

                        clearInterval(interval_print);
                        process.stdout.write(" finish \n");

                        if (error)
                            console.error(error);
                        else
                            run(fis_releaseDir);
                    });
                } else
                    run(fis_releaseDir);
            });
        }
    });
};

// 运行
var run = function (fis_releaseDir) {

    process.stdout.write("release dir: " + fis_releaseDir + "\n");

    if (program.start.toString().toLowerCase() === "false") {
        return;
    }

    process.stdout.write("node run start ");
    interval_print = setInterval(function () {
        process.stdout.write(".");
    }, 500);

    var cmd = "";
    var argv = [];
    var launch_fp = fis_releaseDir + "/launch.js";

    if (program.supervisor.toString().toLowerCase() === "false") {
        cmd = "node";
        argv.push(launch_fp);
    } else {
        cmd = "supervisor";
        argv.push("-w", `${fis_releaseDir}/app.js,${fis_releaseDir}/launch,${fis_releaseDir}/routes,${fis_releaseDir}/handle`, launch_fp);
    }

    clearInterval(interval_print);
    process.stdout.write(" ok\n");

    var spawn = shell.spawn(cmd, argv);

    spawn.stdout.on("data", function (data) {
        process.stdout.write(data.toString());
    });

    spawn.stderr.on("data", function (data) {
        process.stdout.write(data.toString());
    });
};

// 删除临时文件
var delete_tempFile = function () {
    // return;
    file_temp.forEach(function (f) {
        fs.unlink(f, function () {

        });
    });
};