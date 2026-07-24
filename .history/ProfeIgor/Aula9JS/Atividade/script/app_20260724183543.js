const createElement = (event) => {
    event.preventDefault();

    const inputName = document.getElementById("input-nome");
    const inputNameValue = inputName.value;

    const inputPrice = document.getElementById("input-preco");
    const inputPriceValue = inputPrice.value;

    const list = document.getElementById("lista-produtos");

    const product = document.createElement("li");

    product.classList.add()

    const content = `<p class="info-po">${inputNameValue} e ${inputPriceValue}</p>`;
    product.innerHTML = content;

    list.appendChild(product);
}