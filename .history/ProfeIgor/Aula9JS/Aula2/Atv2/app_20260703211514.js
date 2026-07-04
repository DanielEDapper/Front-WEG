/* Exercício 03: Registro de Log no Barramento */
console.log("Planta: Automotiva - Setor: Estamparia - Linha: M180");

/* Exercício 04: Identificadores Dinâmicos de Maquinário */
const tipoMaquina = "Injetora";
const modeloAntigo = "Quarenta";
const modeloNovo = "Quarenta e um";
const maquinaAtiva = tipoMaquina + " " + modeloNovo;

// console.log(maquinaAtiva);

/* Exercício 05: Extração e Tratamento de Dados de Sensores */
const componenteIndustrial = "SensorIndutivo";
const siglaComponente = componenteIndustrial.charAt(0) + componenteIndustrial.charAt(6); 

// console.log(siglaComponente);

/* Exercício 06: Gerador Automático de TAG de Ativo (Asset Tag) */
const maquinario = "Eixos De Transmissão";
const asset = maquinario[0] + maquinario[6] + maquinario[9];

// console.log(asset.toL);

/* Exercício 07: Validação de Comprimento de Dados */
// console.log(componenteIndustrial.length);

/* Exercício 08: Verificação Dinâmica de Fim de Linha de Firmware */
const codigoLote = "socorro";
const ultimaLetra = codigoLote.length;
// console.log(codigoLote.charAt(ultimaLetra));

/* Exercício 09: Padronização de Logs (Caixa Baixa) */
const alertaCritico = ""