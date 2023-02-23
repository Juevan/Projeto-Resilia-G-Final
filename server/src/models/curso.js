import { openDb } from "../infra/configDB.js";

class CreateTableCurso{
    static curso(){
        const db = openDb();
        db.then( db => {
            db.exec('CREATE TABLE IF NOT EXISTS curso(id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(50), modulos INTEGER, qtdDeTurmas INTEGER, cargaHoraria VARCHAR(10), descricao TEXT)')
        })
    }
}

export default CreateTableCurso;