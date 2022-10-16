//teste conexão

import { body } from "express-validator";

export const movieCreateVaditation = () => {

    return [
        body('title')
        .isString()
        .withMessage('The title is mandatory!')
        .isLength({min: 5})
        .withMessage('The title is very small!'),
        body('rating')
        .isNumeric()
        .withMessage('The rating is mandatory to be a number!')
        .isLength({min: 0})
        .withMessage('The avaliation is mandatori to be 1 the 5!')
    ]
}