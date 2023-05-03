// sempre que seu sistema precisar de um email válido

export default class Email {
  private _valor: string;
    // regex para verificar se é email válido
  private static regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  constructor(
    valor: string
  ) {
    if (!Email.regex.test(valor)) {
      throw new Error('Email inválido')
    }

    this._valor = valor
  }

  get valor(): string {
    return this._valor
  }
}
