import Conta from "./Conta";
// import { IEfetivavel } from "./IEfetivavel";
import Pagamento from "./Pagamento";

export default class PagamentoPix extends Pagamento {
  constructor(
    private _chavePix: string,
    conta: Conta,
    valor: number,
    descricao: string,
  ) {
    super(conta, valor, descricao);
  }

  efetivar(): void {
    console.log('--------------- PAGAMENTO PIX  ---------------')

    console.log(`Saldo inicial na conta: R$ ${this.conta.saldo}`);
    console.log(`Descrição: ${this.descricao}`)
    console.log(`Pagamento no valor de R$ ${this.valor}`)
    this.conta.debito(this._valor);
    console.log(`Saldo final na conta: R$ ${this.conta.saldo}`);

    const codigo = this.gerarCodigo();
    console.log(`Código da transação: ${codigo}`);
  }

  // irá subescrebger o outro gerarCodigo geral feito no pagamento geral
  protected override gerarCodigo(): string {
    const timestamp = new Date().getTime();
    const slug = this.descricao.toLocaleLowerCase().replace(/ /g, '-');
    return `${timestamp}-${this._chavePix}-${slug}`
  }
}
