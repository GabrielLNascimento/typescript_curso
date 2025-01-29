// unknown -> any mais seguro, ele mostra o erro para voce
// aceita qualquer tipo de valor
// força validação antes do uso

let num: unknown;
num = "ola"
num = true
num = {aaa: "bbb"}
num = [1, 2, 3]
num = 10

// console.log(num + 30) -> num é do tipo unknown

// realizando a verificação
if (typeof num === "number") console.log(num + 30)