//모듈이 뭘까?

/* 분리되어 있지 않은 애플리케이션 */
var App = function () {
  var app = {};
  app.textContent = "helloWorld";

  return app;
};

console.log(App());
