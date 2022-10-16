import { Request, Response } from "express";

//Movie
import { MovieModel } from "../models/Movie";

//Logger
import Logger from "../config/logger";


export async function createMovie(req: Request, res: Response) {
    // return res.status(200).send('Deu bom!');

    try {
        const data = req.body;
        const movie = await MovieModel.create(data);
        return res.status(201).json(movie);
    } catch (e: any) {
        Logger.error(`Error: ${e.message}`)
    }
}