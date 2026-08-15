"use strict";
// const myName: string = "Daniel";
// console.log(`Olá, ${myName}!! Está rodando OK!`);
Object.defineProperty(exports, "__esModule", { value: true });
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
let user = {
    name: "Daniel",
    age: 18,
    isActive: true
};
// Usamos o molde do usuario
const isadora = {
    name: "Isadora",
    age: 17,
    isActive: true
};
console.log(`Usuário: ${isadora.name} | Idade ${isadora.age} | É Ativo? ${isadora.isActive ? "Sim" : "Não"}`);
//Usar o molde
const marco = {
    name: "Marco",
    age: 18,
    isActive: true
};
console.log(`Usuário: ${marco.name} | Idade ${marco.age} | É Ativo? ${marco.isActive ? "Sim" : "Não"}`);
//3. CRIANDO UM ADMIN
const daniel = {
    name: "Daniel",
    age: 18,
    isActive: true,
    // acessLevel: 1
};
console.log(`Usuário: ${daniel.name} | Idade ${daniel.age} | É Ativo? ${daniel.isActive ? "Sim" : "Não"} | Nivel de Acesso ${daniel.acessLevel}`);
//# sourceMappingURL=index.js.map