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
    const [carregando, setCarregando] = useState(true);

    useEffect((() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=4')
        .then((resposta) => resposta.json())
        .then((dados : Tarefa[]) => {
            setTarefas(dados);
            setCarregando(false);
        });
    }), [])
}