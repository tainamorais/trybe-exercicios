/*
Exercício 1: Vamos modelar algumas partes de um software de uma escola. Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.

Exercício 2: Agora vamos adicionar à nossa classe de pessoa estudante os comportamentos. Para isso adicione dois métodos: um que calcula a soma das notas da pessoa estudante e outro que calcula a média das notas da pessoa estudante.
*/

class Student {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[] = Array(); // 4 notas de prova
  private _assignmentsGrades: number[] = Array(); // 2 notas de trabalho
  
  constructor(e: string, n: string, eG: number[], aG: number[]) {
    this._enrollment = e;
    this._name = n;
    this.examsGrades = eG;  // tem que ser igual ao debaixo, sem _
    this.assignmentsGrades = aG;  // tem que ser igual ao debaixo, sem _
  }
  
  public get enrollment(): string {
    return this._enrollment;
  }
  public set enrollment(value: string) {
    this._enrollment = value;
  }
  
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  
  public get examsGrades(): number[] {
    return this._examsGrades;
  }
  // Devem ter 4 notas de provas. Fazer verificação.
  public set examsGrades(value: number[]) {
    if(value.length !== 4) {
      throw new Error('A pessoa precisa ter 4 notas de provas.')
    }
    this._examsGrades = value;
  }
  
  public get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }
  public set assignmentsGrades(value: number[]) {
    if(value.length !== 2) {
      throw new Error('A pessoa precisa ter 2 notas de trabalho.')
    }
    this._assignmentsGrades = value;
  }

  // Exercício 2 - fazer as médias de trabalhos e provas
  sumGrades(): number {
    return [...this.examsGrades, ...this.assignmentsGrades]
    .reduce((previousGrade, grade) => {
      grade += previousGrade;
      return grade;
    }, 0);
  }

  sumAverageGrade(): number {
    const sumGrades = this.sumGrades();
    const divider = this.examsGrades.length + this.assignmentsGrades.length;
    
    return sumGrades / divider;
  }

}

const student1 = new Student('1234', 'Fernanda da Silveira', [10, 9, 8, 9], [8, 10]);
console.log(student1);
console.log(`A soma das notas do estudante ${student1.name} é: ${student1.sumGrades()}`);
console.log(`A média das notas do estudante ${student1.name} é: ${student1.sumAverageGrade()}`);

const student2 = new Student('2345', 'Tainá Morais', [9, 8, 7, 10], [9, 8]);
console.log(student2);
console.log(`A soma das notas do estudante ${student2.name} é: ${student2.sumGrades()}`);
console.log(`A média das notas do estudante ${student2.name} é: ${student2.sumAverageGrade()}`);

