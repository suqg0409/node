var http = require("http");
var url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, {
      "Content-Type": "application/json;charset=utf8",
      "Access-Control-Allow-Origin": "*",
    })
    var urlobj = url.parse(req.url, true);
    console.log(urlobj.query);
    switch (urlobj.pathname) {
      case "/api/aaa":
        res.end(
          `(${JSON.stringify({
            name: "222",
            age: 18,
          })})`
        );
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
  .listen(3000);
