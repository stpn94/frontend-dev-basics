//모듈이 뭘까?

/* 모듈을 사용하는 애플리케이션 */
var App = require("./app.js");

console.log(App());

/* 이게 모듈을 사용하는거다 이해가나? */

/* 원리만 알면 안 해깔림 */
/* require 코드가 돌때 */
/* ▽ */
/* ▽ */
/* ▽ */
/* 1. require 안에서 module.export = {} 이렇게 객체가 생김 */
/*    exports = module.exports          이거도 그 객체를 가르친다. */
/* 2. 그 안의 코드를 실행               니가 작성한 모듈안의 코드들 실행 */
/*  2-1 exports.f = function(){};       */
/*  2-1 exports.i = 10;                 */
/* 3. return module.exports;           이렇게 리턴된다 */
