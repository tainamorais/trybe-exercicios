//Interrompa o comportamento padrão do botão submit utilizando o método preventDefault(). 
function handleSubmit(event) {
  event.preventDefault();
  const validation = textInputValidation();
  if (validation === false) {
    alert('Dados inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
}

//Função do botão apagar
function clearFields() {
  const inputElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < inputElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    userInput.checked = false;
  }
  textArea.value = '';
}

//Faça com que somente quem autorizar o uso de imagens possa enviar suas informações.
//No HTML, o botão submit deve estar marcado como disable.
function enableSubmit() {
  const submitBtn = document.querySelector('#submitBtn');
  const checkboxImg = document.querySelector('#checkbox-imagens');
  submitBtn.disabled = !checkboxImg.checked;
}

/*
Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: 'Dados Inválidos'. Caso contrário, a mensagem 'Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.' deverá aparecer na tela.
*/
function textInputValidation() {
  const email = document.querySelector('#input-email').value.length;
  const invalidEmail = email < 10 || email > 50;

  const name = document.querySelector('#input-nome').value.length;
  const invalidName = name < 10 || name > 40;

  const answer = document.querySelector('#resposta-concurso').value.length;
  const invalidAnswer = answer> 500;

  if (invalidEmail || invalidName || invalidAnswer) {
    return false;
  }
  else {
    return true;
  }
}

window.onload = function () {
  const submitBtn = document.querySelector('#submitBtn');
  submitBtn.addEventListener('click', handleSubmit);
  const resetBtn = document.querySelector('#resetBtn');
  resetBtn.addEventListener('click', clearFields);
  const checkboxImg = document.querySelector('#checkbox-imagens');
  checkboxImg.addEventListener('change', enableSubmit);
};
