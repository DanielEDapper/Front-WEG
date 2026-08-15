const APIKEY : string = "https://dynamic-events-api.onrender.com/api";

let allPrograms = [];

async function searchAllPrograms(){

    const programs = await fetch(APIKEY);

    if(!programs.ok)
    {
        console.log("Erro");
        return;
    }

    const programsConverted = await programs.json();
    allPrograms = programsConverted.sort((a, b) => a.destaque - b.destaque);

    renderAllPrograms(allPrograms);
}

async function renderAllPrograms(programs){
    let html = "";

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
                <span class="badge badge--primary">${program}</span>
              </div>

              <h3>Eficiência Energética em Motores IE4</h3>
              <p>
                Treinamento para engenheiros e técnicos sobre dimensionamento de motores de alta eficiência e retorno de investimento.
              </p>

              <div class="program-card__details">
                <span>20/03/2026, 09:00</span>
                <span>Auditório WEG Motores — Jaraguá do Sul, SC</span>
              </div>

              <div class="program-card__footer">
                <strong>R$ 690,00</strong>
                <span class="vagas vagas--baixas">6 vagas disponíveis</span>
              </div>

              <a class="btn btn-outline" href="detalhe.html?id=ev_1e6d6ac9">Ver detalhes</a>
            </div>
          </article>
        `
    })
}