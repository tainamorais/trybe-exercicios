import Conta from "./Conta";
import { IEfetivavel } from "./IEfetivavel";
import IPrestacao from "./IPrestacao";
import Pagamento from "./Pagamento";

export default class PagamentoBoleto extends Pagamento
  implements IEfetivavel {
  multa = 0.2;
  prestacoes: IPrestacao[] = [];
  vencimento: Date;

  constructor(
    vencimento: Date,
    conta: Conta,
    valor: number,
    descricao: string,
  ) {
    // tem que chamar construtor da classe mãe quando vc coloca novo construtor
    super(conta, valor, descricao);
    this.vencimento = vencimento;
  }

  efetivar(): void {
    console.log('--------------- PAGAMENTO BOLETO  ---------------')
    console.log(`Pago por: ${this.conta.email}`)
    const dataDoPagamento = new Date();
    const vencido = dataDoPagamento.getTime() > this.vencimento.getTime();

    // Uma opção
    // if (vencido) {
    //   const valorDaMulta = this.multa * this.valor;
    //   this.conta.debito(valorDaMulta);
    // }

    if (vencido) {
      const valorDaMulta = this.multa * this.valor;
      console.log(`MULTA POR ATRASO: R$ ${valorDaMulta}`);
      this._valor += valorDaMulta
    }

    console.log(`Saldo inicial na conta: R$ ${this.conta.saldo}`);
    console.log(`Descrição: ${this.descricao}`)
    console.log(`Pagamento no valor de R$ ${this.valor}`)
    this.conta.debito(this.valor);
    console.log(`Saldo final na conta: R$ ${this.conta.saldo}`);
  }
}
