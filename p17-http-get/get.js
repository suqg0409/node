var http = require("http");
var https = require("https");
var url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, {
      "Content-Type": "application/json;charset=utf8",
      "Access-Control-Allow-Origin": "*",
    });
    var urlobj = url.parse(req.url, true);
    console.log(urlobj.query);
    switch (urlobj.pathname) {
      case "/api/aaa":
        // 客户端
        httpget((data)=>{
          res.end(data);
        });
        break;
      default:
        res.end("404");
    }
    //   if (url === "/data") {
    //     res.end(
    //       JSON.stringify({
    //         name: "张三",
    //         age: 18,
    //       })
    //     );
    //   }
  })
  .listen(3002);

function httpget(cb) {
  var data = "";
  https.get("https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4",
    function (res) {
      res.on("data", function (chunk) {
        console.log(chunk);
         data += chunk;
      });
      res.on("end", function () {
        // console.log(data);
         cb(data);
      });
    }
  );
}

function httpget2(cb){
  var data = ""
  https.get(`https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4`,(res)=>{
      res.on("data",(chunk)=>{
        console.log(chunk);
          data+= chunk
      })

      res.on("end",()=>{
          // console.log(data)
          cb(data)
          // response.end(data)
      })

  })
}