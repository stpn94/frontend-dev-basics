/**
 * unamed export (default)\
 * 
 * 이름없는 객체 1개를 exports하는 것이다.
 * module.exports (CommonJS)
 * 
 * */

export default function(a,b){
    return a+b;
}

// 오류 : 이름없이 export하기 때문에 하나만 이름없이 export할 수 있다.

// export default function(a,b){
//     return a-b;
//   }