import mysql, { Pool } from 'mysql2/promise';

export default class MysqlConnection {
  private _pool: Pool;

  constructor() {
    this._pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      database: 'solid_example',
      password: 'example',
    });
  }

  async query(script: string, params: any[]): Promise<any> {
    return this._pool.query(script, params);
  }
};

// se dou new MysqlConnection() eu crio uma nova pool