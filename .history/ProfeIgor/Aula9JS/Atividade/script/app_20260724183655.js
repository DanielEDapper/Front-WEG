const createElement = (event) => {
    event.preventDefault();

    const inputName = document.getElementById("input-nome");
    const inputNameValue = inputName.value;

    const inputPrice = document.getElementById("input-preco");
    const inputPriceValue = inputPrice.value;

    const list = document.getElementById("lista-produtos");

    const product = document.createElement("li");

    product.classList.add('item-produto');

    const content = `<p class="info-produto">${inputNameValue} e ${inputPriceValue}</p>`;
    product.innerHTML = content;

    list.appendChild(product);
}

const newProduct = document.getElementById("btn-adicionar");

newProduct.addEventListener("click", ())