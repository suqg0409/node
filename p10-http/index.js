var http = require("http")

// 创建服务器
var server = http.createServer(function (req, res) {
    // 获取请求的url
    console.log("请求的url为：" + req.url);
    res.writeHead(404, {"Content-Type": "text/html;charset=utf8"});
    res.write(`
    <html>
      <body><h1>哈哈哈</h1></body>
    
    </html>
    `);
    res.end("<h1>Hello Nodejs</h1>");
})
server.listen(3000, function () {
    console.log('服务器启动成功，监听端口为：3000')
});
