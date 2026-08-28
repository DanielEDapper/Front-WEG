import { useState } from "react";
import type { Equipamento } from "../../types/Equipamento";
import CardEquipamento from "../CardEquipamento/CardEquipamento";
import "./ListaEquipamentos.css";

interface ListaEquipamentosProps{
    equipamentos : Equipamento[];
}

function ListaEquipamentos({equipamentos} : ListaEquipamentosProps)
{
    const [pesquisa, setPesquisa] = useState("");

    const equipamentosFiltrados = equipamentos.filter((equipamento) => 
        equipamento.nome.toLowerCase().includes(pesquisa.toLowerCase())        
    );

    return (
        <section>
            <div className="lista-header">
                <h2>Equipamentos Cadastrados</h2>
                <input 
                    type="text" 
                    placeholder="Pesquisar equipamento..."
                    className="lista-pesquisa"
                    value={pesquisa}
                    onChange={(evento) => setPesquisa(evento.target.value)}/>
            </div>
        

            {equipamentos.length === 0 ? (<p className="lista-vazia">Não possui equipamentos cadastrados</p>) : ""}
            
            <div className="lista">
                {equipamentosFiltrados.map((equipamento) => 
                (
                    <CardEquipamento
                    key={equipamento.codigo}
                    equipamento={equipamento}
                    />
                ))}
            </div>
        </section>
    )
}

export default ListaEquipamentos;