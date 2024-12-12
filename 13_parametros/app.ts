// valor padrão
function CreateUser(name: string = "Sem nome", age: number = 0):void {
    let people = {
        name,
        age
    }

    console.log(people)
}
// CreateUser("Gabriel", 17)
// CreateUser()
// CreateUser(undefined, undefined)
// CreateUser(undefined)


// valor opcional
function EnderecoCasa(rua: string, num: number, complemento?: string): void {
    let end_casa = {
        rua,
        num,
        complemento: complemento ? complemento : "Sem complemento"
    }
    console.log(end_casa)
}
// EnderecoCasa("Rua dos caçadores", 3250, "casa verde")
// EnderecoCasa("Rua dos caçadores", 3250)
// EnderecoCasa("Rua dos caçadores", 3250, undefined)



// ------------------------------------------------------- //

// função que cria um endereco de email
function CreateEmail(user: string, dominio: string = "gmail.com"): string {
    return `${user}@${dominio}`
}
console.log(CreateEmail("gabriel_liz", "outlook.com"))
console.log(CreateEmail("teste1"))


// funcao que desenvolvau um desconto com base no cupom e no desconto
function calcularDesconto(valor: number, desc: number, cupom?: string): number {
    let valor_desconto: number = valor - (valor * desc)
    let valor_com_cupom: number;
    
    if (cupom) {
        valor_com_cupom = valor_desconto - (valor_desconto * 0.1)
        return valor_com_cupom
    }

    return valor_desconto
}
console.log(calcularDesconto(20, 0.8))
console.log(calcularDesconto(20, 0.5, "2025K"))

    