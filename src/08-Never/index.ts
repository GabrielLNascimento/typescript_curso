// never -> representa um valor que NUNCA ocorre
// como por exemplo, em funções que lança um erro


// posso utilizar void
// function criaErro(): void {
//     throw new Error("Erro qualquer")
// }

function criaErro(): never {
    throw new Error("Erro qualquer")
}

criaErro()