"use strict";
let dados = {
    nome: "Gabriel",
    idade: 17,
    status: true,
    ola: () => console.log("oi pessoal"),
    info: (p) => console.log(p)
};
console.log(typeof dados, dados);
dados.ola();
dados.info("Teste");
