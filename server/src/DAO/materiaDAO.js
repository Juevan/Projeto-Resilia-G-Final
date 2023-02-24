import { openDb } from "../infra/configDB.js";
const db = openDb();

export default class MateriaDAO{
    static listarMateria(req, res){
        const query = 'SELECT * FROM materia';
        db.then(db => {
            db.all(query).then(materia => res.json(materia))
        })
    }

    static listarMateriaId(req, res){
        const query = 'SELECT * FROM materia WHERE id = ?';
        const id = req.params.id;
        db.then(db => {
            db.get(query, [id]).then(materia => res.json(materia));
        })
    }

    static postarMateria(req, res){
        const query = 'INSERT INTO materia(nome, cargaHoraria, tempos) VALUES(?, ?, ?)'
        const materia = req.body;
        db.then(db => {
            db.run(query, [materia.nome, materia.cargaHoraria, materia.tempos])
        })
        res.json({
            "statusCode": "200"
        })
    }

    static editarMateria(req, res){
        const query = 'UPDATE materia SET nome = ?, cargaHoraria = ?, tempos = ? WHERE id = ?';
        const materia = req.body;
        db.then(db =>{
            db.run(query, [materia.nome, materia.cargaHoraria, materia.tempos, materia.id])
        })
        res.json({
            "statusCode": "200"
        })

    }

    static deletarMateria(req, res){
        const query = 'DELETE FROM materia WHERE id = ?';
        const id = req.params.id;
        db.then(db => {
            db.run(query, [id])
        })
        res.json({
            "statusCode": "200"
        })
    }
}