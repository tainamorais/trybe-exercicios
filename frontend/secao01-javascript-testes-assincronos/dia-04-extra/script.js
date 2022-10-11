window.onload = () => {
  setupHtmlElements();
};

// Recupera botão search
const setupHtmlElements = () => {
  const searchButton = document.getElementById('search-button');
  searchButton.addEventListener('click', handleSearchEvent);
};

// Função do botão search
const handleSearchEvent = async () => {
  const currencyElement = document.getElementById('currency-input');
  const currencyValue = currencyElement.value;
  
  const object = await fetchCurrency(currencyValue);

  clearList();

  handleBaseCurrency(object.base);
  handleRates(object.rates);

  cleanCurrencyInput();
};

// Limpar LI's ao gerar uma nova busca, para não ficar acumulando
clearList = () => {
  const currencyList = document.getElementById('currency-list');
  currencyList.innerHTML = "";
};

// Limpar campo input
const cleanCurrencyInput = () => {
  const currencyElement = document.getElementById('currency-input');
  currencyElement.value = "";
}

// Renderizar título
const handleBaseCurrency = (base) => {
  const baseTitle = document.getElementById('base');
  baseTitle.innerHTML = `Valores referentes a 1 ${base}`;
};

// Renderizar as taxas
const handleRates = (rates) => {
  const entries = Object.entries(rates);
  entries.forEach((entry) => {
    const [ currency, rate ] = entry;   // desconstrução de array
    renderRate(currency, rate);
  });
};

// Fazer a lista
const renderRate = (currency, rate) => {
  const currencyList = document.getElementById('currency-list');
  const fixedRate = rate.toFixed(2);
  const li = document.createElement('li');
  li.innerHTML = `<em><strong>${currency}</strong></em>: ${fixedRate}`
  currencyList.appendChild(li);
};
