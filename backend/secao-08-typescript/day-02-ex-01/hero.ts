interface Hero {
  _nome: string;
  _poder: string;
  falarFraseInspiradora(f: string): string; // f é de frase, poderia ser qualquer coisa, mas ele sabe que é o 1º parâmetro
}

class Hero {
  constructor(nome: string, poder: string) {
    this._nome = nome;
    this._poder = poder;
  }

  falarFraseInspiradora(frase: string) {
    return `${this._nome} fala: ${frase}`
  }
}

// Hero recebe um herói e um poder
const Hero1 = new Hero('Martin Luther King', 'Dar exemplo');
const Hero2 = new Hero('Nina Simone', 'Aliviar o dia');

// falarFraseInspiradora recebe uma frase
console.log(Hero1.falarFraseInspiradora('"Não é necessário que você veja toda a escada. Apenas dê o primeiro passo."'));
console.log(Hero2.falarFraseInspiradora('"Não há desculpas para os jovens não saberem quem são ou foram os heróis e heroínas."'));