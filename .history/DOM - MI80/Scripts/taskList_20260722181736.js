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

/* Como nós estamos trabalhando com o objetos e temos uma propriedade que faz exatamente o que queremos. Que propriedade é essa? Essa propriedade é chamada de "value". Então, input que nada mais é que o input do formulario, se nós utilizarmos o input com o value vai devolver o valor que está no formulário. E a sintaxe disso va ficar assim: input.value 
*/

/* A  */