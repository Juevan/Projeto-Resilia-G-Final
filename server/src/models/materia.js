import { openDb } from "../infra/configDB.js";

class CreateTableMateria{
    static materia(){
        const db = openDb();
        db.then(db => {
            db.exec('CREATE TABLE IF NOT EXISTS materia(id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(30), cargaHoraria VARCHAR(10), tempos INTEGER)')
        })
    }
}

export default CreateTableMateria;