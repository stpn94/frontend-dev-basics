var colors = ['black', 'white','yellow'];
var fruits = ['apple','mango', 'banana'];

// Array 메서드 - concat
var a1 = fruits.concat(colors);
console.log(a1);

// Array 메서드 - join
var str = fruits.join(":");
console.log(str);

// Array 메서드 - pop, push : stack 지원
var color = colors.pop();
console.log(color);
console.log(colors);

colors.push('red');
console.log(colors);

// Array 매서드 - reverse
console.log(fruits);
fruits.reverse();
console.log(fruits);

// Array 매서드 - shift
var numbers = [4000, 8000, 3000,5000, 1000];
console.log(numbers);
var n = numbers.shift();
console.log(n,number);

// Array 메서드 - slice
var numbers2 = numbers.slice(1, 3);
console.log(numbers2, numbers);

// Array 메서드 - sort
console.log(numbers);
numbers.sort();
console.log(numbers);

// Array 메서드 - splice
// index부터
console.log(fruits);
var fruits2 = fruits.splice(0 /*index */, 2/* count */);
console.log(fruits2, fruits);

var a1=[0,1,2,3,4];
var a2 = al.splice(1,1,10);
console.log(a2,a1);

var a1=[0,1,2,3,4];
var a2 = al.splice(1,0,10);
console.log(a2,a1);

