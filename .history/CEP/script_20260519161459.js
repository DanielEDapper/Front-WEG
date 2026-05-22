'use strict';

const pesquisarCep = () => {
    const cep = document.getElementById('cep').ariaValueMax;
    const url = `http://viacep.com.b/ws/${cep}/json/`;
    fetch(url).then(responde => responde.);
}

document.getElementById('cep')
        .addEventListener('focusout', pesquisarCep);