const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () => {
  const marsTemperature = getMarsTemperature();
  setTimeout(() => console.log(`A temperatura de Marte é: ${marsTemperature} graus celsius`), messageDelay());
};

// console.log(getMarsTemperature());

sendMarsTemperature(); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo
