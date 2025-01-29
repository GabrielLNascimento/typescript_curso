// &
// combinar varios tipos no mesmo, obrigado a utilizar os tipos obrigatorios

type TemNome = { nome: string };
type TemIdade = { idade: number };

// type Pessoa = TemNome | TemIdade; -> posso colocar apenas um dos dois
type Pessoa = TemNome & TemIdade;

const p1: Pessoa = {
    nome: "Gabriel",
    idade: 17
}


export { Pessoa };
