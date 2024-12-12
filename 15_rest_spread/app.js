"use strict";
function soma(...nums) {
    let res = 0;
    nums.forEach((el) => {
        res += el;
    });
    return res;
}
console.log(soma(10, 23, 11));
function convert(...str) {
    return str.map((el) => Number(el));
}
console.log(convert("10", "20", "30"));
function concat(...str) {
    return str.join(" ");
}
console.log(concat("ola", "tudo", "bem", "com", "voce?"));
