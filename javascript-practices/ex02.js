/*
변수와 데이터 타입

[기본타입(primitive type)]
1. number
2. boolean
3. string
4. undefined

[객체1] 
1.new 생성자함수 () 사용해서 생성
    Number()  -> object type 객체 생성
    Boolean() -> object type 객체 생성
    String()  -> object type 객체 생성
    Object()  -> object type 객체 생성
    Array()   -> object type 객체 생성
2. null
3. [](배열 리터럴)
4. {}(객체 리터럴, Json)

[객체2] function type


*/

// 자바 스크립트는 선언과 정의의 구분이 없음 
// var = 변수 이름을 정의하는 키워드
console.log("==== 원시 타입 =====================")
var u; // var u = undefined; 와 동일
var i = 10;
var b = true;
var s = "Hello World";

console.log("u :" + typeof(u));
console.log("i :" + typeof(i));
console.log("b :" + typeof(b));
console.log("s :" + typeof(s));

console.log("====[객체1]: object type =====================")
var i2 = new Number(10);
var b2 = new Boolean(true);
var s2 = new String("Hello World");
var o = new Object(true);
var a = new Array();
var n = null;
var a2 = [];
var o2 = {};

console.log("i2 :" + typeof(i2));
console.log("b2 :" + typeof(b2));
console.log("s2 :" + typeof(s2));
console.log("o2 :" + typeof(o));
console.log("a2 :" + typeof(a));
console.log("o2 :" + typeof(n));
console.log("a2 :" + typeof(a2));
console.log("a2 :" + typeof(o2));


console.log("====[객체2]: function type =====================")

var n = null;