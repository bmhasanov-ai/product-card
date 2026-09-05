import { products } from "./product.js";

const productList = document.getElementById("product-list");
const productTemplate = document.getElementById("product-template");

function renderProducts(productsArray) {
  productsArray.forEach(product => {
    const productElement = productTemplate.content.cloneNode(true);

    productElement.querySelector(".product__image").src = product.image;
    productElement.querySelector(".product__image").alt = product.name;

    productElement.querySelector(".product__description").textContent = product.description;

    productElement.querySelector(".product__name").textContent = product.name;

    productElement.querySelector(".product__properties").textContent = product.properties;

    product.compound.forEach(compoundItem => {
      const listItem = document.createElement("li");

      listItem.textContent = compoundItem;

      productElement.querySelector(".compound__list").append(listItem);
    });

    productElement.querySelector(".price__value").textContent = `${product.price} ₽`;

    productList.append(productElement);
  });
}

const cardsCount = getCardsCount();

const productsToRender = products.slice(0, cardsCount);

renderProducts(productsToRender);

const productDescriptions = products.reduce((acc, product) => {
  acc.push({ [product.name]: product.properties });
  return acc;
}, []);

function getCardsCount() {
  const cardsCount = Number(prompt("Сколько карточек отобразить? От 1 до 5"));

  return cardsCount >= 1 && cardsCount <= 5
    ? cardsCount
    : (alert("Введите число от 1 до 5") || getCardsCount());
}