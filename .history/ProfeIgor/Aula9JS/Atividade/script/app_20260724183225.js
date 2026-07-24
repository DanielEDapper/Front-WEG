const createElement = (event) => {
    event.preventDefault();

    const inputName = document.getElementById("input-nome");
    const inputNameValue = inputName.value;

    const inputPrice = document.getElementById("input-preco");
    const inputPriceValue = inputPrice.value;

    const list = document.getElementById("lista-produtos");

    const product = document.createElement("li");


    const content = `<p>$</p>`
}