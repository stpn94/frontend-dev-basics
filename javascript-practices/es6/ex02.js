/*
 * const: Block Scope의 상수
 */

// 1. block scope 확인해보자.
// block scope에 대한 에러.
try {
  if (true) {
    const NUM = 10;
  }
  console.log(NUM);
} catch (e) {
  console.error(`error: ${e}`);
}
// 2. error: 대입(Assignment )에러
try {
  const NUM = 10;
  NUM = 20;
} catch (e) {
  console.error(`error: ${e}`);
}