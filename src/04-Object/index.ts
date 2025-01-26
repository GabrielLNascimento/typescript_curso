// criando um objeto normal
// recebe uma tipagem automaticamente
const obj1 = {
    chave1: 'valor 1',
    chave2: 'valor 2',
};
obj1.chave1 = 'valor x';
// obj1.chave3 = 'teste'; -> nao posso adicionar uma nova chave dessa forma



const obj2: {} = {
    chave1: "valor 1",
    chave2: 'valor 2'
}
// obj2.chave1 = "teste"; -> essa chave nao está definida no tipo 



const obj3: {
    readonly chave1: string;
    chave2: string;
    // qualquer chave com um valor qualquer
    [key: string]: unknown
} = {
    chave1: "valor 1",
    chave2: "valor 2"
}

// obj3.chave1 = "teste" -> nao posso alterar
obj3.chave3 = "valor novo" // posso fazer assim