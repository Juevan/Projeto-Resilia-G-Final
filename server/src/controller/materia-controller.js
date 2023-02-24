import MateriaDAO from "../DAO/materiaDAO.js";

export default class MateriaController{
    static async rotas(app){
        app.get('/materia', MateriaController.listarMateria);
        app.get('/materia/:id', MateriaController.listarMateriaId);
        app.post('/materia', MateriaController.postarMateria);
        app.put('/materia/:id', MateriaController.editarMateria);
        app.delete('/materia/:id', MateriaController.deletarMateria);
    }

    static async listarMateria(req, res){
        await MateriaDAO.listarMateria(req, res);
    }

    static async listarMateriaId(req, res){
        await MateriaDAO.listarMateriaId(req, res);
    }

    static async postarMateria(req, res){
        await MateriaDAO.postarMateria(req, res);
    }

    static async editarMateria(req, res){
        await MateriaDAO.editarMateria(req, res);
    }

    static async deletarMateria(req, res){
        await MateriaDAO.deletarMateria(req, res);
    }
}