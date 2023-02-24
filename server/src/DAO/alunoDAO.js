import { openDb } from "../infra/configDB.js";
const db = openDb();

export default class AlunoDAO{
    static listarAluno(req, res){
        const query = 'SELECT * FROM aluno';
        db.then(db => {
            db.all(query).then(aluno => res.json(aluno));
        })
    }

    static listarAlunoId(req, res){
        const query = 'SELECT * FROM aluno WHERE id = ?';
        const id = req.params.id;
        db.then(db => {
            db.get(query, [id]).then(alunoId => res.json(alunoId));
        })
    }

    static postarAluno(req, res){
        const query = 'INSERT INTO aluno(nome, turma, media, telefone) VALUES(?, ?, ?, ?)';
        const aluno = req.body;
        db.then(db => {
            db.run(query, [aluno.nome, aluno.turma, aluno.media, aluno.telefone])
        })
        res.json({
            "statusCode": "200"
        })
    }

    static editarAluno(req, res){
        const query = 'UPDATE aluno SET nome = ?, turma = ?, media = ?, telefone = ? WHERE id = ?'
        const aluno = req.body;
        db.then(db => {
            db.run(query, [aluno.nome, aluno.turma, aluno.media, aluno.telefone, aluno.id])
        })
        res.json({
            "statuCode": "200"
        })
    }

    static deletarAluno(req, res){
        const query = 'DELETE FROM aluno WHERE id = ?';
        const id = req.params.id;
        db.then(db => {
            db.run(query, [id])
        })
        res.json({
            "statusCode": "200"
        })
    }
}