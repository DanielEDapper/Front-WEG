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
        <form className="formulario-container">
            <h3>Formulário Interativo</h3>
            <div></div>
        </form>
    )
}

interface FormularioProps{

}