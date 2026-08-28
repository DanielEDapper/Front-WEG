import "./Resumo.css";

interface ResumoProps{
    total : number
    operando : number
    atencao : number
    parados : number
};

function Resumo({total, operando, atencao, parados} : ResumoProps)
{
    return(
        <div className="resumo">
            <div className="resumo-card ">
                <h2 className="resumo-label">Equipamentos</h2>
                <p className="resumo-valor">{total}</p>
            </div>
            <div className="resumo-card operando ">
                <h2 className="resumo-label">Operando</h2>
                <p className="resumo-valor">{operando}</p>
            </div>
            <div className="resumo-card">
                <h2 className="resumo-label">Atenção</h2>
                <p className="resumo-valor">{atencao}</p>
            </div>
            <div className="resumo-card">
                <h2 className="resumo-label">Parados</h2>
                <p className="resumo-valor">{parados}</p>
            </div>
        </div>
    );
}

export default Resumo;