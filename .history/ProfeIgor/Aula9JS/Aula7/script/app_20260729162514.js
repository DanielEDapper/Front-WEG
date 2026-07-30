// SINCRONOMO E ASSINCRONO

/* Onde os termos sincrono e assincrono funconam no nosso dia a dia?? 
Pense na hora do almoço e na rotina de pedir comida no refeitorio da fabrica.

Participamos de varias situações no restaurante da industria; seja ao entrar na fila 
do buffet prsencial, onde você pede o prato ao atendente e ele te serve na hora.

Chamamos essa interação presencial e imediata no refeitorio de "SINCRONA"..... ou seja:
quando você e o atendente estão se comunicando ao mesmo tempo, simultaneamente.

Por outro lado, a comunicação "ASSINCRONA" também é muito usada ao pedir comida na industria. Por exemplo,quando a empresa usa um sistema interno, onde você envia uma mensagem pela manha  encomendado o seu prato e o refeitorio demora horas para precessar o pedido e confirma-lo.Essa é a comunicação ASSINCRONA.

Sabendo disso, quando enviamos uma mensagem no sistema do refeitorio pedindo a nossa refeição e eles demorar para responder, quais são as suas opções??? Você para de trabalhar, cruza os braços na linha de produção e fica esperando ou continua fazendo as suas atividades na fabrica até chegar a notificação de confirmação .

Isso é o qu eacontece em um sistema JAVASCRIPT também. Você pode ter um sistema sincrono, 
que é o padrão dele: responder uma tarefa apos a outra.

Temos também como fazer um sistema sincrono, com tarefas acontece e sendo conluidas uma a uma , mas permitindo que a confirmação do pedido fique em segundo plano enquanto você continua usando o sistema.

Agora, aplicaremos esse procedimento do JAVASCRIPT SINCRONO o padrao (considerando o exemplo da mensagem para o refeitório que demora para confirmar o almoço)

*/

console.log("Enviamos pedido para o refeitório!!");
// agora criaremos uma função mandaMensagem.

function mandaMensagem () {
    console.log("Gostaria de reservar o prato do dia!!!");
    console.log("Vou te mandar a solicitação da refeição");
}
mandaMensagem();

console.log("pedido recebido pela cozinha do refeitório");



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

Cada um desses itens estra no balão, é servido e entregua na bandeja. O arroz vai para a bandeja, a proteina entra é servida e vai para a bandeja e por fim a salada é montada e entregua.

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

OBS.: Por padrçai, essa fila de atraso começa vazia, mas ela é indispensavem na 
*/