import { openDb } from "../infra/configDB.js";

class CreateTableAluno{
    static aluno(){
        const db = openDb();
        db.then( db => {
            db.exec('CREATE TABLE IF NOT EXISTS aluno(id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20), turma INTEGER, media REAL, telefone VARCHAR(20))')
        })
    }
}

export default CreateTableAluno;