// import { IEfetivavel } from "./IEfetivavel";
import Pagamento from "./Pagamento";

// void porque nẽo retorna nada
export default class PagamentoCartao extends Pagamento {
  efetivar(): void {
    console.log('--------------- PAGAMENTO CARTÃO ---------------')
    console.log('Indo na bandeira pagar a conta')
    console.log(`Saldo inicial na conta: R$ ${this.conta.saldo}`);
    console.log(`Descrição: ${this.descricao}`)
    console.log(`Pagamento no valor de R$ ${this.valor}`)
    this.conta.debito(this.valor);
    console.log(`Saldo final na conta: R$ ${this.conta.saldo}`);

    const codigo = this.gerarCodigo();
    console.log(`Código da transação: ${codigo}`);
  }
}
