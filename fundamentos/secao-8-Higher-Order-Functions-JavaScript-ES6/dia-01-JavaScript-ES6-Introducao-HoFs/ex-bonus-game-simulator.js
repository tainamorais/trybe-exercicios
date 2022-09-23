/*
Parte I
Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.

Para os próximos exercícios copie o código abaixo.

Crie uma função que retorna o dano do dragão.
O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
Crie uma função que retorna o dano causado pelo warrior.
O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).

A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: “Não possui mana suficiente”) e a mana gasta é 0.

Math.floor(Math.random() * (max - min + 1) + min);
Número aleatório entre 2 números
*/

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = () => {
  const minDamage = 15;
  const maxDamage = dragon.strength;
  const damage = Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);
  return damage;
};

const warriorAttack = () => {
  const minDamage = warrior.strength;
  const maxDamage = warrior.strength * warrior.weaponDmg;
  const damage = Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);
  return damage;
};

const mageAttack = () => {
  const minDamage = mage.intelligence;
  const maxDamage = mage.intelligence * 2;
  const damage = Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);;
  const mana = mage.mana;
  return { damage, mana }
};

console.log(dragonAttack());
console.log(warriorAttack());
console.log(mageAttack());
