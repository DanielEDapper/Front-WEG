import { useState } from "react";

import "./FormularioTarefa.css";

function FormularioTarefa({ onAdicionarTarefa }: FormularioProps) {

    const [textoTarefa, setTextoTerefa] = useState('');

    function handleCharge(e: React.ChangeEvent<HTMLInputElement>) {
        setTextoTerefa(e.target.value);
    }

    function handleCadastrar() {
        const texto = textoTarefa.trim();

        if (texto === '') return;

        onAdicionarTarefa(texto);

        setTextoTerefa('');
    }

    return (
        <>
            <h3>Formulário Interativo</h3>

            <div className="form-container">

                <div>
                    <label htmlFor="input-nome">
                        Digite a tarefa
                    </label>

                    <input
                        id="input-nome"
                        type="text"
                        value={textoTarefa}
                        onChange={handleCharge}
                        placeholder="Ex. Fazer 5S"
                        className="form-input"
                    />
                </div>

                <button
                    className="form-btn"
                    onClick={handleCadastrar}
                >
                    Cadastrar Tarefa
                </button>

            </div>
        </>
    );
}

interface FormularioProps {
    onAdicionarTarefa: (texto: string) => void;
}

export default FormularioTarefa;