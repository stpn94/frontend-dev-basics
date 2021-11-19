// URL 문자열 다루기

var url = "http://www.mysite.com/user?name=둘리";

// 1. escape : URL을 모두 encoding
var url2 = escape(url);
console.log(url2);

// 2. encodeURI : parameter 부분만 encoding
var url3 = encodeURI(url);
console.log(url3);

// 3. encodeURIComponent : 값만 엔코딩해야하는 경우
var url4 = encodeURIComponent(url);
console.log(url4);


// http://mysite.com/user?no=10&name=김정인&email=molly723@naver.com

var toQueryString = function(o) {
    var qs = [];
    for(prop in o) {
        qs.push(prop + "=" + encodeURIComponent(o[prop]));
    }
    return qs.join("&");
}

var url = "http://mysite.com/user";
var param = {
    no: 10,
    name: '김정인',
    email: 'molly723@naver.com'    
}

var url5 = url + "?" + toQueryString(param);
console.log(url5);