/*
변수와 데이터 타입

[기본타입(primitive type)]
1. number
2. boolean
3. string
4. undefined

[객체] new 생성자함수 () 사용해서 생성 
Number()
Boolean()
String()

*/

// 자바 스크립트는 선언과 정의의 구분이 없음 
// var = 변수 이름을 정의하는 키워드
var u; // var u = undefined; 와 동일
var i = 10;
var b = true;
var s = "Hello World";

console.log("u: " + typeof(u));
console.log("i: " + typeof(i));
console.log("b: " + typeof(b));
console.log("s: " + typeof(s));

console.log("=====================================")
var i2 = new Number(10);
var b2 = new Boolean(true);
var s2 = new String("Hello World");

console.log("i2: " + typeof(i2));
console.log("b2: " + typeof(b2));
console.log("s2: " + typeof(s2));