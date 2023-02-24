import { openDb } from "../infra/configDB.js";
const db = openDb();

export default class ProfessorDAO{
    static listarProfessor(req, res){
        const query = 'SELECT * FROM professor';
        db.then(db => {
            db.all(query).then(prof => res.json(prof))
        })
    }

    static listarProfessorId(req, res){
        const query = 'SELECT * FROM professor WHERE id = ?';
        const id = req.params.id;
        db.then(db => {
            db.get(query, [id]).then(prof => res.json(prof))
        })
    }

    static postarProfessor(req, res){
        const query = 'INSERT INTO professor(nome, matricula, telefone, endereco) VALUES(?, ?, ?, ?)';
        const prof = req.body;
        db.then(db => {
            db.run(query, [prof.nome, prof.matricula, prof.telefone, prof.endereco])
        })
        res.json({
            "statusCode": "200"
        })
    }

    static editarProfessor(req, res){
        const query = 'UPDATE professor SET nome = ?, matricula = ?, telefone = ?, endereco = ? WHERE id = ?';
        const prof = req.body;
        db.then(db => {
            db.run(query, [prof.nome, prof.matricula, prof.telefone, prof.endereco, prof.id])
        })
        res.json({
            "statusCode": "200"
        })
    }

    static deletarProfessor(req, res){
        const query = 'DELETE FROM professor WHERE id = ?';
        const id = req.params.id;
        db.then(db => {
            db.run(query, [id])
        })
        res.json({
            "statusCode": "200"
        })
    }
}