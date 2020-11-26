// // Create code for next conditions
// let sum = function () {
//   /* put your code here */
// };
// let s = sum();
// alert(s()); // 0
// alert(s(1)()); // 1
// alert(s(1)(2)()); //3
// alert(s(3)(4)(5)()); // 12

let sum = function (param = 0) {
    return function s (param2) {
        if (typeof param2 === 'undefined') {
            return param;

        } else {
            return s;
        }
       }
     };

let s = sum();
alert(s()); // 0
alert(s(1)()); // 1
alert(s(1)(2)()); //3
alert(s(3)(4)(5)()); // 12