/**
 * Pacotes necessários a ser instalados no projeto
 * 
 * ➜ tsc --init
 * 
 * ➜ npx tsc --init
 * 
 * ➜ npm init -y
 * 
 * ➜ npm install config dotenv express express-validator mogoose morgan winston
 * 
 * ➜ npm install @types/config @types/express @types/mongoose @types/morgan @types/node ts-node-dev typescript --save-dev
 * 
 * ➜ npm run dev
 */

// ➜ dotenv
require('dotenv').config();

// ➜ packages
import express from 'express'

// ➜ Porta
import { port } from '../config/default';

// ➜ Routers
import router from '../routers/router';

// ➜ Database
import  db  from '../database/db'



// ➜ Ambient variável
const app =  express();

// Routes
app.use('/api/', router)

// ➜ middleware JSON
app.use(express.json());

app.listen(port, async () => {
    await db();
    console.log(`The application is running on the port ${port}`);
})