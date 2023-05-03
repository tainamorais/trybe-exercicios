// sempre que seu sistema precisar de um email válido

export default class Email {
  private _valor: string;

  constructor(
    valor: string
  ) {
    // verificar se é email válido
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (!regex.test(valor)) {
      throw new Error('Email inválido')
    }

    this._valor = valor
  }

  get valor(): string {
    return this._valor
  }
}
