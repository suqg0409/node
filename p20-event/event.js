const EventEimmiter = require("events");

const event = new EventEimmiter();

event.on("play", (data) => {
  console.log(data,"事件触发了");
});


// setTimeout(() => {
//     event.emit("play", { name: "zhangsan" });
// }, 2000);


module.exports = event;