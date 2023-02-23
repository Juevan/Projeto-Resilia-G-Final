import CursoDAO from "../DAO/cursoDAO.js";

export default class CursoController {
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