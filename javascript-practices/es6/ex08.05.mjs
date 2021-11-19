/**
 *
 * mixed with named & unnamed(default)
 */

const add = function (a, b) {
  return a + b;
};

const substract = function (a, b) {
  return a - b;
};

export { add, substract };
// Enhanced Object Literal를 사용해서 unnamed export를 하였다.
// 14번 라인과 차이점을 이해하면 ES6 모듈 시스템 지원의 export, import는 끝~
export default { add: add, substract: substract }; // 객체 하나를 리턴하는 것
