/*
Exercício 1
Crie uma nova classe cujos objetos representarão uma pessoa no nosso sistema.

`Class`: Person
`Attributes`:
    - name: nome da pessoa
    - birthDate: data de nascimento da pessoa
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome e data de nascimento
`Validations`:
    - O nome deve ter no mínimo três caracteres
    - A data de nascimento não pode ser uma data no futuro
    - A pessoa não pode possuir mais de 120 anos

Para testar, crie pelo menos duas pessoas.
*/

// ./Person.ts

export default class Person {
  protected MINIMUM_NAME_LENGTH = 3;

  protected MAXIMUM_AGE = 120;

  constructor(
    private _name: string,
    private _birthDate: Date,
  ) {
    this.validatePerson(); // validação do objeto criado com o construtor da classe
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    // antes de fazer o armazenamento, a gente faz a validação
    this.validateName(name);
    this._name = name;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(date: Date) {
    // antes de fazer o armazenamento da data, fazemos passar na validação
    this.validateBirthDate(date);
    this._birthDate = date;
  }

  // função que pega data de nascimento e retorna a idade
  // função estática não necessita que tenha um objeto da classe Person para ser chamada
  static getAge(date: Date): number {
    const diff = Math.abs(new Date().getTime() - date.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
  }

  // privada pq só vamos acessar dentro da nossa classe
  // void pq ou retorna ou erro ou não retorna nada
  private validateName(name: string): void {
    if (name.length < this.MINIMUM_NAME_LENGTH) {
      throw new Error(`O nome deve conter no mínimo ${this.MINIMUM_NAME_LENGTH} caracteres.`);
    }
  }

  private validateBirthDate(date: Date): void {
    if (date.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro.');
    }
    if (Person.getAge(date) > this.MAXIMUM_AGE) {
      throw new Error(`A pessoa deve ter no máximo ${this.MAXIMUM_AGE} anos.`);
    }
  }

  private validatePerson(): void {
    this.validateName(this.name);
    this.validateBirthDate(this.birthDate);
  }
}
