"use strict";
class Estudante {
    nome;
    serie;
    constructor(n, s) {
        this.nome = n;
        this.serie = s;
    }
    info() {
        console.log("-=-=-=-=-=-=-");
        console.log(`Aluno: ${this.nome}`);
        console.log(`Serie: ${this.serie}º ano`);
        console.log(" ");
    }
    passar_ano() {
        this.serie += 1;
    }
    reprovar_ano() {
        this.serie -= 1;
    }
}
const aluno1 = new Estudante("Gabriel", 5);
aluno1.info();
aluno1.passar_ano();
aluno1.passar_ano();
aluno1.passar_ano();
aluno1.reprovar_ano();
aluno1.info();
class Retangulo {
    altura;
    largura;
    constructor(a, l) {
        this.altura = a;
        this.largura = l;
    }
    calcularArea() {
        let area = this.altura * this.largura;
        console.log(`Area do retangulo: ${area}`);
    }
    calcularPerimetro() {
        let perimetro = 2 * (this.altura + this.largura);
        console.log(`Perimetro: ${perimetro}`);
    }
}
const r1 = new Retangulo(10, 25);
r1.calcularArea();
r1.calcularPerimetro();
console.log(" ");
class Somar {
    valores;
    constructor(...nums) {
        this.valores = nums;
    }
    somarTudo() {
        let soma = 0;
        this.valores.forEach((el) => {
            soma += el;
        });
        console.log("A soma de tudo:", soma);
    }
}
const n1 = new Somar(10, 2, 3, 4, 5);
n1.somarTudo();
