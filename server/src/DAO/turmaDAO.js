import { openDb } from "../infra/configDB.js";
const db = openDb();

export default class TurmaDAO{
    static listarTurma(req, res){
        const query = 'SELECT * FROM turma';
        db.then(db => {
            db.all(query).then(turma => res.json(turma));
        })
    }

    static listarTurmaId(req, res){
        const query = 'SELECT * FROM turma WHERE id = ?'
        const id = req.params.id;
        db.then(db => {
            db.get(query, [id]).then(turma => res.json(turma));
        })
    }

    static postarTurma(req, res){
        const query = 'INSERT INTO turma(alunos, turno, professor) VALUES(?, ?, ?)'
        const turma = req.body;
        db.then(db => {
            db.run(query, [turma.alunos, turma.turno, turma.professor])
        })
        res.json({
            "statusCode": "200"
        })
    }

    static editarTurma(req, res){
        const query = 'UPDATE turma SET alunos = ?, turno = ?, professor = ? WHERE id = ?';
        const turma = req.body;
        db.then(db => {
            db.run(query, [turma.alunos, turma.turno, turma.professor, turma.id])
        })
        res.json({
            "statusCode": "200"
        })
    }

    static deletarTurma(req, res){
        const query = 'DELETE FROM turma WHERE id = ?';
        const id = req.params.id;
        db.then(db => {
            db.run(query, [id])
        })
        res.json({
            "statusCode": "200"
        })
    }
}