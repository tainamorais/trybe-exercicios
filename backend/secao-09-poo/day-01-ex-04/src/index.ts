import Client from "./Client";
import Order from "./Order";
import OrderItem from "./OrderItem";
import Date from "./Date";

const client1 = new Client('Fernanda da Silveira');

const fries = new OrderItem('Fries', 12.00);
const chicken = new OrderItem('Chicken', 14.00);
const soda = new OrderItem('Coca-cola', 8.00);
const dessert = new OrderItem('Chocolate', 6.00);

const order1 = new Order(client1, [fries, chicken, soda, dessert], 'card', 0.1);
console.log(order1);
console.log(`Valor total to pedido: ${order1.calculateOrder()}`);
console.log(`Valor total com desconto de ${order1.discount * 100}%: ${order1.calculateOrderWithDiscount()}`);

// Para testar!

console.log('DATE TESTS!!');
console.log('DATE TESTS!!');
console.log('DATE TESTS!!');

const testDate = new Date(5, 1, 2007);

console.log(testDate);
console.log('Dia: ', testDate.day);
console.log('Mês: ', testDate.month);
console.log('Mês por extenso: ', testDate.getMonthName());
console.log('Ano: ', testDate.year);
console.log('É ano bissexto: ', testDate.isLeapYear() ? 'Sim' : 'Não');
console.log(testDate.format('dd/mm/aaaa'));
console.log(testDate.format('dd-mm-aaaa'));
console.log(testDate.format('aaaa/mm/dd'));
console.log(testDate.format('aaaa-mm-dd'));
console.log(testDate.format('dd de M de aa'));
console.log(testDate.format('dd, M de aaaa'));

const otherDate = new Date(30, 1, 2021);

const compared = testDate.compare(otherDate);

const compareStates = ['anterior', 'igual', 'posterior'];

console.log(`A primeira data é ${compareStates[compared + 1]} a segunda.`);

// data inválida
const invalidDate = new Date(31, 2, 2021);

console.log('Teste data inválida: ', invalidDate);

// formato inválido
// console.log(invalidDate.format('a m d'));