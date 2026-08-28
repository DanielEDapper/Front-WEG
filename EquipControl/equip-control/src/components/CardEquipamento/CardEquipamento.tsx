import type { Equipamento } from "../../types/Equipamento";
import "./CardEquipamento.css";

interface CardEquipamentoProps{
    equipamento : Equipamento;
};

function CardEquipamento({equipamento} : CardEquipamentoProps)
{
    return(
        <div className="card-equipamento">

            <div className="card-topo">
                <h3 className="card-codigo">{equipamento.codigo}</h3>

                <h3 className={`card-status ${equipamento.status.toLowerCase()}`}>
                    {equipamento.status}
                </h3>
            </div>

            <h2 className="card-nome">{equipamento.nome}</h2>
            <h3 className="card-setor">{equipamento.setor}</h3>
        </div>
    )
}

export default CardEquipamento;