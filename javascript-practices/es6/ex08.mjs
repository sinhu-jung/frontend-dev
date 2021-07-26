//1.
//unnamed export 모듈에서 대상을 하나 import 할 때는 이름을 지정해야 한다.
import unnamedFunction from './ex08.01.mjs';
// require 처럼 분해할 생각 하면 안됨
import unnamedObject from './ex08.02.mjs'; 

//2.
//named export는 import 대상이 다수 이기 때문에 특정 이름으로 import 할 수 없다.
// 대신에 * as ~ 를 사용할 수 있다.
//import m from './ex08.03.mjs' 는 에러 
import * as m from './ex08.03.mjs'

console.log(unnamedFunction(100, 200), unnamedObject.add(300,400));

console.log(m.add(100, 200), m.sub(300,400));

//3.
// 특정 이름을 사용해서 구조 분해가 가능하다.
import {sub} from './ex08.04.mjs'
console.log(sub(300,400));

//4.
import math, {add} from './ex08.05.mjs'
console.log(add(100, 200), math.sub(300,400));