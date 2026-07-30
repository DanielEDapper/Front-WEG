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

Cada um desses itens estra no balão, é servido e entregua na bandeja. O arroz vao prara a bandeja, a proteina entra é servida e vai para a bandeja e por fim a selada é montada e entregua.


Com isso, o combo principal é fincalizado e o atendimento do colaborador é liberado do "BALCAO DE ATENDIMENTO". Somente apos finalizar todas essas etapas é que o atendente aciona a instri~çao final que é: "PROXIMO DA FILA". Essa chamada é executada e o balcao fina livre para o proximo colaborador, Baseicamente é assim que funcioa um atendimento sincrino no refeitorio;

Resumo para entendermos melhor o papel de cada componente dentro desse fluxo.

O Antendere(Event Loop): É o coordenador do balçao. Ele monitora a fila o tempo e decide quem é atendido, se existe algim

*/