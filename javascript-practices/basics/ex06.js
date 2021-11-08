/*
    1. 자바스크립트 객체는 function 타입과 object타입 객체타입 2가지가 있다.
    2. 보통 function 타입 객체는 '함수' 라고 부른다.
    3. 따라서 자바스크립트 객체라 부르는것은 object타입의 객체를 가리킨다.
*/

// 생성방법1
// 생성자 함수를 사용
// Number(),Boelean(), String(), Object(), Array() ... 내장객체(생성자 함수)

// 그리고 사용자 정의 생성자 함수

var o1 = new Object();
o1.name="둘리";
o1.age=10;

o1.another = new Object();
o1.another.name = "마이콜";
o1.another.age=30;


// 생성방법2
// {} literal 사용하는 방법
o2 = {};
o2.name="둘리";
o2.age=10;
o2.another=new Object();
o2.another.name="마이콜";
o2.another.age=30;

console.log(o2);

// 생성방법 3 =(J)ava(S)cript (O)bject (N)otation
o3={
    name: "둘리",
    age: 10,
    another:{
        name:"마이콜",
        age: 30
    }
};

console.log(o3);

/* XmlHttpRequest 호스트 객체(브라우저) 사용해서 통신(AJAX) */

var response='{name:"둘리",age:10,email:"dooly@naver.com"}';
var userVo=eval("("+response+")");
console.log(userVo.name+":"+userVo.email);
