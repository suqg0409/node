const fs = require('fs');

fs.rmdir('./avatar2', (err) => {
  if (err) {
    console.log(err);
  }
  if(err && err.code === 'ENOENT') {
    console.log('目录不存在');
  }
  if(err && err.code === 'ENOTEMPTY') {
    console.log('目录不为空');
  }
})