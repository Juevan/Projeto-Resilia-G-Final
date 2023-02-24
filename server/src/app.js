import express from 'express';
import cors from 'cors';
import { openDb } from './infra/configDB.js';

// Classes com a função para criação das tabelas
import CreateTableCurso from './models/curso.js';
import CreateTableTurma from './models/turma.js';
import CreateTableProfessor from './models/professor.js';
import CreateTableAluno from './models/aluno.js';
import CreateTableMateria from './models/materia.js';

// Classes com as rotas para as requisições
import CursoController from './controller/curso-controller.js';
import AlunoController from './controller/aluno-controller.js';
import ProfessorController from './controller/professor-controller.js';
import MateriaController from './controller/materia-controller.js';
import TurmaController from './controller/turma-controller.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors());

// Função que inicializa o banco de dados
openDb();
CreateTableCurso.curso();
CreateTableAluno.aluno();
CreateTableProfessor.professor();
CreateTableMateria.materia();
CreateTableTurma.turma();

CursoController.rotas(app);
AlunoController.rotas(app);
TurmaController.rotas(app);
ProfessorController.rotas(app);
MateriaController.rotas(app);


app.listen(port, (err) => {
    if(err){
        console.log(err);
    }
    console.log(`Servidor conectado na porta ${port}`);
})