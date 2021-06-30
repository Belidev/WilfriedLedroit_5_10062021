//fetch//
const URL = 
fetch('http://localhost:3000/api/furniture')
  .then((response) => response.json())
  .then((response) => {
  //affichage de la réponse dans la console//
    console.table(response);
    //déclaration de la variable HTML, qui va stocker les éléments HTML nécessaires//
    let html = "";
    //boucle qui duplique le HTML en fonction des index de la requete fetch//
    for(let i = 0; i < response.length; i++) {
      html += `<div class="itemBox-${[i]}">
      <h2 class="title">${response[i].name}</h2>
      <div class="pictureBox"><img class ="picture" src="${response[i].imageUrl}" alt="images de meubles en chêbe"></div>
      <p class="description">${response[i].description}</p>
      <p class="price">${(response[i].price/100)}€</p>
      <button class="furnitureButton"><a class="productlink" href="./front/products.html?id=${(response[i]._id)}">afficher la fiche produit</a></button></a>
      </div>`
    }
    //attribution de l'HTML généré à l'ID #article__container//
    document.getElementById("article__container").innerHTML = html
})
//erreur//
.catch(e => {
  errorMessage();
});