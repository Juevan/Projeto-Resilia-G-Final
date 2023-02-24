import AlunoDAO from "../DAO/alunoDAO.js";

export default class AlunoController {
    static async rotas(app) {
        app.get('/aluno', AlunoController.listarAluno);
        app.get('/aluno/:id', AlunoController.listarAlunoId);
        app.post('/aluno', AlunoController.postarAluno);
        app.put('/aluno/:id', AlunoController.editarAluno);
        app.delete('/aluno/:id', AlunoController.deletarAluno);
    }
    static async listarAluno(req, res) {
        await AlunoDAO.listarAluno(req, res);
    }

    static async listarAlunoId(req, res) {
        await AlunoDAO.listarAlunoId(req, res);
    }

    static async postarAluno(req, res) {
        await AlunoDAO.postarAluno(req, res);
    }

    static async editarAluno(req, res) {
        await AlunoDAO.editarAluno(req, res);
    }
    
    static async deletarAluno(req, res) {
        await AlunoDAO.deletarAluno(req, res);
    }
}