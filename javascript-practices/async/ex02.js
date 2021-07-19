const ex02 = function(param) {
    return new Promise(function(resolve, reject){
        // 비동기 코드
        setTimeout(function(){
            if(param == 'param-data') {
                resolve('ok');
            } else {
                reject(new Error('fail'));
            }
        }, 1000);
    });
}
module.exports = ex02;
if(require.main == module){
    // test01 
    ex02("param-data").then(function(res){
        console.log(res);
    })

    // test02
    ex02("param-error").catch(function(err){
        console.error(err.message);
    });
    console.log("waits...");
} else {
    module.exports = ex02;
}