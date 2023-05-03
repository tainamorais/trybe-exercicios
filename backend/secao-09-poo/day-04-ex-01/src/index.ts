import MysqlConnection from "./MysqlConnection";
import ContaModel from "./model/ContaModel";
import ContaModelFake from "./model/ContaModelFake";
import PagamentoPixModelFake from "./model/IPagamentoPixModelFake";
import PagamentoPixModel from "./model/PagamentoPixModel";
import PagamentoService from "./service/PagamentoService";

// async function main() {
//   const mysqlConnection = new MysqlConnection();
//   const contaModel = new ContaModel(mysqlConnection);
//   const pagamentoPixModel = new PagamentoPixModel(mysqlConnection);
//   const service = new PagamentoService(contaModel, pagamentoPixModel);
//   await service.pagarNoPix('chave@teste.com', 1, 500, 'Pagamento de Teste')
// }

// main();

async function mainFake() {
  const contaModel = new ContaModelFake();
  const pagamentoPixModel = new PagamentoPixModelFake();
  const service = new PagamentoService(contaModel, pagamentoPixModel);
  await service.pagarNoPix('chave@teste.com', 1, 500, 'Pagamento de Teste')
}

mainFake();