// EXERCÍCIO 1
// const machineName: string = "TornoCNC";
// const machineNumber: number = 10;
// const isOn: boolean = true;

// console.log(`Nome: ${machineName} | Número: ${machineNumber} | Ativo: ${isOn ? "Sim" : "Não"}`);

//EXERCICIO 2 - CADASTRO DE VEÍCULO
// type Veiculo = {
//     brand: string;
//     model: string;
//     year: number;
//     isEletric: boolean
// };

// const carro1 : Veiculo = {
//     brand: "Honda",
//     model: "ABC",
//     year: 2012,
//     isEletric: false
// }

// console.log(`Marca: ${carro1.brand} | Modelo: ${carro1.model} | Ano: ${carro1.year} | ${carro1.isEletric ? "É elétrico" : "Não é elétrico"}`);   

//EXERCICIO 3
interface Funcionario {
    name: string;
    salary: number;
}

interface Gerente {
    departamento?: string;
}

const funcionario : Funcionario = {
    name: "Marco",
    salary: 1000
}

const gerente : Gerente = {
    name: "Vinicius",
    salary: 3000,
}