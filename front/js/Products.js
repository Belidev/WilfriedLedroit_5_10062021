/* Récupération de l'id du produit sélectionné dans la page précédente */
let params = new URLSearchParams(window.location.search);
//définition du constante, qui hébergera l'ID du produit
const idParams = params.get("id");
let getProductContainer = document.getElementById("product__container").innerHTML;
// bouton vers l'accueil
function buttonToIndex() {
    const buttonToIndex = document.getElementById("buttonToIndex")
    buttonToIndex.addEventListener('click', e => {
        window.location.assign("../index.html")
    })
}
function buttonToCart() {
    const buttonToIndex = document.getElementById("validationButton")
    buttonToIndex.addEventListener('click', e => {
        window.location.assign("./cart.html")
    })
}
/* Récupération du produit avec l'id associé depuis le serveur */ 
fetch(`http://localhost:3000/api/furniture/${idParams}`)
    .then((response) => response.json())
    .then(response => {
        //utilisation de la réponse, pour la génération du HTML
        let productHTML ="";
        let quantityHTML="";
        let html="";
        //déclaration d'une constante contenant un tableau des différentes options du produit
        const arrayProduct = response.varnish;
        //création du HTML, à incorporer dans le product__container
        html += `<div class="itemBox">
                    <h2 class="title">${response.name}</h2>
                    <div class="pictureBox"><img class ="picture" src="${response.imageUrl}" alt="images de meubles en chêbe"></div>
                    <p class="description">${response.description}</p>
                    <div class ="optionsBox">
                        <p class="price">Prix du produit à l'unité : ${(response.price/100)}€</p>
                            <form class="choice">
                            <p>Choissisez votre vernis :
                                <select id ="options" name = "productChoices">
                                </select>
                            </form>
                            </p>
                            <form class ="quantityForm">
                            <p class="quantityDescription">choisissez la quantité
                                <select id ="quantity">
                                </select>
                            </p>
                            </form>
                        <button id="addFurnitureButton">Ajouter ce produit au panier</button>
                    </div>
                </div>`;
            //intégration du contenu HTML dans le product__container
            document.getElementById("product__container").innerHTML = html
            //boucle qui génère le HTML des différentes options, selon la constante arrayProduct
            for(let i = 0; i < arrayProduct.length; i++) {
            productHTML += `<option>${arrayProduct[i]}`
            //intégration du HTML généré par la boucle dans le 
            document.getElementById("options").innerHTML = productHTML;
            }
        quantityHTML +=
        `<option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>`;
        document.getElementById("quantity").innerHTML = quantityHTML;
        //constante qui cible le bouton "addFurnitureButton"
        const button = document.getElementById("addFurnitureButton")
        //fonction qui, après un click sur button, envoit le nom, la valeur du produit récupéré ainsi que son prix, vers le localstorage. 
        button.onclick = function(){
            let productStorage = JSON.stringify([response.name, quantity.value , response.price/100]);
            localStorage.setItem(`${idParams}`, productStorage)
        }})
//appel des fonctions
buttonToIndex()
buttonToCart()

