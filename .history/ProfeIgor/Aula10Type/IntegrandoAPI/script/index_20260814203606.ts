const APIKEY : string = "https://dynamic-events-api.onrender.com/api";

let allPrograms = [];

async function searchAllPrograms(){

    try {
        const programs = await fetch(APIKEY);

        if(!programs.ok)
        {
            console.log("Erro");
            return;
        }

        const programsConverted = await programs.json();
        allPrograms = programsConverted.sort((a, b) => a.destaque - b.destaque);

        renderAllPrograms(allPrograms);
    } catch (error) {
        
    }
    
}

async function renderAllPrograms(programs){
    let html = "";
    const programsList = document.getElementById("listaProgramas") as HTMLElement;

    programs.forEach(program => {
        html += `
        <article class="program-card program-card--featured">
            <div class="program-card__image-wrap">
              <img
                class="program-card__image"
                src="${program.imagem}"
                alt="${program.nome}"
              />
            </div>

            <div class="program-card__body">
              <div class="program-card__meta">
                <span class="badge">${program.categoria}</span>
                <span class="${program.destaque ? "badge badge--primary" : "badge"}>${program.destaque ? "Destaque" : ""}</span>
              </div>

              <h3>${program.nome}</h3>
              <p>
                ${program.descricao}
              </p>

              <div class="program-card__details">
                <span>${program.data.replace("T", " | ").replace("Z", " ")}</span>
                <span>${program.local}</span>
              </div>

              <div class="program-card__footer">
                <strong>R$ ${program.preco}</strong>
                <span class="vagas vagas--baixas">${program.vagas_disponiveis} vagas disponíveis</span>
              </div>

              <a class="btn btn-outline" href="detalhe.html?id=${program.id}">Ver detalhes</a>
            </div>
          </article>
        `
    });

    programsList.innerHTML = html;
}