import ProfessorDAO from "../DAO/professor.DAO.js";

export default class ProfessorController{
    static async rotas(app){
        app.get('/professor', ProfessorController.listarProfessor);
        app.get('/professor/:id', ProfessorController.listarProfessorId);
        app.post('/professor', ProfessorController.postarProfessor);
        app.put('/professor/:id', ProfessorController.editarProfessor);
        app.delete('/professor/:id', ProfessorController.deletarProfessor);
    }
    
    static async listarProfessor(req, res){
        await ProfessorDAO.listarProfessor(req, res);
    }

    static async listarProfessorId(req, res){
        await ProfessorDAO.listarProfessorId(req, res);
    }

    static async postarProfessor(req, res){
        await ProfessorDAO.postarProfessor(req, res);
    }

    static async editarProfessor(req, res){
        await ProfessorDAO.editarProfessor(req, res);
    }

    static async deletarProfessor(req, res){
        await ProfessorDAO.deletarProfessor(req, res);
    }
}