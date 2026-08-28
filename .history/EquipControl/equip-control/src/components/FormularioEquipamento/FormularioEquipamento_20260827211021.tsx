import { useState } from "react";
import "./FormularioEquipamento.css";

import type { Equipamento } from "../../types/Equipamento";

const setores = [
    "Montagem",
    "Usinagem",
    "Pintura",
    "Manutenção",
    "Expedição"
];

const statusDisponiveis = [
    "OPERANDO",
    "ATENCAO",
    "PARADO"
];

interface FormularioEquipamentoProps {
    adicionarEquipamento: (equipamento: Equipamento) => void;
}

function FormularioEquipamento({adicionarEquipamento}: FormularioEquipamentoProps) {

    const [codigo, setCodigo] = useState("");
    const [nome, setNome] = useState("");
    const [setor, setSetor] = useState("");
    const [status, setStatus] = useState("");

    function cadastrar() {

        const codigoLimpo = codigo.trim();
        const nomeLimpo = nome.trim();

        const novoEquipamento: Equipamento = {
            codigo: codigoLimpo,
            nome: nomeLimpo,
            setor: setor,
            status: status
        };

        adicionarEquipamento(novoEquipamento);

        setCodigo("");
        setNome("");
        setSetor("");
        setStatus("");
    }

    return (
        <section>
            <h2>Novo Equipamento</h2>
            <form onSubmit={(event) => {
                event.preventDefault();
                cadastrar();
            }}>

                <div>
                    <label>Código</label>

                    <input
                        type="text"
                        value={codigo}
                        onChange={(event) => setCodigo(event.target.value)}
                        placeholder="Ex: MTR-006"
                    />
                </div>

                <div>
                    <label>Nome</label>

                    <input
                        type="text"
                        value={nome}
                        onChange={(event) => setNome(event.target.value)}
                        placeholder="Ex: Motor Elétrico"
                    />
                </div>

                <div>
                    <label>Setor</label>

                    <select
                        value={setor}
                        onChange={(event) => setSetor(event.target.value)}
                    >
                        <option value="">
                            Selecione um setor
                        </option>

                        {setores.map((setor) => (
                            <option key={setor} value={setor}>
                                {setor}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label>Status</label>

                    <select
                        value={status}
                        onChange={(event) => setStatus(event.target.value)}
                    >
                        <option value="">
                            Selecione um status
                        </option>

                        {statusDisponiveis.map((status) => (
                            <option key={status} value={status}>
                                {status}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit">
                    + Cadastrar equipamento
                </button>

            </form>

        </section>
    );
}

export default FormularioEquipamento;