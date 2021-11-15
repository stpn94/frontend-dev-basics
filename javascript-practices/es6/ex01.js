/* 
    let: Block Scope의 변수
 */

// let의 블락 범위
try {
  if (true) {
    var i = 10;
    let j = 20;
  }
  //밖에서 는 j 접근 못한다.
  // i는 var (전역) 이기 때문에 가능하다.
  console.log(i);
  //  console.log(i,j);
} catch (e) {
  console.log(`error: ${e}`);
}

// cf: var 함수 범위
try {
  let f = function () {
    // var m = 20;
    let m = 20;
  };
  f();
  console.log(m);
} catch (e) {
  console.error(`error: ${e}`);
}
