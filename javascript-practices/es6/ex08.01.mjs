/**
 * unnamed export(default)
 * 
 * module.exports(CommonJS) 유사
 * 
 */

 export default function (a, b) {
    return a + b;
 } 

// 오류: 이름 없이 export 하기 때문에 두개 이상 이름 없이 export 할 수 없다.
//  export default function (a, b) {
//     return a - b;
//  } 