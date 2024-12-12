"use strict";
function logar(name, pass) {
    console.log(`Usuário: ${name}`);
    console.log(`Senha: ${pass}`);
}
logar("Gabriel", "2310");
function soma(n1, n2) {
    const res = n1 + n2;
    return res;
}
console.log(soma(10, 2));
console.log(soma(10.5, 2.3));
function soma2(s1, s2) {
    let n1 = Number(s1);
    let n2 = Number(s2);
    let res = n1 + n2;
    return res;
}
console.log(soma2("10", "7"));
let numeros = [10, 20, 30, 40, 50];
function soma_array(nums) {
    let soma = 0;
    nums.map((e) => {
        soma += e;
    });
    return soma;
}
console.log(soma_array(numeros));
function convert_str_num(nums) {
    let num_str = [];
    for (let n of nums) {
        let n_str = String(n);
        num_str.push(n_str);
    }
    return num_str;
}
console.log(convert_str_num(numeros));
function verify_numbers(nums) {
    for (let n of nums) {
        if (n % 2 == 0) {
            return true;
        }
    }
    return false;
}
console.log(verify_numbers(numeros));
