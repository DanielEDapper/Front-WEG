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
    if(!mensagemSucesso.ok())7
 +
 {
        throw new Error("Erro na requisição: "+mensagemSucesso.status);
    }
    else{
        return mensagemSucesso.json();
    }
})
.then(dado => {
    console.log(dado);
})
.catch(erro => {
    console.log(erro.message);
})