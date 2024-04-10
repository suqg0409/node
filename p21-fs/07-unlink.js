const fs = require('fs');

fs.unlink("./avatar2/a.txt" , (err) => {
    // error fisrt风格
    if(err) {
        console.log("读取失败");
    }
})