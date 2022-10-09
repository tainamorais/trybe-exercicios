// const fetch = require('node-fetch');

const fetchCoins = async () => {
  try {
    const url = 'https://api.coincap.io/v2/assets';
    const request = await fetch(url);
    const json = await request.json();
    // const { slip: { id, advice } } = json;
    console.log(json.data);
    return json.data;
  } catch (err) {
    console.log('Informações não encontradas');
  }
};

// fetchCoins();

const setCoins = async () => {
  const coins = await fetchCoins();
  const coinsList = document.getElementById('coins-list');

  coins.slice(0, 10).forEach((coin) => {
    const newLi = document.createElement('li');
    const usdPrice = Number(coin.priceUsd);
    newLi.innerText = `${coin.name}(${coin.symbol}): U$ ${usdPrice.toFixed(2)}`;
    coinsList.appendChild(newLi)
  });
}

window.onload = () => setCoins();