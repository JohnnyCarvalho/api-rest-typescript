export default {
  port: 3000,
  dbUri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PSW}@cluster0.hxinreh.mongodb.net/?retryWrites=true&w=majority`,
  env: "development",
};
