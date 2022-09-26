const techProducts = [
  {
      id: 1, // numérico
      name: 'computer', // string
      price: 2100, // number
  },
  {
      id: 2,
      name: 'mouse',
      price: 78,
  },
  {
      id: 3,
      name: 'monitor',
      price: 589,
  },
  {
      id: 4,
      name: 'keyboard',
      price: 78,
  },
  {
      id: 5,
      name: 'HD',
      price: 350,
  },
  {
      id: 6,
      name: 'webcam',
      price: 187,
  },
  {
      id: 7,
      name: 'mic',
      price: 78,
  },
  {
      id: 8,
      name: 'headset',
      price: 216,
  },
];

// 1 - Crie um algoritmo que retorne um array com nome de todos os produtos de ids pares -> refazer com map
console.log('\nExercício 1 - Usando FILTER e MAP');

const evenId = techProducts.filter((element) => element.id % 2 === 0).map((element) => element.name);

console.log(evenId);



// 2 - Crie um algoritmo que retorna true se houver algum produto com preço acima de 300 e false caso contrário
console.log('\nExercício 2 - Usando SOME');

const verifyPriceOver300 = techProducts.some((element) => element.price > 300);

console.log(verifyPriceOver300);



// 3 - Crie um algoritmo que receba o id de um produto e uma quantidade e retorne o preço total
console.log('\nExercício 3 - Usando FID');

const totalPrice = (id, qtd) => {
  const selectedProduct = techProducts.find((element) => element.id === id);
  return `Preço total de ${qtd} unidades de ${selectedProduct.name} = R$ ${selectedProduct.price * qtd}`;
}

/* 
2ª FORMA DE RESOLVER
const totalPrice = (id, qtd) => techProducts.find((produto) => produto.id === id).price * qtd
*/

console.log(totalPrice(8, 2));



// 4 -  Crie um algoritmo que dado um preço retorne todos os produtos com preços iguais 
console.log('\nExercício 4 - Usando FILTER');

const equalPrice = (price) => techProducts.filter((element) => element.price === price)

console.log(equalPrice(78));
