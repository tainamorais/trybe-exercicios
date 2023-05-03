import MysqlConnection from "../MysqlConnection";
import PagamentoPix from "../PagamentoPix";

export interface IPagamentoPixModel {
  save(pagamentoPix: PagamentoPix): Promise<void>
}

export default class PagamentoPixModel implements IPagamentoPixModel {
  private connection: MysqlConnection;

  constructor(connection: MysqlConnection) {
    this.connection = connection;
  }

  async save(pagamentoPix: PagamentoPix): Promise<void> {
    // const connection = new MysqlConnection();
    await this.connection.query(
      'INSERT INTO pagamento_pix (conta_id, valor, descricao, chave_pix) VALUES (?, ?, ?, ?)',
      [pagamentoPix.conta.id, pagamentoPix.valor, pagamentoPix.descricao, pagamentoPix.chavePix],
    );
  }
}
