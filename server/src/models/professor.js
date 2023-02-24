import { openDb } from "../infra/configDB.js";

class CreateTableProfessor{
    static professor(){
        const db = openDb();
        db.then(db => {
            db.exec('CREATE TABLE IF NOT EXISTS professor(id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20), matricula VARCHAR(20), telefone VARCHAR(20), endereco VARCHAR(70))')
        })
    }
}

export default CreateTableProfessor;