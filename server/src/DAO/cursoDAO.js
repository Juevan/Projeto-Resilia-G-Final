import { openDb } from "../infra/configDB.js";
const db = openDb();

// A classe UsuarioDAO encapsula todo o CRUD do banco de dados e exporta para o curso-controller.js que irá utilizar os metodos http nas rotas.
export default class CursoDAO{

    // metodo para listar todos os dados
    static listarCursos(req, res){
        const query = 'SELECT * FROM curso';

        db.then(db => {
            db.all(query).then(curso => res.json(curso));
        })
    }

    // metodo para listar um dado através do id
    static listarCursosId(req, res){
        const id = req.params.id;

        const query = 'SELECT * FROM curso WHERE id = ?'

        db.then(db => {
            db.get(query, [id]).then(curso => res.json(curso));
        })
    }

    // metodo para adicionar um dado do database
    static postarCurso(req, res){
        const query = 'INSERT INTO curso(nome, modulos, qtdDeTurmas, cargaHoraria, descricao) VALUES(?, ?, ?, ?, ?)';
        const curso = req.body;

        db.then(db => {
            db.run(query, [curso.nome, curso.modulos, curso.qtdDeTurmas, curso.cargaHoraria, curso.descricao])
        })
        res.json({
            "statusCode": "200"
        })
    }

    // metodo para editar um dado do database
    static editarCurso(req, res){
        const query = 'UPDATE curso SET nome = ?, modulos = ?, qtdDeTurmas = ?, cargaHoraria = ?, descricao = ? WHERE id = ?';

        const curso = req.body;

        db.then(db => {
            db.run(query, [curso.nome, curso.modulos, curso.qtdDeTurmas, curso.cargaHoraria, curso.descricao, curso.id])
        })
        res.json({
            "statusCode": "200"
        })
    }

    // metodo para excluir um dado do database
    static deletarCurso(req, res){
        const id = req.params.id;

        const query = 'DELETE FROM curso WHERE id = ?';

        db.then(db => {
            db.run(query, [id])
        })
        res.json({
            "statusCode": "200"
        })
    }
}