import { openDb } from "../infra/configDB.js";

class CreateTableTurma{
    static turma(){
        const db = openDb();
        db.then(db => {
            db.exec('CREATE TABLE IF NOT EXISTS turma(id INTEGER PRIMARY KEY AUTOINCREMENT, alunos INTEGER, turno VARCHAR(10), professor VARCHAR(50))')
        })
    }
}

export default CreateTableTurma;