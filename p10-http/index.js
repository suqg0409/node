var http = require("http")

// 创建服务器
var server = http.createServer(function (req, res) {
    // 获取请求的url
    console.log("请求的url为：" + req.url);
    res.writeHead(200, {"Content-Type": "text/html;charset=utf8"});
    res.write("<h1>Hello world</h1>");
    res.end("<h1>Hello Nodejs</h1>");
})
server.listen(3000, function () {
    console.log('服务器启动成功，监听端口为：3000')
});
