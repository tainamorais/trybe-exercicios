// efetivar pagamento
// persistir no banco

import PagamentoPix from "../PagamentoPix";
import ContaModel, { IContaModel } from "../model/ContaModel";
import PagamentoPixModel, { IPagamentoPixModel } from "../model/PagamentoPixModel";

export default class PagamentoService {
  constructor(
    private contaModel: IContaModel,
    private pagamentoPixModel: IPagamentoPixModel,
  ) {}

  async pagarNoPix(
    chavePix: string,
    contaId: number,
    valor: number,
    descricao: string,
  ) {
    // const contaModel = new ContaModel();
    const conta = await this.contaModel.findById(contaId);
    const pagamentoPix = new PagamentoPix(chavePix, conta, valor, descricao)
    
    pagamentoPix.efetivar();
    
    // const pagamentoPixModel = new PagamentoPixModel();
    await this.pagamentoPixModel.save(pagamentoPix);

    // persistir atualização de saldo de conta
    await this.contaModel.updateBalance(conta)
  }
}