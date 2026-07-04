// MÉTODO INDEXOF

/*
Esse colega pelo o index ou seja a posição do caracter que voce determinar. Nós queremos dizer para o indexOf que nós gostariamos que ele busque o caracter "$" dentro de uma const chamada moneyValue. Reparem que como nós estamos especificando que queremos buscar uma string temos que passar essa $ entre aspas (pode ser simples ou duplas).
*/

// const moneyValue = "R$150";

// const position = moneyValue.indexOf(1);

// console.log(position);




// Strings - Concatenação de Strings com número

/*Podemos concatenas string com o operador "+".*/

// const amountBricks = 28;
// const houseWall = "A caso possui " + amountBricks + " tijolos na parede"



// Criaremos uma string que contem 3 consts;

// const streetName = "Rua Venâncio da Silva Porto";
// const amountAnimals = 2;
// const animalsNames = "Rex e o Astolpho";

// // const companyInfo = "A empresa localizada na ' "+ streetName + "', tem " + amountAnimals + " animais, eles são o " + animalNames;
// const companyInfo = `A empresa localizada na ${streetName} tem: ${amountAnimals} animais, ${animalsNames} eles são muito brincalhões!!`

// console.log(companyInfo);

// const streetName = "Rua Venâncio da Silva Porto";
// const amountAnimals = 2;
// const animalsNames = "Rex e o Astolpho";
// const favoriteToy = " é a bolinha";

// const factoryInfoTemplate = `
//     <h3>${streetName}</h3>
//     <p>${amountAnimals}</p>
//     <p>${animalsNames}</p>
//     <span>e o nosso brinquedo favorito${favoriteToy}</span>
// `

// console.log(factoryInfoTemplate);

// NULL

/*O que é esse NULL: é um valor nulo... que não tem nenhum valor em uma variavel.*/

// let nothingHere = null;

// console.log(`Tem algum valor aí? ${nothingHere}`);

// UNDEFINED

// let nothingHere;

// console.log(`Tem algum valor aí? ${nothingHere}`);

// ARRAYS
/* Usamos o array para guardarmos uma lista de valores que usualmente tem uma relação entre si.
Oidenis guardar uma lista que possui numeros ou uma lista que possui strings. Exemplo: Um array de números que possui os números dos meses do ano   */

// const worldCupYears = [2010, 2014, 2018, 2022, 2026];

// console.log(worldCupYears);

// let worldCupChampions = ["Spain", "Germany", "France", "Argentine", "Brasil"];

// // console.log(worldCupChampions[4]);

// const worldCupYears = [2010, 2014, 2018, 2022, 2026];

// const mixWorldCup = [2014, "Germany", 2026, "Brasil"];

// console.log(mixWorldCup);

// ARRAY É PUSH (Método Push)

/* Método Push: Vai incluir novos elementos no final do ARRAY e retornará o seu comprimento(length)*/

let worldCupChampions = ["Spain", "Germany", "France", "Argentine", "Brasil"];

let nomeTwoWorld