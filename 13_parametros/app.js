"use strict";
function CreateUser(name = "Sem nome", age = 0) {
    let people = {
        name,
        age
    };
    console.log(people);
}
function EnderecoCasa(rua, num, complemento) {
    let end_casa = {
        rua,
        num,
        complemento: complemento ? complemento : "Sem complemento"
    };
    console.log(end_casa);
}
function CreateEmail(user, dominio = "gmail.com") {
    return `${user}@${dominio}`;
}
console.log(CreateEmail("gabriel_liz", "outlook.com"));
console.log(CreateEmail("teste1"));
function calcularDesconto(valor, desc, cupom) {
    let valor_desconto = valor - (valor * desc);
    let valor_com_cupom;
    if (cupom) {
        valor_com_cupom = valor_desconto - (valor_desconto * 0.1);
        return valor_com_cupom;
    }
    return valor_desconto;
}
console.log(calcularDesconto(20, 0.8));
console.log(calcularDesconto(20, 0.5, "2025K"));
