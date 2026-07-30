// const URL = "https://viacep.com.br/ws/01001000/json/";
const URL = "https://site-que-nao-existe-123.com"

let buscaCEP = fetch(URL)
.then(resposta => resposta.json()
.then(r => console.log();));

console.log(buscaCEP);


/* const pedido = new Promise(function
    (resolve, reject) 
    {
        if(recebeuPedido == true)
        {
            resolve("Maria recebeu o pedido!! :) ");
        }
        else{
            reject("Não foi possivel receber o pedido! :( ");
        }   
    }
)
*/



















// SINCRONOMO E ASSINCRONO

/* Onde os termos sincrono e assincrono funconam no nosso dia a dia?? 
Pense na hora do almoço e na rotina de pedir comida no refeitorio da fabrica.

Participamos de varias situações no restaurante da industria; seja ao entrar na fila 
do buffet presencial, onde você pede o prato ao atendente e ele te serve na hora.

Chamamos essa interação presencial e imediata no refeitorio de "SINCRONA"..... ou seja:
quando você e o atendente estão se comunicando ao mesmo tempo, simultaneamente.

Por outro lado, a comunicação "ASSINCRONA" também é muito usada ao pedir comida na industria. Por exemplo,quando a empresa usa um sistema interno, onde você envia uma mensagem pela manha  encomendado o seu prato e o refeitorio demora horas para precessar o pedido e confirma-lo.Essa é a comunicação ASSINCRONA.

Sabendo disso, quando enviamos uma mensagem no sistema do refeitorio pedindo a nossa refeição e eles demorar para responder, quais são as suas opções??? Você para de trabalhar, cruza os braços na linha de produção e fica esperando ou continua fazendo as suas atividades na fabrica até chegar a notificação de confirmação .

Isso é o qu eacontece em um sistema JAVASCRIPT também. Você pode ter um sistema sincrono, 
que é o padrão dele: responder uma tarefa apos a outra.

Temos também como fazer um sistema sincrono, com tarefas acontece e sendo conluidas uma a uma , mas permitindo que a confirmação do pedido fique em segundo plano enquanto você continua usando o sistema.

Agora, aplicaremos esse procedimento do JAVASCRIPT SINCRONO o padrao (considerando o exemplo da mensagem para o refeitório que demora para confirmar o almoço)

*/

// console.log("Enviamos pedido para o refeitório!!");
// // agora criaremos uma função mandaMensagem.

// function mandaMensagem () {
//     console.log("Gostaria de reservar o prato do dia!!!");
//     console.log("Vou te mandar a solicitação da refeição");
// }
// mandaMensagem();

// console.log("pedido recebido pela cozinha do refeitório");



/* Ele começou pela primeira linha do console.log, depois foi para a função mandaMensagem.
A função só executa quando é chamada. Fora das chaves {}, chamamos a mandaMensagem() que executou os 2 console.log dentro dela (ou seja está acontecendo estritamente uma coisa por vez).

Agora, imagine se esse processo do refeitório fosse muiitooooooooo mais longo do que isso, com processamento demorado. Quanto tempo a tela ficaria travada? Não seria muito melhor fazer esse pedido  acontecer em segundo plano para podermos realizar outras tarefas enquanto a cozinha não responde????????










/* SEGUNDO ASSUNTO: EVENTO LOOP E CALL STACK */


/* Nos vimos que o atendimento por padrão, funciona de forma sequencial e sincrona.Mas como funciona essa chamada de entrega dos pratos no fluxo de refeitório? Bora ver isso agora....

Podemos separar o fluxo do nosso refeitório em 3 partes:

1 - O atendente do balcão (Event loop);
2 - O balcão do atendimento (Call Stack);
3 - Fila de pedidos prontos (Task QUEUE).

Agora analisaremos o processo o qual montamos antes.

Quando o primeiro colaborador chega para pedir, o pedido dele vai direto para o "BALCÃO DE ATENDIMENTO". Essa ação entra no atendimento ativo. Em Seguida, vem o pedido de um combo completo (A receita desse combo já está pronta no cardapio, mas o atendente só começa a monta-lo quando o colaborador faz o pedido).

Então a rotina montarCombo() entra no "BALCÃO DE ATENDIMENTO" e permanence la até concluir as suas etapas: servir 2 itens na sequencia.

Cada um desses itens entra no balcão, é servido e entregua na bandeja. O arroz vai para a bandeja, a proteina entra é servida e vai para a bandeja e por fim a salada é montada e entregua.

Com isso, o combo principal é fincalizado e o atendimento do colaborador é liberado do "BALCAO DE ATENDIMENTO". Somente apos finalizar todas essas etapas é que o atendente aciona a instri~çao final que é: "PROXIMO DA FILA". Essa chamada é executada e o balcao fina livre para o proximo colaborador, Baseicamente é assim que funcioa um atendimento sincrino no refeitorio;

Resumo para entendermos melhor o papel de cada componente dentro desse fluxo.

O Antendere(Event Loop): É o coordenador do balçao. Ele monitora a fila o tempo e decide quem é atendido, se existe algum pedido pronto vindo da cozinha e quando o balcao fica livra para a proxima pessoa.

O Balcao de atendimento (Call Stack): É o espaço físico onde a comida é servida (apenas uma bandeja ou pedido é montado por vez). O atendente processa ali solicitações imeddiatas que precisam ser entregues na hora.

A fila de pedidos prontos (Task Queue): É o balcao de retirada, onde ficam agurdando as fichas dos pratos que a cozinha acabou de preparar, só esperando o balcao principal vagar para serem entregues.
*/









/* Terceiro Assunto: TASK QUEUE*/

/* 
Adiciona um temporizador de 5 segundos por exemplos ou 5000 milisegundos funciona exatamente como pedir um prato especial ou grelhado no restaurante da empresa enquanto a fila de atendimento continua andando

Como funciona isso na pratica:
1 - Você entra na fila e pega a refeição padrão do dia de forma sincrona (passa elo balçcao, pega o prato e os talheres sem parar);
2 - Ao pedir um grelhado, o cozinheiro não faz todo mundo da fábrica esperar atras de você até a carne ficar pronta. Ele aceita o pedido e coloca a carne na grelha com um temporizador de 5 segundos ou 5000 milisegundos configurado e libera voce pra frente do balcao.
3 - Enquanto a carne grelha em segundo plano (background), a fila do refeitorio continua fluindo normalmente para os outros funcionarios.
4 - Quando o tempo esgota, o temporizador apita (callback / interrupção) você aciona a chamada, retira o prato e colta para sua mesa para finalizar a refeição.

OBS.: Por padrçai, essa fila de atraso começa vazia, mas ela é indispensavem na automação das tarefas.
Sem ela qualquer tarefa de resposta demorada causaria um gargalo e travaria todo o fluxo de processamento do sistema.
*/









/* Quarto assundo antes da FETCH: CALLBACK */

/* Exemplo: Aconteceu um evento classico no refeitorio da fábrica no horario de maior volume, um operador fez um pedido de um prato sob modeda no balcão. A atendente registrou a ficha e entregou a ele um bip eletronico(ou senha). O operador não ficou parado no balcao travando a fila, ele foi até a mesa, pegou os talheres e 5 segundos depois o bip tocou e so ai ele retornou ao balcao para retirar a refeição pronta.

Voces podem estar estranhando essa metáfora e pensando que isso só acontece no dia a ia do almoço na empresa. Na programação e no dia a dia existem ações que dependem de outros eventos para acontecer. Como ser avisado que o prato ficou pronto para ir lá buscar. No desenvolvimento de software, essas ações ssiciadas, são chamadas de CALLBACKS e elas aparecem na automação e em sistemas o tempo todo.

Relembrando a nossa rotina de código: existe algum CALLBACK nessa dinamica do refeitorio???????
Simmmmmmmmmmmmmmmm. É a torina de buscar o prato que fica "guardada" e só é executada quanto o bip aciona. Ou seja, CALLBACKs nada mais sãoq eu funções enviadas como parametros por outras funções apenas quando determinado evento acontece.

Essas funções são disparadas, geralmente apos um tempo de espera (como a cozinha preparando o prato) ou em resposta a uma interação, o bip apitando ou o click em um botão de confirmação.

Uma forma clara de exemplificar e justificar o uso de CALLBACKs no processamento assincrono é exatamente a entrega desse BIP. O sistema programa a execução do código da rotina  (o bip tocar) para avisar o cliente assim que o tempo de preparo termina.

Caso a fila do refeitorio flui em segundo plano sem travar o atendimento dos proximos funcionarios e sem interromper as outras tarefas de quem está almoçando. Isso otimiza o tempo de intervalo e garante eficienca no processo.

Se a cozinha está demorando para fazer um grelhado, o cluiente não pracisa ficar congelado na grente do balcao, impedindo os colegas de pegarem a salada por exemplo. Ele continua a sua rotina até ser chamado.
*/






/* FETCH API */

/* 
Uma auditoria das industrias parceiras apontou fragilidade no processo de um antigo cadastro para que o supervisor da cozinha pudesse comprar os produtos para preparar as refeições. Precisamos reformular os campos de entrada desse novo formulario para eliminar erros de cadastro que atrasavam a entrega dos produtos.

Por exemplo: Um supervisor escreveu o nome do endereço da empresa que fica na Avenida das Industrias, ele escreveu o nome da via por extenso e ainda colocou o numero do gapão no mesmo campo: "Avenida das industrias, 715". Outro supervisor solocou: "Av" abreviada, "Indust" abreviada e o numero 715. O outro colocou "Av. Industrias" e o outro só "A. Industrias".

Para resolver isso, precisamos puxar os dados automáticos do CEP, e sabendo disso nís........ Iremos criar uma solucao consumindo uma API do ViaCep....


O que é uma API? É Application Programming Interface (Interface de Programação de Aplicações). Ela permite que dois componentes de SOFTWARE se comuniquem. Chamamos esses 2 lados de: Cliente e o Servidor. Então a API fica no meio fazendo a conexão. O cliente faz uma solicitação por essa API, ela faz os tramites e pede ao servidor para retornar a resposta.

Um exemplo: É quando estamos (cliente) em um restaurante e fazemos um pedido para o garçom (aqui o garçom) é uma API e a cozinha o Servidor que vai retornar a respota.
*/