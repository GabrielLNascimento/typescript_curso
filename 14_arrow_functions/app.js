"use strict";
function soma1(n1, n2) {
    return n1 + n2;
}
const soma2 = (n1, n2) => {
    return n1 + n2;
};
const elevar_2 = (num) => num * num;
console.log(elevar_2(6));
const data_atual = () => {
    const data = new Date();
    return data.toString();
};
console.log(data_atual());
const elevar_3 = (nums) => {
    return nums.map((e) => e ** 3);
};
console.log(elevar_3([1, 2, 3, 4, 5]));
const convert_number_to_string = (val) => {
    return String(val);
};
console.log(convert_number_to_string(10));
