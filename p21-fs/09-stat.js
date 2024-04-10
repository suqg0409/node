const fs = require('fs');

fs.stat("./avatar2" , (err,data) => {
    // error fisrt风格
    if(err) {
        console.log("读取失败");
    }else {
        console.log(data.isFile());
        console.log(data.isDirectory());
    }
})