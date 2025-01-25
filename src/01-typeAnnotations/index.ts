let nome1: string = 'Gabriel';
let nome2 = 'Gabriel';
// nao preciso escrever o tipo, por que o typescript ja infere o tipo na variavel desse jeito

// alguns tipos
let idade: number = 30; // -30 0.5 0
let maiorIdade: boolean = true;
let simbolo: symbol = Symbol('qualquer-simbolo');

// arrays
// coloco : Array<>
// preciso passar argumentos dentro dos <>
// que seria o tipo do array
let listNumbers1: Array<number> = [1, 2, 3, 4];
let listStrings1: Array<string> = ['Gabriel', 'Ana'];

// outra forma de fazer:
let listNumbers2: number[] = [1, 2, 3, 4];
let listStrings2: string[] = ['Gabriel', 'Ana'];

// Objetos
// ? -> opcional
let people: { nome: string; idade: number; vivo?: boolean } = {
    nome: 'Gabriel',
    idade: 17,
    // vivo: true
};
console.log(people.nome);

// funções
// colocar um tipo para cada parametro
// posso colocar o que ela retorna após os parametros
// void -> nao retorna nada
function soma(x: number, y: number): number {
    return x + y;
}
// variavel automaticamente, recebe o tipo
const result = soma(2, 2)


// (x: number, y: number) -> tipagem da arrow function
// => number -> retorna number
// (x, y) => x + y -> arrow function em si
const soma2: (x: number, y: number) => number = (x, y) => x + y