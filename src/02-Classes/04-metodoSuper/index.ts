// utilizar o "super" vai chamar os atributos/metodos da classe pai

export class Pessoa {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string
    ) {}

    getNomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`
    }
}

export class Funcionario extends Pessoa {
    constructor(
        // nao preciso escrever "public", pq estou apenas passando valores
        nome: string,
        sobrenome: string,

        // aqui estou criando um atributo novo, q seria o salario
        public readonly salario: number
    ) {
        super(nome, sobrenome)
        // preciso criar esse atributo na classe funcionario
        // this.salario = salario
    }

    getNomeFuncionario(): string {
        // pegando valores da classe pai 
        return super.getNomeCompleto()
    }
}

const func1 = new Funcionario("Gabriel", "Liz", 1300)
const func2 = new Funcionario("Ana", "Barth", 2700)
console.log(func1)
console.log(func2)