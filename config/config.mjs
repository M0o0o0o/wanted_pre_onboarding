import dotenv from "dotenv";

dotenv.config();

export default {
  development: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false,
  },
  test: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
