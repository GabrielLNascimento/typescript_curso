// array somente de strings[]
let frutas:string[] = ["banana", "melancia", "uva"]

// let frutas:string[] = ["banana", "melancia", "uva", 10, true, null, undefined] 
// não é possível, pois o array só pode conter strings

frutas.push("maçã")

console.log(frutas)


let valores = [10, 200, 2024]
valores.push(99)

console.log(valores)


// definindo mais de um tipo -> usa o "|"
let vteste: string | number;

vteste = "Gabriel"
vteste = 17
// vteste = true -> erro


let nteste: any;

nteste = "Gabriel"
nteste = 17
nteste = true
// type any -> pode ser qualquer coisa, mas não é recomendado, pois não temos controle