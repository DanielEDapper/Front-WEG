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
        <div>
            <div>
                <h2>Equipamentos</h2>
                <p>{total}</p>
            </div>
            <div>
                <h2>Operando</h2>
                <p>{operando}</p>
            </div>
            <div>
                <h2>Atenção</h2>
                <p>{atencao}</p>
            </div>
            <div>
                <h2>Parados</h2>
                <p>{parados}</p>
            </div>
        </div>
    )
}