/*
    구문 (Sttement) : 자바스크립트의 실행단위
    
    1. 구성요소
        값, 연산자 : 표현식
        주석 : 구문을 구성해도 실행되지 않는다.
        예약어 : if, else, for, ...

    2. 구문의 예
        if, if~else, if~elseif~else
        while, do-while, for
        switch
        for~in
        with(deprecated)
        변수정의 (함수정의)

    3. 공백 : 토큰구분, 무시

    4. 세미콜론
        원칙적으로 구분을 분리하는 역할

    5. 개행 (line breaker)
*/

// 표현식 var s= "hello World" 를
// 표현식 구문 (Expression Statement)으로 만들어
// 표현식을 실행하게끔 한다.
var s = "hello World"; console.log(s)

// 1. 개행은 ; 으로 대체된다.
var s = "hello World"
console.log(s);

// 2. 상황에 따라서 토큰을 분리하는 역할도 하고 ; 역할도 한다.
a
=
2
+
2
console.log(a)