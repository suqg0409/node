const fs = require('fs');

fs.readdir("./avatar2" , (err,data) => {
    // error fisrt风格
    if(err) {
        console.log("读取失败");
    }else {
        console.log(data);
        data.forEach(item => {
            fs.unlink("./avatar2/"+item, (err) => {
                if(err) {
                    console.log("删除失败");
                }else {
                    console.log("删除成功");
                }
            })
        });
    }
})