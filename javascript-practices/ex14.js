// URL 문자열 다루기

var url = "http://www.mysite.com/user?name=둘리&no=10";

// 1. escape : URL을 전부 encoding, 많이 사용하지 않음, deprecated(사용못하게 권유하고 있음)
var url2 = escape(url);
console.log(url2);

// 2. encodeURI : parameter 부분만 encoding, 
var url3 = encodeURI(url);
console.log(url3);

// 3. encodeURIComponent : 값만 엔코딩 해야 하는 경우
var url4 = encodeURIComponent(url); // 안 좋은 사용예
console.log(url4);

// http://mysite.com/user?no=10&name=정신후&email=tlsgn26@gmail.com

var toQueryString = function(o){
    var qs = [];
    for(prop in o){
        qs.push(prop + "=" + encodeURIComponent(o[prop]));
    }
    return qs.join("&");
}

var url = "http://mysite.com/user" 
var param =  {
    no: 10 ,
    name: '정신후',
    email: 'tlsgn26@gamil.com'

}
var url5 = url + "?" + toQueryString(param);
console.log(url5);