import mysql from 'mysql2/promise';
import config from "../config";

const connection = mysql.createPool({
  host: config.DB_HOST || 'localhost',
  user: config.DB_USER || 'root',
  password: config.DB_PASSWORD || 'password',
  database: 'TypeScriptExpress',
});

export default connection;
