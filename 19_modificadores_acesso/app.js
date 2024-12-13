"use strict";
class Conta {
    nome;
    saldo;
    constructor(n, s) {
        this.nome = n;
        this.saldo = s;
    }
    mostrarSaldo() {
        console.log(`Seu saldo é de: ${this.saldo}`);
    }
    depositar(valor) {
        if (valor > 0 && valor < 1000) {
            this.saldo += valor;
            console.log(`R$: ${valor},00 foi depositado`);
        }
        else {
            console.log("Valor inválido:", valor);
        }
    }
    sacar(valor) {
        if (valor < this.saldo) {
            this.saldo -= valor;
            console.log(`R$: ${valor},00 foi sacado!`);
        }
        else {
            console.log("valor inválido:", valor);
        }
    }
}
const c1 = new Conta("Gabriel", 10);
c1.mostrarSaldo();
c1.depositar(1100);
c1.depositar(450);
c1.mostrarSaldo();
c1.sacar(800);
c1.sacar(100);
c1.mostrarSaldo();
console.log(" ");
class Carro {
    combustivel;
    constructor() {
        this.combustivel = 0;
        console.log("A cada 1 Km, você gasta 2 de gasolina");
    }
    abastecer(valor) {
        if (valor > 0 && valor < 100) {
            this.combustivel += valor;
        }
        else {
            console.log("Numero invalido");
        }
    }
    dirigir(kilometragem) {
        if (this.combustivel == 0) {
            console.log("Voce nao tem combustivel");
            return;
        }
        if (kilometragem < 0) {
            console.log("Kilometragem errada!");
            return;
        }
        let gasolina_gasta = kilometragem * 2;
        if (gasolina_gasta > this.combustivel) {
            this.combustivel = 0;
            console.log("Acabou o combustivel no meio do caminho");
        }
        else {
            this.combustivel -= gasolina_gasta;
            console.log("Voce chegou ao seu destino, com", this.combustivel, "de gasolina");
        }
    }
}
const car1 = new Carro();
car1.dirigir(10);
car1.abastecer(800);
car1.abastecer(50);
car1.dirigir(120);
car1.abastecer(50);
car1.dirigir(10);
