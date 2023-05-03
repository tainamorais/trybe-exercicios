import Email from "./Email";

export default class Conta {
  private _saldo: number;
  private _email: Email;

  constructor(s: number, email: string) {
    this._saldo = s;
    this._email = new Email(email);
  }

  get saldo(): number {
    return this._saldo;
  }

  get email(): string {
    return this._email.valor;
  }

  // set saldo(s: number) {
  //   this._saldo = s;
  // }

  public debito(valor: number) {
    if(this._saldo < valor) {
      throw new Error('Saldo insuficiente');
    }
    this._saldo -= valor;
  }

};
