// 1.
// unnamed export 모듈에서 대상을 하나 import 할 때는 이름을 지정해야 한다.
import unamedFunction from "./ex08.01.mjs";
import unamedObject from "./ex08.02.mjs";
console.log(unamedFunction(100, 200), unamedObject.substract(100, 200));

// 2.
// named export는 import 대상이 다수이기 때문에 하나의 특정 이름으로 import 할 수 없다.
// 대신, * as ~ 를 사용할 수 있다.
// import m from "./ex08.03.mjs";
import * as m from "./ex08.03.mjs";
console.log(m.a(100, 200), m.sub(100, 200));

// 3.
// 특정 이름을 사용해서 전체를 받는 대신 구조분해를 사용해 개별적 import는 가능하다.
import { substract } from "./ex08.04.mjs";
console.log(add(100, 200), math.substract(100, 200));

// 4.
// unamed/named export를 혼용한 모듈 import 사용 예
import math, { add } from "./ex08.05.mjs";
