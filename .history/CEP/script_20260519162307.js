'use strict';

const pesquisarCep = () => {
    const cep = document.getElementById('cep').ariaValueMax;
    const url = `http://viacep.com.b/ws/${cep}/json/`;
    fetch(url).then(responde => console.log(responde.json()).then(console.log));

     
}

document.getElementById('cep')
        .addEventListener('focusout', pesquisarCep);