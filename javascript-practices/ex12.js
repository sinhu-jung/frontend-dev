// Array 확장 : List 메소드 추가(prototype 확장)

Array.prototype.insert = function(index, values){
    if(values instanceof Array){
        //for(var i = 0; i < values.length; i++){
        //    this.splice(index++, 0, values[i])
        //}
        
        var _this = this;
        values.forEach(function(e){
            _this.splice(index++, 0, e)
        })
    } else {
        this.splice(index, 0, values);
    }
}

Array.prototype.remove = function(index){
    this.splice(index, 1);
}

// 리스트로 사용하기 
var a = [1, 2, 4];
console.log(a);
a.insert(2, 3); 
console.log(a);

a.remove(3);
console.log(a);

a.insert(2, ['a', 'b', 'c']); //기대[1, 2, 'a', 'b', 'c', '3']
console.log(a);               //결과[1, 2, ['a', 'b', 'c'], '3']

var f = function(param) {
    console.log(this + ":" + param);
}

o = { name:"me" };
// call 은 파라미터 를 넣어서 보낼 수 있고 apply는 그게 안되고 그냥 객체만 바인딩해서 보냄 
f.call(o, o.name);
f.apply(o);