import { IEfetivavel } from "./IEfetivavel";
import Pagamento from "./Pagamento";

// void porque nẽo retorna nada
export default class Transferencia implements IEfetivavel {
  constructor(
    private de: string,
    private para: string,
  ) {}


  efetivar(): void {
    console.log('--------------- TRANSFERINDO ---------------');
    console.log(`De: ${this.de}`);
    console.log(`Para: ${this.para}`);
    // console.log(`Saldo inicial na conta: R$ ${this.conta.saldo}`);
    // console.log(`Descrição: ${this.descricao}`)
    // console.log(`Pagamento no valor de R$ ${this.valor}`)
    // this.conta.debito(this.valor);
    // console.log(`Saldo final na conta: R$ ${this.conta.saldo}`);

    // const codigo = this.gerarCodigo();
    // console.log(`Código da transação: ${codigo}`);
  }
}
