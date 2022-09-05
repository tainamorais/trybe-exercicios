//VER MELHOR OS EXERCÍCIOS DESTE BLOCO

//Interrompa o comportamento padrão do botão submit utilizando o método preventDefault(). 
const submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', function(event) {
  event.preventDefault();
})

/*
Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: 'Dados Inválidos'. Caso contrário, a mensagem 'Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.' deverá aparecer na tela.
*/
const inputName = document.querySelector('#input-nome');
const inputEmail = document.querySelector('#input-email');
submitBtn.addEventListener('click', function() {
  if (inputName.value.length < 10 || inputName.value.length > 40 || inputEmail.value.length < 10 || inputEmail.value.length > 50) {
    alert('Dados inválidos')
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
  }
})


//Função que limpa formulário
function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < formElements.length; index += 1) {
    formElements[index].value = '';
    formElements[index].checked = false;
  }
  textArea.value = '';
}

const resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener('click', clearFields);


//A TrybeTrip precisa muito de fotos para divulgar seus concursos. Tendo isso em mente, faça com que somente quem autorizar o uso de imagens possa enviar suas informações.
const checkboxImg = document.querySelector('#checkbox-imagens');
function enableSubmit() {
  submitBtn.disabled = !checkboxImg.checked;
}
checkboxImg.addEventListener('change', enableSubmit);

