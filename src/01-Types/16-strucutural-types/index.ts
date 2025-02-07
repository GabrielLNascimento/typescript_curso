// criar uma verificação de usuario do banco de dados com o valor que veio do form
// retorna true ou false se estiver logado ou nao

// criando o tipo da funcao que vai verificar
type VerifyUser = (user: User, formUser: User) => boolean;

// criando tipo usuario
type User = { username: string; password: number };

// funcao que vai verificar
const verifyUser: VerifyUser = (user, formUser) => {
    return user.username === formUser.username && user.password === formUser.password
}

const dbUser = {username: "Gabriel", password: 123456}
const formUser = {username: "Gabriel", password: 123456}
const logged = verifyUser(dbUser, formUser)
console.log(logged)
