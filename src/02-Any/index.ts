// any: representa falta de tip (qualquer coisa)

// nao queremos utilizar o any como tipo
// function message(txt) {
//     return txt
// }
// parametro txt é any

// parametro pode ser qualquer coisa -> number, string, array, obj, etc...
function message(txt: any) {
    return txt
}

console.log(message("oi"))
console.log(message(123))
console.log(message([1, 2, 3]))