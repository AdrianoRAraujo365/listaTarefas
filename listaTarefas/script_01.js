// 1. Selecionar os elementos do DOM
const paragrafo = document.getElementById('paragrafo-texto');
const botao = document.getElementById('botao-mudar');

// 2. Definir a função que será executada no clique
function mudarTexto() {
  // 3. Alterar a propriedade textContent do parágrafo
  paragrafo.textContent = "O texto foi alterado! Parabéns, você manipulou o DOM.";
}

function mudarTextoOver() {
  paragrafo.textContent = "ON MOUSE OVER - O texto foi alterado! Parabéns, você manipulou o DOM.";
}

//Método addEventListener
// 4. Adicionar o "ouvinte de evento" (event listener) ao botão
botao.addEventListener('click', mudarTexto);
botao.addEventListener('mouseover', mudarTextoOver);

