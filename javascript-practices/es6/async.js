const req01 = function(url, callback){ //req01: db.query, $ajax 와 유사하다.
    console.log('req01 [' + url + ']');
    setTimeout(function(){
        const resp = {
            data: "Hello World"
        }

        callback(resp);
    }, 1000);
}

const req02 = function (url) { //req01: db.query, $ajax promise 객체를 리턴하는 프라미즈화(promify) 된 함수이다.
    console.log('req02 [' + url + ']');
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            const resp = {
                data: "Hello World"
            }
    
            resolve(resp);
            //error
            // reject('fails: )
        }, 1000);
    });
}

const fetch = async function(url) {// ex) model.findAll, model insert ...
    try{
        const response = await req02(url);
        console.log(response);
        return response;
    } catch (err) {
        console.error(err);
    }
}

// req01("http://www.kickscar.com/api", function(response){
//     console.log(response);
// });

// req02("http://www.kickscar.com/api")
// .then(function(response){
//     console.log(response);
// }).catch(function(err){
//     console.error(err);
// });

// const f = async function() {
//     const response = await fetch("http://www.kickscar.com/api");
//     console.log(response);
// }
// f();

fetch();

console.log("do something");