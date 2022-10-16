
import mongoose from 'mongoose'
import config from 'config'
import { dbUri } from '../config/default';
import Logger from '../config/logger';


async function connect() {
    //const dbUri = config.get<string>("dbUri");

    try {
        await mongoose.connect(dbUri);
        Logger.info('Conectado ao banco de dados!');

    } catch (e) {
        Logger.error('Não foi possível fazer a conexão!');
        Logger.error(`Error ${e}`);
        process.exit(1);
    }
}

export default connect