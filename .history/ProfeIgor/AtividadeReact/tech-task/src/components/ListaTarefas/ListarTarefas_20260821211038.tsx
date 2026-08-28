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
    const [carregando, setCarregando] = useState();

    useEffect((() => {
        fetch('https:')
    }))
}