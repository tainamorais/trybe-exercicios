import Conta from "../Conta";
import MysqlConnection from "../MysqlConnection";
import ContaFactory from "../entities/ContaFactory";

export interface IContaModel {
  findById(id: number): Promise<Conta>
  updateBalance(conta: Conta): Promise<void>
}

export default class ContaModel implements IContaModel {
  private connection: MysqlConnection;

  constructor(connection: MysqlConnection) {
    this.connection = connection;
  }

  async findById(id: number): Promise<Conta> {
    // const connection = new MysqlConnection();
    const [rows] = await this.connection.query('SELECT * FROM conta WHERE conta.id = ?', [id]);

    if(rows.length === 0) {
      throw new Error('Conta não encontrada')
    }

    const [row] = rows;

    return ContaFactory.create(row.id, row.saldo, row.email, row.tipo);
    // return new Conta(row.id, row.saldo, row.email);
  }

  async updateBalance(conta: Conta): Promise<void> {
    // const connection = new MysqlConnection();
    await this.connection.query(
      'UPDATE conta SET saldo = ? WHERE conta.id = ?',
      [conta.saldo, conta.id]
    )
  }
}