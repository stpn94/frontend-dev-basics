// 변수의 범위 (scope)
// 1. javascript는 어휘에서 범위를 알 수 없는 정적범위이다.
// 2. EC6 이전에는 자바스크립트는 자바와 같은 BlockScope
//    EC6 이전에는 함수범위(Function Scope)만 지원했었다.
//    function의 {} 안에서 변수 var 키워드를 하면 함수범위를 가지게 된다.
//    만일, var 키워드 없이 변수를 정의하면 전역범위를 가지게 된다.
// 3. EC6에서는 
//    새롭게 Block Scope를 가지게 하는
// 1) let : 변수
// 2) const : 상수
// 두 키워드를 지원한다.

var i = 10;
var f = function(){
    var i = 20;
    j = 100;
    console.log(i);
    i = j-1;
}

{
    let x = 1000000;
    const PI = 3.14;
    x = 100;
    // 상수이기 때문에 오류
    // PI = 0;
}
// error : 접근 불가
// console.log(x);

f();
console.log(i);
console.log(j);