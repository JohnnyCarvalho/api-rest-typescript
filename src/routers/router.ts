import { Router, Request, Response } from "express";
import { createMovie } from "../controllers/movie.controllers";

const router = Router();

export default router

    .get('/test', (req: Request, res: Response) => {

        res.status(200).send('Api working!')

    })

    .post('/movie', createMovie)