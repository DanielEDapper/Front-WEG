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







// const nation: string = "Brasil";
// let points: number = 10;
// points = 20;
// // nation = "Portugal";

// console.log(`Nation: ${nation} || Pontos ${points}`);

// //Array de texto: string[]
// //Array de números: number[]
// //Array de boolens: boolean[]

// // Um array que só aceita textos

// const frutas: string[] = ["Maça", " Banana", " Laranja"];

// //adicionando um novo item no array
// frutas.push(" Uva");
// console.log(`Minha lista de frutas: ${frutas}`);

// // frutas.push(10);
// // console.log(`Minha lista de frutas: ${frutas}`);

// const grade: number[] = [8.5, 9.0, 7.5];
// console.log(`Notas do aluno: ${grade}`);











//DEFINIR O TIPO E OS TIPOS DE CADA PROPRIEDADE DENTRO DELE

let user: {
    name: string;
    age: number;
    isActive: boolean;
} = {
    name: "Daniel",
    age: 18,
    isActive: true
};

// console.log(`Usuário: ${user.name} | Idade ${user.age} | É Ativo? ${user.isActive ? "Sim" : "Não"}`);


// Criamos o molde de usuario
type User = {
    name: string;
    age: number;
    isActive: boolean;
};

// Usamos o molde do usuario
const isadora : User = {
    name: "Isadora",
    age: 17,
    isActive: true
};

console.log()