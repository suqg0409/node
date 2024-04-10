const fs = require('fs');

fs.mkdir('./avatar', (err) => {
  if (err) {
    console.log(err);
  }

  if(err && err.code === 'EEXIST') {
    console.log('目录已存在');
  }
  if(err && err.code === 'EPERM') {
    console.log('权限不够');
  }
})