// vamos utilizar enum quando queremos enumerar algo
// varias opções
// enum é um tipo e valor

/*
    enum <Nome> { ... codigo ... }
*/

// funciona com base de chaves e valores (indices)

/*
    {
        chave1,
        chave2,
        chave3
    }
*/

// chave1 = 0; chave2 = 1; chave3 = 2; etc...

/*
Formas de acessar
<Nome>.chave1 -> 0
<Nome>[0] -> chave1
*/

// posso atribuir outros valores
/*
    {
        chave1 = 11,
        chave2 = 22,
        chave3 = 33
    }

    <Nome>[11] -> chave1
*/

// posso criar funcoes que recebe parametros do tipo <Nome do enum> que eu criei
// todos os valores passados no parametro tem que ser do tipo Enum q eu criei


enum Cores1 {
    vermelho,
    azul,
    verde
}
console.log(Cores1.vermelho) // 0
console.log(Cores1[1]) // azul

enum Cores2 {
    vermelho = 10,
    azul = 20,
    verde = 30
}
console.log(Cores2.vermelho) // 10
console.log(Cores2[20]) // azul

enum Cores3 {
    vermelho = "RED",
    azul = "BLUE",
    verde = "GREEN"
}
function paint(cor: Cores3): void {
    console.log("Voce está pintando com a cor " + cor)
}
paint(Cores3.vermelho)
// paint(Cores3.laranja)