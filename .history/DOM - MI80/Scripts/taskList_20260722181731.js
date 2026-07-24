const newTask = document.querySelector('[data-form-button]');
const input = document.querySelector('[data-form-input]');
const inputValue = input.value;

newTask.addEventListener('click', () => {
    const input = document.querySelector('[data-form-input]');
    const inputValue = input.value;

    console.log(inputValue);
});



/* O que aconteceu na linha 3: chamamos o botão newTask.addEventListener('') que é o metodo que vai ficar escutando o evento. Passamos dentro dele o evento que nada mais é do que o 'click' e como segundo argumento passamos o console.log('clicou'). Só que aqui tem um pequeno problema. 
Nós pprecisamos de uma ação, e que ação é essa? Vamos passar uma função e essa função será executada assim que clicarmos.
*/