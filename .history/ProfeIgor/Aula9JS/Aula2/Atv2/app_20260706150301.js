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
const alertaCritico = "Critico";
//console.log(alertaCritico.toLowerCase);

/* Exercício 10: Padronização de Comandos CLP (Caixa Alta) */
const comandoCLP = "comando";
//console.log(alertaCritico.toUpperCase);

/* Exercício 11: Rastreamento de Caractere de Controle */
// console.log(comandoCLP.indexOf(2));

/* Exercício 12: Rastreamento de Fim de Lote */
// console.log(comandoCLP.indexOf("n"));

/* Exercício 13: Isolamento de Prefixo de Fornecedor */
const fabricanteRobo = "ABB.Robotics";
// console.log(fabricanteRobo.substring(0, 4));

/* Exercício 14: Atualização de Ordem de Serviço (O.S.) */
const statusAtualOS = "Status: Manutencao"
const nomeStatusOS = statusAtualOS.replace("Manutenção", "Concluido");

// console.log(nomeStatusOS);

/* Exercício 15: Operador de Resto (Separação de Sobras de Lote) */
const sobrePecas = 10 % 3;
// console.log(sobrePecas);

/* Exercício 16: Incremento de Unidades Produzidas */
let totalPecas = 6;
totalPecas++;
// console.log(totalPecas);

/* Exercício 17: Decremento de Unidades Refugadas */
totalPecas--;
// console.log(totalPecas);

/* Exercício 18: Atribuição Aditiva de Meta */
totalPecas += 4;
// console.log(totalPecas);

/* Exercício 19: Interpolação de Mensagem para Painel IHM */
const relatorioProducao = `O total de peças processadas é: ${totalPecas}`;
//console.log(relatorioProducao);

/* Exercício 20: Escape de Caracteres Especiais */
const nomeTecnico = 'Valvula de \'Seguranca\'';
// console.log(nomeTecnico);

/* Exercício 21: Formatação de Cadastro de Operador (Padrão ES5) */
const operadorNome = "joao silva";
let novoNomeOperador = operadorNome[0].toUpperCase() + operadorNome.slice(1.5) +  operadorNome[5].toUpperCase() + operadorNome.;

console.log(novoNomeOperador);