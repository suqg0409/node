const fs = require('fs');

fs.readdir("./avatar2" , (err,data) => {
    // error fisrt风格
    if(err) {
        console.log("读取失败");
    }else {
        console.log(data);
    }
})