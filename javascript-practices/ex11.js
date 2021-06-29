var colors = ['black', 'white', 'yellow'];
var fruits = ['apple', 'mango', 'banana'];
// Array 메소드 - concat
var a1 = fruits.concat(colors);
console.log(a1);

// Array 메소드 - join
var str = fruits.join(":");
console.log(str);

// Array 메소드 - pop, push: stack 지원
var color = colors.pop();
console.log(color);
console.log(colors);

colors.push('red');
console.log(colors)

// Array 메소드 - reverse
console.log(colors.reverse());

// Array 메소드 - shift
var numbers = [4000, 8000, 3000, 5000, 1000];
console.log(numbers);
var n =  numbers.shift();
console.log(n, numbers);

// Array 메소드 - slice
var numbers2 = numbers.slice(1, 3);
console.log(numbers2);

// Array 메소드 - sort
console.log(numbers);
console.log(numbers.sort());

// Array 메소드 - splice
// index부터 count 개를 삭제 후 삭제된 요소를 배열로 반환 
console.log(fruits);
var fruits2 = fruits.splice(0 /*인덱스 */, 2 /* count */);
console.log(fruits2, fruits);

var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 3, 10);
console.log(a1, a2);

var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 1, 10);
console.log(a1, a2);

var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 0, 10);
console.log(a1, a2);