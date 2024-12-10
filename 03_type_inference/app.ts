let nome = "Gabriel";
let valor = 17; // int, float, bin, hex
valor = 10.5

// automaticamente o javascript vai
// -criar uma variável com o nome "nome"
// -atribuir o valor "Gabriel" com o tipo "string"

// nome = 17 -> erro, o tipo dela é string e nao number

console.log(typeof nome, nome);
console.log(typeof valor, valor);


// variavel sem valor
// let num; -> metodo errado de declarar
let num: number // todo conteudo que vir dentro do "num" tem que ser number

num = 66
// num = "teste" -> erro

console.log(num)