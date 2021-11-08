console.log("==================global Object==================");

global.name = "둘리";
console.log(name, global.name);

var email = "dolly@gmail.com";

console.log(email, global.email);

console.log("====== function 객체 메서드 apply =======");
var f1 = function () {
  console.log(this);
};
var o = {
  name: "마이콜",
  age: "good",
};
f1.apply(o);

console.log("====== function 객체 메서드 call =======");
var f2 = function (s) {
  console.log(s + "12 " + this.name);
};

f2("hi");
f2.call(o, "hi");
