import morgan from "morgan";
import { StreamOptions } from "morgan";

import config from 'config';

import Logger from "../config/logger";
import { env } from "../config/default";

const stream: StreamOptions = {
    write: (message) => Logger.http(message),
}

const skip = () => {

    return env !== process.env.ENV
}

const morganMiddleware = morgan(
    ':method :url :status :res[content-length] - :response-time ms',
    { stream, skip }
)

export default morganMiddleware;