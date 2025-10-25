// 1. Selecionar os elementos do DOM
const paragrafo = document.getElementById('paragrafo-texto');

function mudarTexto() {
    // 2. Alterar a propriedade textContent do parágrafo
    paragrafo.textContent = "O texto foi alterado! Parabéns, você manipulou o DOM.";
}