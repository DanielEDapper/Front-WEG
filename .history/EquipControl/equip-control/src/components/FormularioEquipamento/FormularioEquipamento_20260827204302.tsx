import { useState } from "react";
import "./FormularioEquipamento.css";

const setores = [
    "Montagem",
    "Usinagem",
    "Pintura",
    "Manutenção",
    "Expedição"
];

const status = [
    "OPERANDO",
    "ATENCAO",
    "PARADO"
];

interface FormularioEquipamentoProps{
    adicionarEquipamento();
}

function FormularioEquipamento({adicionarEquipamento} : FormularioEquipamentoProps)
{
    const [codigo, setCodigo] = useState('');
    const [nome, setNome] = useState(' ');
    const [setor, setSetor] = useState([]);
    const [status, setStatus] = useState([]);

    function cadastrar(){
        const cod
    }
}