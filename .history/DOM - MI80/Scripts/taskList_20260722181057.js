const newTask = document.querySelector('[data-form-button]');
const input = document.querySelector('[data-form-input]');

newTask.addEventListener('click', () => {
    console.log('clicou');
});

/* Como nós estamos trabalhando com o objetos e temos uma propriedade que faz exatamente o que queremos. Que propriedade é essa? Essa propriedade é chamada de "value". Então, input que é */

/* O que aconteceu na linha 3: chamamos o botão newTask.addEventListener('') que é o metodo que vai ficar escutando o evento. Passamos dentro dele o evento que nada mais é do que o 'click' e como segundo argumento passamos o console.log('clicou'). Só que aqui tem um pequeno problema. 
Nós pprecisamos de uma ação, e que ação é essa? Vamos passar uma função e essa função será executada assim que clicarmos.
*/