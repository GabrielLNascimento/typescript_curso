class Estudante {
    nome: string;
    serie: number;

    constructor(n: string, s: number) {
        this.nome = n;
        this.serie = s;
    }

    info(): void {
        console.log("-=-=-=-=-=-=-")
        console.log(`Aluno: ${this.nome}`)
        console.log(`Serie: ${this.serie}º ano`)
        console.log(" ")
    }

    passar_ano(): void {
        this.serie += 1
    }

    reprovar_ano(): void {
        this.serie -= 1
    }
}

const aluno1 = new Estudante("Gabriel", 5)

aluno1.info()

aluno1.passar_ano()
aluno1.passar_ano()
aluno1.passar_ano()

aluno1.reprovar_ano()

aluno1.info()


// -------------------------------------------

//  Perimetro do retangulo
class Retangulo {
    altura: number;
    largura: number;

    constructor(a: number, l: number) {
        this.altura = a;
        this.largura = l
    }

    calcularArea() {
        let area: number = this.altura * this.largura
        console.log(`Area do retangulo: ${area}`)
    }

    calcularPerimetro() {
        let perimetro: number = 2 * (this.altura + this.largura)
        console.log(`Perimetro: ${perimetro}`)
    }
}

const r1 = new Retangulo(10, 25)

r1.calcularArea()
r1.calcularPerimetro()
console.log(" ")


// ---------------------------------------------

// somar quantos valores puder

class Somar {
    valores: number[];

    constructor(...nums: number[]) {
        this.valores = nums
    }

    somarTudo() {
        let soma:number = 0
        this.valores.forEach((el: number) => {
            soma += el
        })
        console.log("A soma de tudo:", soma)
    }
}

const n1 = new Somar(10, 2, 3, 4, 5)
n1.somarTudo()