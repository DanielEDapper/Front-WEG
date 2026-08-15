// const myName: string = "Daniel";
// console.log(`Olá, ${myName}!! Está rodando OK!`);

/*
1. Node.js pronto na máquina;
2. Projeto NODE inicializado (package.json);
3. TYPESCRIPT instalado como dependencia de dev(desenvolvimento);
4. Compilador configurado (tsconfig.json);
5. Executor direto de desenvolvimento(tsx) configurado com atalho no npm run dev;
*/

// let age: number = 18;

// //Vamos tentar atribuir um texto em uma variavel a qual definimos como número
// age = 19;
// console.log(`Minha idade é ${age}`);

const nation: string = "Brasil";
let points: number = 10;
points = 20;
// nation = "Portugal";

console.log(`Nation: ${nation} || Pontos ${points}`);

//Array de texto: string[]
//Array de números: number[]
//Array de boolens: boolean[]

// Um array que só aceita textos

const frutas: string[] = ["Maça", "Banana", "Laranja"];

//adicionando um novo item no array
frutas.push(`Minha lista de frutas ${frutas}`)
