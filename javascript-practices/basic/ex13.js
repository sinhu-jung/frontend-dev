// String

// 배열처럼 접근이 가능하다.
var str1 = "Hello World"
for(var i = 0; i < str1.length; i++){
    console.log(str1[i]);
}

// 문자열 합치기 
var str2 = "Hello";
var str3 = "World";
var str4 = str2 + " " + str3;
console.log(str4);

var str5 = 5 + "5";
console.log(str5);

var str6 = "boolean:" + true;
console.log(str6);

var str7 = "string1 string2 string3";
console.log(str7.length);

var index = str7.indexOf("string2");
console.log(index);

var index = str7.indexOf("string4");
console.log(index);

var str8 = str7.substr(10);
console.log(str8);

var str9 = str7.substr(10, 3 /* count */);
console.log(str9);

var str10 = str7.substring(10, 13 /*last index -1 */);
console.log(str10);

var a = str7.split(" ");
console.log(a);

var str11 = 'abcdef';
var a11 = str11.split(":");
console.log(a11);

var str22 = "1234"
var str33 = "5678"
console.log(str22.concat(str33));
console.log(str22);