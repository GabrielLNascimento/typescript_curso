// declarar arrays, valido para union types

// let numeros: number[] = [10, 20, 30];
// let numeros: Array<number> = [10, 20, 30]
// let numeros: (number | string)[] = [10, 20, 30, "ola"]

let numeros: number[] = [10, 20, 30];

numeros.push(40);
numeros.unshift(5);

numeros.pop();
numeros.shift();

console.log(numeros);


// ler apenas os valores do array

let numeros_read: ReadonlyArray<number> = [10, 20, 30]

// numeros_read.push(40) -> erro

console.log(numeros_read)