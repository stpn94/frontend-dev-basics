# 테스트

## 자바스크립트 단위 테스트 도구
1. 자바스크립트 단위 테스트도구는 20여가지가 넘게있다.
2. Java : JUnit == JavaScript: JSUnit(개발중지, 2009년)
3. JSUnit 프로젝트 ---> Jasmine (2010년 ~ 현재)
    - 자체 assertion을 가지고 있다.
    - BDD 기반 개발의 표준 테스팅에 맞는 문법을 작성할 수 있다.
4. DOM 조작 애플리케이션(jQuery 기반) -> QUnit
    - 세팅하기 쉽고 간편하게 테스트
    - Promise 기반 비동기 테스트
5. Node 기반 백엔드 애플리케이션 테스트 -> Mocha 
    - Promise 기반 비동기 테스트
    - 자체 Assertion 이 없다.
    - 대신, Node 코어모듈 중에  assert 라이브러리 뿐만 아니라 다양하게 지원 (chai, should.js, expect.js)
    - 유연하고 확장성이 좋다.
6. Jasmine, QUnit, Mocha, Jest(React 개발 테스트 도구)

## Mocha 설치
``` bash
$ npm i -D mocha
$ npx mocha --version
```

## Mocha 테스트 케이스 모듈작성
[ex01.js]
```javascript
exports.hello = () => 'Hello World';
```
[test/ex01.js]
```javascript
const assert = require('assert');
const { hello } = require('../ex01');

describe('hello()',function(){
    if('"Hello World" 문자열을 반환해야 함', function(){
        assert.strictEqual(hello(), "Hello World");
    });
});
```

테스트 수행1
```bash
$ npm mocha test/ex01
```

테스트 수행2
```bash
$ npm mocha -r
```

테스트 수행3
1. package.json 에 scripts test stage를 추가
```json
.
.
  "scripts": {
    "test": "npx mocha"
  },
  .
  .
```
2. 테스트 수행
```bash
$ npm test
```
## Assertion 기초
[ex02.js]
```javascript
exports.add = (a,b) => a+b;
exports.na = () => [2,4,6];
exports.X = function(){
    
}
```

[ex02.test01.js]
```javascript
const assert = require('assert');
const {add} = require('./ex02');
try{
    assert.equal(add(10, 20), '30');
    assert.strictEqual(add(10,20),'30');
    console.log('ok');
} catch(err) {
    console.log('fail:', err.message);
}
```
Strict Mode( ===, !=== ) 로 assertion을 하여야 한다.
1. equal(deprecteds) -> strictEqual
2. notEqual ( deprecteds ) -> strictNotEqual
3. deepEqual(deprecteds -> strictEqual
4. notDeepEqual(deprecteds) -> notStrictDeepEqual