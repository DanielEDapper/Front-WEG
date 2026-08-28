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
        <div className="form-container">
            <h3>Formulário Interativo</h3>
            <div className="formulario-group">
                <label htmlFor="input-form">Digite a tarefa</label>
                <input id="input-nome"
                       type="text"
                       value={textoTarefa}
                       onChange={handleCharge}
                       placeholder="Ex. Fazer 5S"
                       className="form-input" />
            </div>

            <button className="form-btn">Cadastrar Tarefa</button>
        </div>
    )
}

interface FormularioProps{

}

export default onAdicionarTarefa();