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

console.log("Ex ");