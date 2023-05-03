import Conta from "../Conta";
import ContaCorrente from "../entities/ContaCorrente";
import { IContaModel } from "./ContaModel";

export default class ContaModelFake implements IContaModel {
  contas: Conta[] = [
    new ContaCorrente(1, 1000, 'teste@fake.com', 'corrente'),
  ];

  async findById(id: number): Promise<Conta> {
    const found = this.contas.find((conta) => conta.id === id);

    if (!found) {
      throw new Error('Conta não encontrada')
    }

    return found;
  }

  async updateBalance(contaAtualizada: Conta): Promise<void> {
    const index = this.contas.findIndex((conta) => conta.id === contaAtualizada.id);

    this.contas[index] = contaAtualizada;
  }
}