const fs = require('fs');

fs.readFile("./avatar2/a.txt" ,"utf-8", (err, data) => {
    // error fisrt风格
    if(err) {
        console.log("读取失败");
        return;
    }else{
        console.log(data);
        console.log(data.toString("utf-8"));
    }
})