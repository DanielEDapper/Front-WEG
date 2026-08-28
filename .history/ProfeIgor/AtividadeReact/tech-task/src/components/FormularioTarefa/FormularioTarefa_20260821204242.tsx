import { useState } from "react";
import "./FormularioTarefa.css";

function onAdicionarTarefa(texto: string)
{
    const [textoTarefa, setTextoTerefa] = useState('');

    function handleCharge(e: React.ChangeEvent<HTMLInputElement>)
    {
        setTextoTerefa(e.target.value);
    }

    return(

    )
}

interface FormularioProps{

}