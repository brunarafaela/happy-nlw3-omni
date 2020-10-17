import express, { json } from "express";
import "express-async-errors";
import './database/connection';
import routes from "./routes";
import path from 'path';
import errorHandler from './errors/handler';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);

app.listen(3333);
//Rota - conjunto de tudo
    //Recurso - usuário
//Métodos HTTP get, post, put e delete
//Parametros

//GET - Buscar uma informação, lista, item
//POST - Criando uma informação nova
//PUT - Editando uma informação
//DELETE - Deletndo uma informação

//Query Params: http://localhost:3333/users?search=bruna
//Route Params: http://localhost:3333/users/1 (identificar um recurso) com dois pointos por ex id
//Body: http://localhost:3333/users/ (Identificar um recurso)
// app.post('/users/:id', (request, response) =>{
//     console.log(request.query);
//     console.log(request.params);
//     console.log(request.body);
//   return response.json({
//     message: "relou uorld",
//     id: "1",
//   });  
// });

