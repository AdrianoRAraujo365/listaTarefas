const botaoExibir = document.getElementById('botao-exibir');

function exibirNome() {
  // 1. Selecionar os elementos do DOM
  const inputNome = document.getElementById('campo-nome');
  const resultado = document.getElementById('resultado-nome');

  // 3. Obter o valor (value) atual do campo de input
  const nomeDigitado = inputNome.value;

  // 4. Exibir o valor lido no parágrafo de resultado
  resultado.textContent = `Olá, ${nomeDigitado}! Bem-vindo ao DOM.`;
}

// 5. Adicionar o ouvinte de evento
botaoExibir.addEventListener('click', exibirNome);
