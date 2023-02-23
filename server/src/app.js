import express from 'express';
import cors from 'cors';
import { openDb } from './infra/configDB.js';
import CreateTableCurso from './models/curso.js';
import CursoController from './controller/curso-controller.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors());

openDb();
CreateTableCurso.curso();
CursoController.rotas(app);

app.listen(port, (err) => {
    if(err){
        console.log(err);
    }
    console.log(`Servidor conectado na porta ${port}`);
})