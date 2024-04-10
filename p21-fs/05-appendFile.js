const fs = require('fs');

fs.appendFile("./avatar2/a.txt", "\n12345678902222", (err) => {
  if (err) {
    console.log(err);
  }
})