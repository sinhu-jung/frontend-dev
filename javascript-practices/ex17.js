// function 객체 메소드 call

console.log("============= global =============")
var email = "dooly@gamil.com"
global.name = "둘리"; // var name = "둘리";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
console.log(name, global.name);
console.log(email, global.email);


console.log("============= 객체 메소드 apply =============");
var f1 = function(){
    console.log(this);
}

f1();

// this 바꾸기
var o = {
    name : "마이콜"
}

f1.apply(o);

console.log("============= 객체 메소드 call =============");

var f2 = function(s){
    console.log(s + " " + this.name);
}

f2.call(o, "hi");
