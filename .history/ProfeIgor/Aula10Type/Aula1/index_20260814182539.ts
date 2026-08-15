// // const myName: string = "Daniel";
// // console.log(`Olá, ${myName}!! Está rodando OK!`);

// /*
// 1. Node.js pronto na máquina;
// 2. Projeto NODE inicializado (package.json);
// 3. TYPESCRIPT instalado como dependencia de dev(desenvolvimento);
// 4. Compilador configurado (tsconfig.json);
// 5. Executor direto de desenvolvimento(tsx) configurado com atalho no npm run dev;
// */

// // let age: number = 18;

// // //Vamos tentar atribuir um texto em uma variavel a qual definimos como número
// // age = 19;
// // console.log(`Minha idade é ${age}`);







// // const nation: string = "Brasil";
// // let points: number = 10;
// // points = 20;
// // // nation = "Portugal";

// // console.log(`Nation: ${nation} || Pontos ${points}`);

// // //Array de texto: string[]
// // //Array de números: number[]
// // //Array de boolens: boolean[]

// // // Um array que só aceita textos

// // const frutas: string[] = ["Maça", " Banana", " Laranja"];

// // //adicionando um novo item no array
// // frutas.push(" Uva");
// // console.log(`Minha lista de frutas: ${frutas}`);

// // // frutas.push(10);
// // // console.log(`Minha lista de frutas: ${frutas}`);

// // const grade: number[] = [8.5, 9.0, 7.5];
// // console.log(`Notas do aluno: ${grade}`);











// //DEFINIR O TIPO E OS TIPOS DE CADA PROPRIEDADE DENTRO DELE

// let user: {
//     name: string;
//     age: number;
//     isActive: boolean;
// } = {
//     name: "Daniel",
//     age: 18,
//     isActive: true
// };

// // console.log(`Usuário: ${user.name} | Idade ${user.age} | É Ativo? ${user.isActive ? "Sim" : "Não"}`);


// // Criamos o molde de usuario
// type User = {
//     name: string;
//     age: number;
//     isActive: boolean;
// };

// // Usamos o molde do usuario
// const isadora : User = {
//     name: "Isadora",
//     age: 17,
//     isActive: true
// };

// console.log(`Usuário: ${isadora.name} | Idade ${isadora.age} | É Ativo? ${isadora.isActive ? "Sim" : "Não"}`);

// //REUTILIZAÇÃO DE CÓDIGO

// //INTERFACE
// // a sintaxe é quase identica ao TYPE, só não usamos o simal de =

// //Criar o molde com a interface sem o =


// //1. INTERFACE BASE
// interface UserInterface {
//     name: string;
//     age: number;
//     isActive: boolean;
// }

// //Usar o molde
// const marco : UserInterface = {
//     name: "Marco",
//     age: 18,
//     isActive: true
// };

// console.log(`Usuário: ${marco.name} | Idade ${marco.age} | É Ativo? ${marco.isActive ? "Sim" : "Não"}`);

// // A "aura" da interface: Extensão

// // A grande vantagem da interface e a facilidade de HERDAR propriedade de outros moldes.
// //Imagina que no seu sistema existam usuarios e usuarios ADMs. O ADM tem tudo que o usuario tem (nome, idade e o isActive), mais um nivel de acesso: 


// //2.  INTERFACE ADMIN HERDA TUDO DE USUARIO E ADICIONA O NIVELACESSO
// interface Admin extends UserInterface {
//     acessLevel?: number;
// }

// //3. CRIANDO UM ADMIN
// const daniel: Admin = {
//     name: "Daniel",
//     age: 18,
//     isActive: true,
//     acessLevel: 1
// } 

// console.log(`Usuário: ${daniel.name} | Idade ${daniel.age} | É Ativo? ${daniel.isActive ? "Sim" : "Não"} | Nivel de Acesso ${daniel.acessLevel}`);


// FUNÇÕES

//Tipando parametros e retorno de funções

//Os parametros recebem tipos e apos os parenteses definimos o tipo de retorno

// function calcularDesconto(precoOriginal: number, porcentagem: number): number {
//     return precoOriginal - (precoOriginal * (porcentagem / 100));
// }

// const precoFinal = calcularDesconto(100, 15);

// console.log(`Preco com desconto: R$ ${precoFinal}`);

//E QUANDO A FUNÇÃO NÃO RETORNA NADA??????????????

//Se uma função serve apenas para executar uma ação (tipo imprimir algo no console ou salvar algo no banco de dados e não devolve nenhum valor com o return, dizemos que o retorno dela é void (vazio));

interface Usuario {
    nome: string;
    age: number;
}

//Essa função recebe um usuario e NAO retorna nada
function saudarUsuario(user: Usuario): void{
    console.log(`Olá, ${user.nome}`);
}

const meuUsuario = { nome: "Daniel", age: 18 };
saudarUsuario(meuUsuario);

//MINI PROJETO PRÁTICO

// Para consolidar tudo o que aprendemos hoje (variaveis, array, interface, type e funções com retorno e com void, voces vao construir um mini-sistema de GERENCIAMENTO DE PRODUTOS?
//Crie um array de produtos e duas novas unções:

// 1 - Uma para adicionar novos produtos no array;
// 2 - Um para listar todos os produtos e calcular o valor total de estoque;

interface Produto {
    name: string;
    price: number;
};

const produtos