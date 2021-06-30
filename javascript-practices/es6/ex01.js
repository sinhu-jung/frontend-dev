/**
 *  1. let: Block Scope의 변수 정의
 */

//let의 블록 범위
try {
    if(true){
        var i = 10;
        let j = 20;
    }   
    console.log(i);
    console.log(j);
} catch (e) {
    console.error("error" + e);
}

// var 의 함수범위 
try {
    var f = function() {
        var m = 20;
    }
    f();
    console.log(m);
} catch (e) {
    console.error("error" + e);
}