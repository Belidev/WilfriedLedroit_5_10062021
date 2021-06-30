/* Récupération de l'id du produit sélectionné dans la page précédente */
let params = new URLSearchParams(window.location.search);
const idParams = params.get("id");
const button = document.getElementById("furnitureButton");
let getProductContainer = document.getElementById("product__container").innerHTML;

/* Récupération du produit avec l'id associé depuis le serveur */ 

fetch(`http://localhost:3000/api/furniture/${idParams}`)
    .then((response) => response.json())
    .then(response => {
        let productHTML ="";
        let quantityHTML="";
        let html="";
        const arrayProduct = response.varnish;
        html += `<div class="itemBox">
                    <h2 class="title">${response.name}</h2>
                    <div class="pictureBox"><img class ="picture" src="${response.imageUrl}" alt="images de meubles en chêbe"></div>
                    <p class="description">${response.description}</p>
                    <p class="price">${(response.price/100)}€</p>
                        <form class="choice">
                            <select id ="options" name = "productChoices">
                            </select>
                        </form>
                        <form>
                        <p class="quantityDescription">choisissez la quantité</p>
                            <select id ="quantity">
                            </select>
                        </form>
                    <button id="furnitureButton">Ajouter ce produit au panier</button>
                </div>`;
        document.getElementById("product__container").innerHTML = html
            for(let i = 0; i < arrayProduct.length; i++) {
            productHTML += `<option>${arrayProduct[i]}`
            document.getElementById("options").innerHTML = productHTML;
            }
        quantityHTML +=
        `<option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>`;
        document.getElementById("quantity").innerHTML = quantityHTML;
        const button = document.getElementById("furnitureButton")
        button.onclick = function(){
            let productStorage = JSON.stringify([response.name, quantity.value , response.price/100]);
            localStorage.setItem(`product${idParams}`, productStorage)
        }})

