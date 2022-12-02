require("dotenv").config();

module.exports = {
    development: {
        username: "postgres",
        password: "1234",
        database: "finalProjectDua",
        host: "127.0.0.1",
        port: 8080,
        dialect: "postgres"
      },
      test: {
        username: "postgres",
        password: 1234,
        database: "finalProjectDuaTest",
        host: "127.0.0.1",
        port: 8080,
        dialect: "postgres"
      },
      production: {
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        host: process.env.PGHOST,
        port: process.env.PGPORT,
        dialect: process.env.PGDIALECT
      }
}