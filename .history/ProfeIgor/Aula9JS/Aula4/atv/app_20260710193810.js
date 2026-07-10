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
    return correspondencias ? correspondencias.length : 0;
}
let texto = "Exemplo de uma string qualquer:";
console.log("Ex 9: ", contarVogais(texto));

function criarArray(numero)
{
    let array = [];
    for(let i = 1; i <= numero; i++)
    {
        array.push(i);
    }
    return array;
}
let numero10 = 5;
console.log("Ex 10:", criarArray(numero10));

function numeroAleatorio()
{
    return Math.floor(Math.random() * 100) + 1;
}

function diferencaEmDias(data1, data2)
{
    const umDiaEmMilissegundos = 1000 * 60 * 60 * 24;
    const diferencaEmMilissegundos = Math.abs(data2.getTime() - data1.getTime());
    return Math.ceil(diferencaEmMilissegundos / umDiaEmMilissegundos);
}

console.log("Ex 13");
let frutas = ["maçã", "banana", "laranja"];

console.log("Segundo elemento: ", frutas[1]);

frutas.push("Manga");

frutas