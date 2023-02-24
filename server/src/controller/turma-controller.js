import TurmaDAO from "../DAO/turmaDAO.js";

export default class TurmaController{
    static async rotas(app){
        app.get('/turma', TurmaController.listarTurma);
        app.get('/turma/:id', TurmaController.listarTurmaId);
        app.post('/turma', TurmaController.postarTurma);
        app.put('/turma/:id', TurmaController.editarTurma);
        app.delete('/turma/:id', TurmaController.deletarTurma);
    }

    static async listarTurma(req, res){
        await TurmaDAO.listarTurma(req, res);
    }

    static async listarTurmaId(req, res){
        await TurmaDAO.listarTurmaId(req, res);
    }

    static async postarTurma(req, res){
        await TurmaDAO.postarTurma(req, res);
    }

    static async editarTurma(req, res){
        await TurmaDAO.editarTurma(req, res);
    }

    static async deletarTurma(req, res){
        await TurmaDAO.deletarTurma(req, res);
    }
}