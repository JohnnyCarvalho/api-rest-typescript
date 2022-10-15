
import mongoose from 'mongoose'
import config from 'config'
import { dbUri } from '../config/default';


async function connect() {
    //const dbUri = config.get<string>("dbUri");

    try {
        await mongoose.connect(dbUri);
        console.log('Conectado ao banco de dados!');

    } catch (e) {
        console.log('Não foi possível fazer a conexão!');
        console.log(`Error ${e}`);
    }
}

export default connect