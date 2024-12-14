"use strict";
class Pessoa {
    nome;
    infoPai() {
        console.log(this.nome);
    }
}
class Cidadao extends Pessoa {
    idade;
    infoFilho() {
        super.infoPai();
    }
}
