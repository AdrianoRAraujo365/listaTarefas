const inputTarefa = document.getElementById("novaTarefa");
const botaoAdicionar = document.getElementById("btnAdicionar");
const listaTarefas = document.getElementById("listaTarefas");
const selectCategoria = document.getElementById("categoriaTarefa"); // (C)
const selectFiltro = document.getElementById("filtroCategoria");    // (D)
const msgLimite = document.getElementById("msgLimite");            // (A)
const LIMITE_TAREFAS = 10;                                         // (A)

// Função para adicionar tarefa
botaoAdicionar.addEventListener("click", function() {
    const textoTarefa = inputTarefa.value.trim();
    const categoriaSelecionada = selectCategoria.value; // Obtém a categoria (C)

    // (A) Valida o limite de tarefas
    if (listaTarefas.children.length >= LIMITE_TAREFAS) {
        msgLimite.classList.remove("d-none");
        return; 
    } else {
        msgLimite.classList.add("d-none");
    }

    if (textoTarefa === "") return;

    const li = document.createElement("li");
    li.setAttribute("data-categoria", categoriaSelecionada); // Define a categoria como atributo (C)

    // Estrutura para exibir a categoria
    const spanCategoria = document.createElement("span");
    spanCategoria.textContent = categoriaSelecionada.charAt(0).toUpperCase() + categoriaSelecionada.slice(1);
    spanCategoria.classList.add("tarefa-categoria");
    
    const spanTexto = document.createElement("span");
    spanTexto.textContent = textoTarefa;
    spanTexto.classList.add("tarefa-texto");

    li.appendChild(spanCategoria);
    li.appendChild(spanTexto);

    // Alternar conclusão ao clicar
    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Botão de deletar
    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "✖";
    btnExcluir.classList.add("btn-delete");
    btnExcluir.addEventListener("click", (e) => {
        e.stopPropagation(); // Evita marcar como concluída ao apagar
        li.remove();
        // Verifica e esconde a mensagem de limite ao deletar
        if (listaTarefas.children.length < LIMITE_TAREFAS) {
            msgLimite.classList.add("d-none");
        }
        aplicarFiltro(); // Aplica o filtro novamente após a exclusão
    });

    li.appendChild(btnExcluir);
    listaTarefas.appendChild(li);

    inputTarefa.value = ""; // (B) Limpa o campo de input
    aplicarFiltro(); // Aplica o filtro após adicionar uma nova tarefa
});

// Adicionar com tecla Enter
inputTarefa.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        botaoAdicionar.click();
    }
});

// (D) Função para filtrar as tarefas
function aplicarFiltro() {
    const filtro = selectFiltro.value;
    const tarefas = listaTarefas.getElementsByTagName("li");

    for (let i = 0; i < tarefas.length; i++) {
        const tarefa = tarefas[i];
        const categoriaTarefa = tarefa.getAttribute("data-categoria");
        
        if (filtro === "todas" || categoriaTarefa === filtro) {
            tarefa.style.display = "flex"; // Mostra a tarefa
        } else {
            tarefa.style.display = "none"; // Esconde a tarefa
        }
    }
}

// (D) Adiciona o event listener para o filtro
selectFiltro.addEventListener("change", aplicarFiltro);