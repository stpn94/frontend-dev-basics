/**
 * named export
 * exports (CommonJS)와 유사하다.
 * 이 모듈을 import 핧 때는 destructuring (객체분해)가 가능하다.
 *
 */

export const a = function (a, b) {
  return a + b;
};

export const sub = function (a, b) {
  return a - b;
};
