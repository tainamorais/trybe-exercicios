import Conta from "../Conta";

export default class ContaCorrente extends Conta {
  private static limite = -500;

  debito(valor: number): void {
    const saldoFinal = this.saldo - valor;

    if(saldoFinal < ContaCorrente.limite) {
      throw new Error('Limite estourado')
    }

    this._saldo -= valor
  }
}