function test() {
  console.log("text-ccc");
}
function test2() {
  console.log("text-ccc2");
}
// module.exports = {
//   test,
//   test2,
// };
exports.test = test;
exports.test2 = test2;