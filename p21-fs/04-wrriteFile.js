const fs = require('fs');

fs.writeFile("./avatar2/a.txt", "12345678902222", (err) => {
  if (err) {
    console.log(err);
  }
})