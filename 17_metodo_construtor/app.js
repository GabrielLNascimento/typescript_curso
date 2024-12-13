"use strict";
class Pessoa {
    nome;
    idade;
    vivo;
    constructor(n, i, v) {
        this.nome = n;
        this.idade = i;
        this.vivo = v;
        console.log("Pessoa criada");
    }
}
const p1 = new Pessoa("Gabriel", 17, true);
