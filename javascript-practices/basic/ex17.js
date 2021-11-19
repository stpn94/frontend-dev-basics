// function 객체 메서드 call

console.log("======= global ========");

var email="dooly@gmail.com";
console.log(email,global.email);
globalThis.name="둘리"; // var name = "둘리";
console.log(name,global.name);

console.log("====== function 객체 메서드 call =======");
var f1 = function(s){
    console.log(s + " " + this);
}

f1.apply(o);

// this 바꾸기

var o = {
    name:"마이콜";
}
f1.apply(o);

var f2 = function(s){
    console.log(s + " " + this.name);
}
f2.call(o,"hi");