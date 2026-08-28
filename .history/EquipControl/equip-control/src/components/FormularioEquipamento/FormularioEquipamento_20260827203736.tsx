import "./FormularioEquipamento.css";

const setores = [
    "Montagem",
    "Usinagem",
    "Pintura",
    "Manutenção",
    "Expedição"
];

const status = [
    "OPERANDO",
    "ATENCAO",
    "PARADO"
];

interface FormularioEquipamentoProps{
    codigo : string
    nome : string
    setor : string[]
    status : string[]
}

function FormularioEquipamento({codigo, nome, setor, status} : FormularioEquipamentoProps)
{
    const [codigo, setCodigo] 
}