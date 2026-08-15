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
// interface Funcionario {
//     name: string;
//     salary: number;
// }

// interface Gerente extends Funcionario {
//     departamento?: string;
// }

// const funcionario : Funcionario = {
//     name: "Marco",
//     salary: 1000
// }

// const gerente : Gerente = {
//     name: "Vinicius",
//     salary: 3000,
//     departamento: "CTW"
// }

// console.log(`Nome: ${funcionario.name} | Salario ${funcionario.salary}`);
// console.log(`Nome: ${gerente.name} | Salario ${gerente.salary} | Dpmt: ${gerente.departamento}`);

// EXERCICIO 4
// function calcularImposto(salary: number, aliquote: number): number {
//     return salary * (aliquote / 100);
// }

// const impost = calcularImposto(2000, 5);
// console.log(`Imposto: ${impost}`);

//EXERCICIO 5
// function exibirNotificacao(message: string, alertType: string) : void
// {
//     console.log(`[${alertType.toUpperCase()}] ${message}`);
// }

// exibirNotificacao("Servidor Iniciado com Sucesso!", "Atenção");


//EXERCICIO 6
interface Aluno {
    name: string;
    registration: number;
    grades: number[];
    isActive: boolean;
}

const turma: Aluno[] = [];

function cadastrarAluno(aluno: Aluno) : void{
    turma.push(aluno);
    console.log("Aluno inserido na turma com sucesso!!");
}

function calcularMedia(grade: number[]) : number{
    let notes = 0;
    grade.forEach(grades => {
        notes += grades;
    })

    return notes / 
}