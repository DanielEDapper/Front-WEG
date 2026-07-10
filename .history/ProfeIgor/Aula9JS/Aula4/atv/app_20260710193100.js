function adicionar(a, b){
    return a + b;
}

const subtrair = function(a, b)
{
    return a - b;
}

const multiplicar = (a, b) => a*b;

function ehPar(numero){
    return numero % 2 ===0;
}

function calcularMedia(numeros)
{
    if(numeros.length === 0) return 0;
    const soma = numeros.reduce((acc, curr) => acc + curr, 0);
    return soma / numeros.length;
}

console.log("Ex 5:", calcularMedia([1,2,3,4,5]));

const paraMaiusculas = (str) => str.toUpperCase();

function filtrarNumero(array, num)
{
    return array.filter(elemente => elemento > num);
}
let array7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num7 = 5;
console.log("Ex 7: ", filtrarNumero(array7, num7));

function contarOcorrencias(array, valor)
{
    return array.filter(elemento => elemento === valor).length;
}
let array8 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
let valor8 = 4;
console.log("Ex 8:", contarOcorrencias(array8, valor8));

function contarVogais(texto){
    const correspondencias = texto.match(/[aeiouáéíóúãõâêîôû]/gi);
    retur correspondencias ? correspondencias.length()
}