import CursoDAO from "../DAO/cursoDAO.js";

export default class CursoController {
    // função com os métodos de requisição que recebem como callback as funções que estão importando os métodos do CRUD do banco de dados direto da classe CusoDAO no arquivo cursoDAO.js
    static async rotas(app) {
        app.get('/curso', CursoController.listarCursos);
        app.get('/curso/:id', CursoController.listarCursosId);
        app.post('/curso', CursoController.postarCurso);
        app.put('/curso/:id', CursoController.editarCurso);
        app.delete('/curso/:id', CursoController.deletarCurso);
    }

    static async listarCursos(req, res) {
        await CursoDAO.listarCursos(req, res);
    }

    static async listarCursosId(req, res) {
        await CursoDAO.listarCursosId(req, res);
    }

    static async postarCurso(req, res) {
        await CursoDAO.postarCurso(req, res);
    }
        
    static async editarCurso(req, res) {
        await CursoDAO.editarCurso(req, res);
    }

    static async deletarCurso(req, res) {
        await CursoDAO.deletarCurso(req, res);
    }

}