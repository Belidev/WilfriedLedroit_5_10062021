function buttonToProduct(){
    const buttonToProduct = document.getElementById("furnitureButton")
    buttonToProduct.addEventListener('click', e => {
      window.location.assign(`./front/products.html?id=${(response[i]._id)}`)
  })
  }
//déclaration de la fonction fetch, qui affiche également le HTML correspondant//
function allProductsDisplay(){
  fetch('http://localhost:3000/api/furniture')
    .then((response) => response.json())
    .then((response) => {
    //déclaration de la variable html, qui va stocker les éléments HTML nécessaires//
    let html = "";
    //boucle qui duplique le HTML en fonction des index des résultats la requête fetch//
    for(let i = 0; i < response.length; i++) {
      html += `<div class="itemBox-${[i]}">
      <h2 class="title">${response[i].name}</h2>
      <div class="pictureBox"><img class ="picture" src="${response[i].imageUrl}" alt="images de meubles en chêbe"></div>
      <p class="description">${response[i].description}</p>
      <p class="price">${(response[i].price/100)}€</p>
      <a id="furnitureButton${i}" href = "./front/products.html?id=${(response[i]._id)}">afficher la fiche produit</a>
      </div>`
    }
    //attribution de l'HTML généré à l'ID #article__container//
    document.getElementById("article__container").innerHTML = html
})
//erreur//
  .catch(error => {
    window.alert("erreur de connexion au serveur, veuillez réessayer ultérieurement");
  })};
//Appel des fonctions
allProductsDisplay();