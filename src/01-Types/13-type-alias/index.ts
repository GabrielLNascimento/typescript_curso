// type-alias -> cria um tipo para as variaveis
/*
    utilizo a palavra chave "type" + <Nome>
    isso vai ser removido na compilação
    e nao é uma variavel e sim um tipo

    quando eu for criar uma variavel, eu vou colocar o tipo que eu criei

    caso eu crie um objeto como tipo, eu preciso colocar todas as chaves q eu coloquei no tipo
*/

type Idade = number;
type Pessoa = {
    nome: string;
    idade: Idade;
    maiorIdade: boolean;
    corPreferida?: string;
};
type CorPreferida = 'vermelho' | 'verde' | 'azul';

const p1: Pessoa = {
    nome: 'Gabriel',
    idade: 17,
    maiorIdade: false,
};

function setCor(pessoa: Pessoa, cor: CorPreferida): Pessoa {
    return { ...pessoa, corPreferida: cor };
}

console.log(setCor(p1, 'verde'));
console.log(p1);

// PRATICANDO

// crie um tipo cpf
type CPF = string;
const cpf_user: CPF = '123.456.789-10';

// -----------------------------------------

type Person = {
    nome: string;
    idade: number;
};
type Funcionario = {
    cargo: string;
    salario: number;
};

type Empregado = Person & Funcionario

const user1: Empregado = {
    nome: "Gabriel",
    idade: 17,
    cargo: "Policial",
    salario: 1300
}

// -------------------------------------

type listNames = string[]
const names: listNames = []

names.push("Gabriel")
names.push("Ana")
names.push("Zanela")