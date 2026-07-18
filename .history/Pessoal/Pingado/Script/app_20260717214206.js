const process = document.querySelector(".process");

const track = document.querySelector(".process__track");

const maxTranslate = track.scrollWidth - window.innerWidth;

window.addEventListener("scroll", () => {
    const distance = 
    window.scrollY - process.offsetTop;

    const translate = Math.max(
        0,
        Math.min(
            distance,
            maxTranslate
        )

    );

    track.style.transform = 
    `translateX(-${translate}px)`;
});

async function carregarCafeDoMes() {
    try {

        // Busca o JSON
        const resposta = await fetch("../API/db.json");
        const dados = await resposta.json();

        // Descobre o mês atual
        const mesAtual = new Date().getMonth() + 1;

        // Procura o objeto referente ao mês
        const mes = dados.find(item => item.mes === mesAtual);

        if (!mes) {
            console.log("Nenhum café encontrado para este mês.");
            return;
        }

        const container = document.getElementById("coffeeContainer");

        // Limpa os cards (caso a função seja chamada novamente)
        container.innerHTML = "";

        // Cria um card para cada café
        mes.cafes.forEach(cafe => {

            container.innerHTML += `
                <article class="coffee-card">

                    <div class="coffee-card__image">
                        <img
                            src="${cafe.imagem}"
                            alt="${cafe.nome}">
                    </div>

                    <div class="coffee-card__content">

                        <span class="coffee-card__origin">
                            ${cafe.origem}
                        </span>

                        <h3 class="coffee-card__title">
                            ${cafe.nome}
                        </h3>

                        <p class="coffee-card__notes">
                            ${cafe.notas.join(" • ")}
                        </p>

                        <button class="btn btn-terciary">
                            Assinar este café
                        </button>

                    </div>

                </article>
            `;

        });

    } catch (erro) {
        console.error("Erro ao carregar os cafés:", erro);
    }
}

carregarCafeDoMes();