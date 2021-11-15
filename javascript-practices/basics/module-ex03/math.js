/* 추천하는 방법 */
/* 리콰이어가 모듈을 만들어 놨는데 exports를 또 만들면 복잡해진다. */
/* 리콰이어는 이방식을 추천한다.. */
/* exports 뒤에 꼭 이름을 사용해서 export 한다.
 * named export!!!!!!!!!!!!!!!!! 꼭 이름 있어야함!!!!!
 */

exports.PI = 3.14;
exports.max = function () {
  var max = Number.MIN_SAFE_INTEGER;
  Array.from(arguments).forEach(function (e) {
    max = e > max ? e : max;
  });

  return max;
};

exports.min = function () {
  var min = Number.MAX_SAFE_INTEGER;
  Array.from(arguments).forEach(function (e) {
    min = e < min ? e : min;
  });

  return min;
};
