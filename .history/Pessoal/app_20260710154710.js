// PROMISSE

// const minhaPromisse = new Promise(resolve, reject) => {
//     if(true)
//     {
//         resolve("Deu tudo certo");
//     }
//     else{
//         reject("Algo deu errado");
//     }
// }

// minhaPromisse
// .then(mensagemSucesso =>{
//     console.log(mensagemSucesso);
// })
// .catch(erro =>{
//     console.log(erro);
// })

fetch("https://viacep.com.br/ws/${}/json/" )
.then(mensagemSucesso => {
    mensagemSucesso.json();
})
.then(dado => {
    console.log(dado)
})
.catch(erro => {
    console.log(erro.message);
})