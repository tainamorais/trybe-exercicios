// 1 Crie uma classe cujo objeto represente um Cachorro.

class Dog {
  name: string;
  color: string;
  age: number;

  constructor(name: string, color: string, age: number) {
    this.name = name;
    this.color = color;
    this.age = age;
  }

  bark(): void {
    console.log("Au Au");
  }
}

const Dog1 = new Dog('Ruffles', 'Brown', 11);

console.log(Dog1.bark());
