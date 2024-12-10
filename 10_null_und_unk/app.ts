// NULL - UNDEFINED - UNKNOWN
// NULO - DESCONHECIDO - INDEFINIDO

// Null -> valor nulo, é um tipo de valor vazio

let nome: string | null;
nome = null;
console.log(nome);

let nome2;
console.log(nome2);

let nome3:unknown = 10; 
// let num:number = nome3; -> erro, tipo diferente
// so pode ser atribuido quando o tipo for unknown ou any
console.log(nome3);