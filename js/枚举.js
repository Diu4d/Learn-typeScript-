"use strict";
var gender;
(function (gender) {
    gender[gender["boy"] = 1] = "boy";
    gender[gender["girl"] = 2] = "girl";
    gender[gender["unknow"] = 3] = "unknow";
})(gender || (gender = {}));
console.log(gender.boy);
console.log(gender.girl);
console.log(gender.unknow);
var userx = gender.boy;
console.log(userx);
