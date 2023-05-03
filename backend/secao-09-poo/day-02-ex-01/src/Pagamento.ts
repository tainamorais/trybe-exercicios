import Conta from "./Conta";

// Ela não pode ser inicializada, serve para criar seus tipos apenas
export default abstract class Pagamento {
  private _conta: Conta;
  protected _valor: number;
  private _descricao: string;

  constructor(
    conta: Conta,
    valor: number,
    descricao: string
  ) {
    this.validateValue(valor);

    this._conta = conta;
    this._valor = valor;
    this._descricao = descricao;
  }

  set valor(v: number) {
    this.validateValue(v);
    this._valor = v;
  }

  get valor() {
    return this._valor;
  }

  get descricao() {
    return this._descricao;
  }

  set descricao(d: string) {
    this._descricao = d;
  }

  get conta() {
    return this._conta;
  }

  private validateValue(valor: number) {
    if (valor <= 0) {
      throw new Error('Valor inválido')
    }
  }
};
