/* O suco parece de limão que tem gosto de groselha e é de tamarindo.
No JS acontece a mesma coisa...nos confundimos e achamos que parametro é argumento, que argumento é default parameter.....e zaz!!!!Massssssssss cada um desses coleguinhas tem sua caixinha bem definida
 */

/* Parametro VS Argumento */

/* Parametro é a forma o molde. Ou seja: É a variavel declarada na criação da função(no parenteses de cima). Ela funciona como uma gaveta vazia esperando algo. 
   Argumento é o conteúdo real. Ou seja: É o valor real que enviamos dentro dessa gaveta vazia, quando de fato chamamos(executamos) a função.
*/


//  Exemplo: dataType001 que será o parametro(ou seja a gaveta vazia)

let typeDataLearned = function(dataType001, dataType002)
{
    console.log(`Nós aprendemos até aqui: ${dataType001} e ${dataType002}`);
}

//  Numbers é o argumento(o valor real que entra na gaveta vazia);
typeDataLearned("numbers", "strings");

/* Default Parameters

O problema: O que acontece se chamarmos typeDataLearned() sem passar nenhum argumento?
*/

let mostrarMensagem = function(param1 = "Eita", param2 = "acho que", param3 = "moio"){
    console.log(`Mensagem: ${param1}, ${param2}, ${param3}`);
}

mostrarMensagem();

mostrarMensagem("Não", "", "")