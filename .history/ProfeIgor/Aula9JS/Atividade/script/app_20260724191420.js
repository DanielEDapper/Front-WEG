const totalValue = 0.00;

const createElement = (event) => {

    event.preventDefault();

    const inputName = document.getElementById("input-nome");
    const inputNameValue = inputName.value;

    const inputPrice = document.getElementById("input-preco");
    const inputPriceValue = parseFloat(inputPrice.value);

    const list = document.getElementById("lista-produtos");

    const product = document.createElement("li");

    product.classList.add('item-produto');

    const content = `<p class="info-produto"><strong>${inputNameValue}</strong> - R$ ${inputPriceValue.toFixed(2)}</p>
                     <button class="btn-remover">Excluir</button>
    `;
    product.innerHTML = content;

    list.appendChild(product);

    const priceElement = document.getElementById("valor-total");
    totalValue += priceElement;

    priceElement.textContent = `R$%{}`
}

const newProduct = document.getElementById("btn-adicionar");

newProduct.addEventListener("click", createElement);

const list = document.getElementById("lista-produtos");

list.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-remover")) {
    const item = event.target.closest(".item-produto");
    item.remove();
  }
});