// let valores: (number | string)[] = [10, 20, 30, "teste"]
// let pessoa: readonly[string, number] = ["Gabriel", 17] -> somente leitura
let pessoa: [string, number] = ["Gabriel", 17]

pessoa[1] = 18

pessoa.push(10)

console.log(pessoa)
// console.log(pessoa[2]) -> erro