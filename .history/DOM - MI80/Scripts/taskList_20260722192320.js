const createTask = (event) =>{

    event.preventDefault();

    const list = document.querySelector('[data-list]');
    /* Agora que pegamos a ul com a data-list, nós utilizaremos o método: createElement. 
    Para que isso funcione, precisamos passar o document.createElement('li'). Nós colocaremos essa expressão dentro de uma variavel que ficará com a seguinte estrutura: const tarefa = document.createElement('li') */

    const input = document.querySelector('[data-form-input]');
    const inputValue = input.value;

    const task = document.createElement('li');
    /* Precisamos colocar algo dentro dessa li. E como faremos isso? Colocando o nosso template do paraglafo que está com a mensagem "Não apagar!!!" */

    const content = `<p class="content">${inputValue}</p>`;

    task.innerHTML = content;

    list.appendChild

    input.value = ' ';

    /* Nossa tarefa agora será criar elementos no DOM. Se vamos criar li  */
}

const newTask = document.querySelector('[data-form-button]');

newTask.addEventListener('click', createTask)



/* O que aconteceu na linha 3: chamamos o botão newTask.addEventListener('') que é o metodo que vai ficar escutando o evento. Passamos dentro dele o evento que nada mais é do que o 'click' e como segundo argumento passamos o console.log('clicou'). Só que aqui tem um pequeno problema. 
Nós pprecisamos de uma ação, e que ação é essa? Vamos passar uma função e essa função será executada assim que clicarmos.
*/

/* Como nós estamos trabalhando com o objetos e temos uma propriedade que faz exatamente o que queremos. Que propriedade é essa? Essa propriedade é chamada de "value". Então, input que nada mais é que o input do formulario, se nós utilizarmos o input com o value vai devolver o valor que está no formulário. E a sintaxe disso va ficar assim: input.value 
*/

/* A partir do momento que clicamos, ele vai executar essa função e vai percorrer o DOM, vai buscar o INPUT, vai pegaro alor que está dentro do INPUT, vao colocar o valor dentro do console.log e ira exibit essa valor no navegador.
*/