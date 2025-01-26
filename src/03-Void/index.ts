// void -> nao retorna nada, sem utilizar a palavra-chave "return"
// mt importante sempre colocar o tipo do return

function mostrarMsg(txt: string): void {
    console.log(txt)
}

mostrarMsg("Ola pessoal")


// dentro de objetos
const pessoa = {
    nome: "Gabriel",
    sobrenome: "Liz",
    exibirNome(): void {
        console.log(this.nome + " " + this.sobrenome)
    }
}
pessoa.exibirNome()