import { useEffect, useState } from "react";
import "./ListaTarefas.css";

interface Tarefa{
    id: number; 
    title: string; 
    completed: boolean
};

function ListarTarefas()
{
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);
    const [busca, setBusca] = useState('');
    const [carregando, setCarregando] = useState(true);

    useEffect((() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=4')
        .then((resposta) => resposta.json())
        .then((dados : Tarefa[]) => {
            setTarefas(dados);
            setCarregando(false);
        })
        .catch((erro) => {
            console.log(erro);
            setCarregando(false);
        })

    }), []);

    const tarefasFiltradas = tarefas.filter(tarefa => 
        tarefa.title.toLowerCase().includes(busca.toLowerCase())
    );

    return(
        <div className="lista-container">

            <h3>Buscador de Tarefas</h3>

            <input type="text" 
                   placeholder="Digite um nome para buscar..." 
                   value={busca}
                   onChange={(e) => setBusca(e.target.value)}
                   className="buscador-input" />

            {carregando ? (<p className="lista-loading">Carregando tarefas...</p>) : ""}

            <p>Exibindo <strong>{tarefasFiltradas.length}</strong> de{' '}

            <strong>{tarefas.length}</strong> tarefas</p>

            {tarefasFiltradas.length === 0 ? 
            (
                <p className="lista-empty">
                    <em>Nenhuma tarefa encontrada...</em>
                </p>

            ) 
            : 
             <ul className="lista-ul">
                        {tarefasFiltradas.map((tarefa) => (
                            <li
                                key={tarefa.id}
                                className="lista-item"
                            >
                                <div>
                                    <strong className="lista-texto">
                                        {tarefa.title}
                                    </strong>

                                    <br />

                                    <small>
                                        Empresa: {tarefa.id}
                                    </small>
                                </div>

                                <button className="btn-excluir">
                                    Excluir
                                </button>

                            </li>

                        ))}

                    </ul>
            <ul className="lista-ul">
                {tarefasFiltradas.map((tarefa) => (
                    <li key={tarefa.id} className="lista-item">
                        <strong className="lista-texto">{tarefa.title} - {tarefa.completed}</strong>
                        <br />
                        <small>Empresa: {tarefa.id}</small>
                    </li>
                    
                ))}
            </ul>}
        </div>
    );
}

export default ListarTarefas;