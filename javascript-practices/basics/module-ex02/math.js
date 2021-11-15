/* 나쁜방법 */
/* 리콰이어가 모듈을 만들어 놨는데 exports를 또 만들면 복잡해진다. */
module.exports = {
  PI: 3.14,
  max: function () {
    // 제일 작은 값
    var max = Number.MIN_SAFE_INTEGER;
    Array.from(arguments).forEach(function (e) {
      max = e > max ? e : max;
    });
    return max;
  },
  min: function () {
    var min = Number.MAX_SAFE_INTEGER;
    Array.from(arguments).forEach(function (e) {
      min = e < min ? e : min;
    });

    return min;
  },
};
