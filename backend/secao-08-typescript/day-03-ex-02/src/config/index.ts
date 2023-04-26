// colocar tudo que é referente ao dotenv
import 'dotenv/config';

const config = {
  APP_PORT: Number(process.env.API_PORT) || 3000,
  JWT_SECRET: process.env.JWT_SECRET || "batatinha",
  DB_USER: process.env.MYSQL_USER || "root",
  DB_PASSWORD: process.env.MYSQL_PASSWORD || "password",
  DB_HOST: process.env.MYSQL_HOST || "db",
}

export default config;