/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
var http = require("http")
var url = require("url")
var moduleRenderHTML = require("./module/renderHTML")
var moduleRenderStatus = require("./module/renderStatus")
//创建服务器

var server = http.createServer()

server.on("request",(req,res)=>{
    //req 接受浏览器传的参数 
    //res 返回渲染的内容

    // res.write("hello wolrd")
    // res.write("hello wolrd22")
    // res.end([1,2,3]) 

    // res.write("aaaaa")
    if(req.url==="/favicon.ico"){
        // todo 读取本地图标
        return
    }
    console.log(req.url)
    var urlObj = url.parse(req.url,true)
    console.log(urlObj.query.data)
    var pathname = url.parse(req.url).pathname;
    res.writeHead(moduleRenderStatus.renderStatus(pathname),{"Content-Type":"text/html;charset=utf-8"})
    res.write(moduleRenderHTML.renderHTML(pathname))
    res.end()
})

server.listen(3000,()=>{
    console.log("server start")
})



