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

const streetName = "Rua Venâncio da Silva Porto";
const amountAnimals = 2;
const animalsNames = "Rex e o Astolpho";
const favoriteToy = "é a bolinha";

const factoryInfoTemplate = `
    <h3>${streetName}</h3>
    <p></p>

`