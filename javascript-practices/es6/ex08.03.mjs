/**
 * named export I
 * exports(CommonJS) 와 유사하다. 
 * 이 모듈을 import 할 때는 객체 분해(destructuring)가 가능하다.c
 */

export const add = function(a, b){
    return a + b;
}

export const sub = function(a, b){
    return a - b;
}