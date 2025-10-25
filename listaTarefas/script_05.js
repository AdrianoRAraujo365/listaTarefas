const botaoExibir = document.getElementById('botao-exibir');

botaoExibir.addEventListener("click", function (e) {
  const inputNome = document.getElementById('campo-nome');
  const resultado = document.getElementById('resultado-nome');

  // 3. Obter o valor (value) atual do campo de input
  const nomeDigitado = inputNome.value;

  // 4. Exibir o valor lido no parágrafo de resultado
  resultado.textContent = `Olá, ${nomeDigitado}! Bem-vindo ao DOM.`;
});