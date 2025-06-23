import express from 'express';
import Todoroutes from './routes/todo.routes.js';
import cors from 'cors'
const app=express();
app.use(cors())
app.use(express.urlencoded());
app.use(express.json());

app.use('/',Todoroutes)
export default app;