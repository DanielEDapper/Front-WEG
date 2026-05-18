let tarefas = [];

function cadastrarTarefa()
{
    const input = document.getElementById("tarefasInput");

    if(input.value.trim() === "")
    {
        alert("Digite uma tarefa!");
        return;
    }

    const tarefa = {
        texto: input.value,
        concluida: false
    };

    tarefas.push(tarefa);

    input.value = "";

    listarTarefas();
}

function excluirTarefa(index)
{
    tarefas.splice(index, 1);

    listarTarefas();
}

function concluirTarefa(index)
{
    tarefas[index].concluida = !tarefas[index].concluida;

    listarTarefas();
}

function editarTarefa(index)
{
    const novoTexto = prompt(
        "Editar tarefa:",
        tarefas[index].texto
    );

    if(novoTexto !== null && novoTexto.trim() !== "")
    {
        tarefas[index].texto = novoTexto;

        listarTarefas();
    }
}

function listarTarefas()
{
    const lista = document.getElementById("listaTarefas");

    lista.innerHTML = "";

    tarefas.forEach((tarefa, index) => {

        lista.innerHTML += `
        
        <li class="${tarefa.concluida ? 'concluida' : ''}">

            <span>
                ${tarefa.texto}
            </span>

            <div class="acoes">

                <button onclick="concluirTarefa(${index})">
                    ✔
                </button>

                <button onclick="editarTarefa(${index})">
                    ✏
                </button>

                <button onclick="excluirTarefa(${index})">
                    🗑
                </button>

            </div>

        </li>

        `;
    });
}