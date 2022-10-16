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


// ENV Variables
require("dotenv").config();

import express from "express";
import config from "config";

// DB
import db from "../config/db";

// Routes
import router from "./router";

// Logger
import Logger from "../config/logger";

// Middlewares
import morganMiddleware from "./middleware/morganMiddleware";

const port = config.get<number>("port");

const app = express();

// JSON Req and Res
app.use(express.json());

// Morgan
app.use(morganMiddleware);

app.use("/api/", router);

app.listen(port, async () => {
  await db();

  Logger.info(`App rodando na porta: ${port}`);
});
