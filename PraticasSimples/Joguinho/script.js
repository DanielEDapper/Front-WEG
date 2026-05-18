let roteiro = [];

let dados = [
    {
        categoria: "Atrações",
        nome: "Wat Phrathat Doi Suthep",
        descricao: "Templo Budista"
    },
    {
        categoria: "Atrações",
        nome: "Festival das lanternas",
        descricao: "Festival de Lanternas realizado tradicionalmento na Tailândia"
    },
    {
        categoria: "Transporte",
        nome: "Tuk Tuk",
        descricao: "Transporte Nacional da Tailândia"
    }
];

function mostrarCategoria(categoriaEscolhida)
{
    let conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = "";

    for (let i = 0; i < dados.length; i++) {

        if (dados[i].categoria === categoriaEscolhida) {

            conteudo.innerHTML +=
            "<h3>" + dados[i].nome + "</h3>" +
            "<p>" + dados[i].descricao + "</p>" +
            "<button onclick=\"adicionarAoRoteiro('" + dados[i].nome + "')\">Adicionar</button>"
        }
    }
}

function adicionarAoRoteiro(item)
{
    roteiro.push(item);
    console.log(roteiro);
    alert(item + "adicionado ao roteiro");
}

function verRoteiro()
{
    let conteudo = document.getElementById("conteudo");

    conteudo.innerHTML = "<h2>Seu Roteiro:</h2>";

    for(let i = 0; i < roteiro.length; i++)
    {
        conteudo.innerHTML += "<p>" + reteiroi[i] + "</p>"
    }
}