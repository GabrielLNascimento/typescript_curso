// padrão de projeto singleton -> criar uma unica instância de uma classe
// posso colocar o "private" antes do constructor

export class Database {
    // atributo privado da classe
    // vai gerenciar se existe um database criado ou nao
    // vai armazenar a unica instância
    private static database: Database;

    // O construtor é privado (private), o que significa que ninguém fora da classe pode criar um objeto Database diretamente usando new Database(...).
    private constructor(
        private host: string,
        private user: string,
        private password: string
    ) {}

    connect(): void {
        console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
    }

    static getDatabase(host: string, user: string, password: string): Database {
        if (Database.database) {
            console.log("ja existe um database criado");
            return Database.database;
        }
        console.log("Criando um database novo!")
        return Database.database = new Database(host, user, password);
    }
}

const db1 = Database.getDatabase("localhost", "root", "123456");
db1.connect();

const db2 = Database.getDatabase("aaaa", "aaa", "11111");
db2.connect();
