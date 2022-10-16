// Variável para porta
export const port: number = 3000

//Variáveis para conexão ao banco de dados

// const db_user = process.env.DB_USER;
// const db_psw = process.env.DB_PSW;

export const dbUri: string = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PSW}@cluster0.hxinreh.mongodb.net/?retryWrites=true&w=majority`;


// Variáveis para Logger

export const env: string = 'development'