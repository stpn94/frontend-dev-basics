/* 4. default parameter */

//매게변수가 1개변 strs \n 이 자동으로 들어간다.
const print = function (strs, end = `\n`) {
  console.log(strs.join(end));
};

print(["Always", "with", "me"]);
print(["Always", "with", "me"], " ");
