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
            <h3 className="lista-texto">Buscador de Usuarios</h3>
            <input type="text" 
                   placeholder="Digite um nome para buscar..." 
                   value={busca}
                   onChange={(e) => setBusca(e.target.value)}
                   className="buscador-input" />

            {carregando ? (<p></p>) : ""}

            <p>Exibindo <strong>{tarefasFiltradas.length}</strong> de{' '}
            <strong>{usuarios.length}</strong> usuarios</p>

            {usuariosFiltrados.length === 0 ? (
                <p>
                    <em>Nenhum usuario encontrado com esse nome.</em>
                </p>
            ) : <ul className="lista-usuarios">
                {usuariosFiltrados.map((usuario) => (
                    <li key={usuario.id} className="item-usuario">
                        <strong>{usuario.name} - {usuario.email}</strong>
                        <br />
                        <small>Empresa: {usuario.company.name}</small>
                    </li>
                    
                ))}</ul>}
        </div>
    );


}