// exports 뒤에 꼭 이름을 사용해서 export 해야 한다.
// named export
exports.PI = 3.14;
exports.min = function(){
    let min = Number.MAX_SAFE_INTEGER;
    Array.from(arguments).forEach(e => min = e < min ? e : min);
    return min;
}
exports.max = function(){
    let max = Number.MIN_SAFE_INTEGER;
    Array.from(arguments).forEach(e => max = e > max ? e : max);
    return max;
}

/**
 * var require = function(m) {
 *  module.exports ={};
 *  exports = module.exports;
 *  eval("
 *          .....
 *       ")
 *  return module.exports;
 * }
 * 
 * 1. module.exports 가 객체를 만듬
 * 2. exports 가 module.exports가 만든 객체를 가리킴
 * 3. module.exports 는 function 객체를 가리킴
 * 4. function 객체를 return
 */