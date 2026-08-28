import { useState } from "react";
import "./FormularioTarefa.css";

function FormularioTarefa({onAdicionarTarefa} : FormularioProps)
{
    const [textoTarefa, setTextoTerefa] = useState('');

    function handleCharge(e: React.ChangeEvent<HTMLInputElement>)
    {
        setTextoTerefa(e.target.value);
    }

    

    return(
        <div className="form-container">
            <h3>Formulário Interativo</h3>
            <div>
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
    );
}

interface FormularioProps{
    onAdicionarTarefa: (texto: string) => void;
}

export default FormularioTarefa