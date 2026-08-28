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
            <div className="formulario-group">
                <label htmlFor="input-form">Digite</label>
            </div>
        </form>
    )
}

interface FormularioProps{

}