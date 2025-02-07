/*
** tipos literais

- se eu crio uma variavel e colocar o valor 10, ela automaticamente recebe o tipo "Number"

- quando eu crio uma variavel const, o nome da variavel recebe o tipo sendo o proprio valor
    Nao posso alterar o valor

posso colocar valores no tipo
e so posso receber valores daquele tipo

dentro dos valores posso escrever "as const" -> aquela variavel/obj/array vai receber aquele valor como padrão

No parametro de uma função posso colocar diferentes tipos (valores) usando pipe |

*/

let num1 = 10;
// num1 = "oi" -> erro de tipo

const num2 = 10; // recebe 10 como tipo
let num3 = 10 as const; // recebe 10 e transforma a variavel em uma const
// nao posso alterar o valor

const person = {
    // name: "Gabriel",
    name: "Gabriel" as const, // valor que nao pode ser alterado (constante)
    age: 17
}

// só pode receber valores que são do tipo "azul" "vermelho" ou "verde"
function escolherOpcao(cor: "azul" | "vermelho" | "verde") : string {
    return cor
}
// console.log(escolherOpcao("laranja"))
console.log(escolherOpcao("azul"))