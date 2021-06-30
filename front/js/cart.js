//fonction qui récupère chaque clef du localstorage, en fonction de l'argument
function getKey(index){
    return localStorage.key(index);
}
//fonction qui récupère un tableau de valeurs, à partir de la clef définie dans l'argument getKey
function getValueFromKey(index){
    return(JSON.parse(localStorage.getItem(getKey(index))));
}
//fonction qui récupère le nom d'un produit
function getProductName(index){
    return(getValueFromKey(index)[0])
}
//fonction qui récupère le prix d'un produit
function getProductPrice(index){
    return(getValueFromKey(index)[2])
}
//fonction qui récupère la quantité de produits selectionnés par le client
function getProductQuantity(index){
    return(getValueFromKey(index)[1])
}
//fonction qui calcule le prix total d'un produit
function getProductAmount(index){
    let result = (getProductQuantity(index) * getProductPrice(index))
    return result
}
//récupération du tableau de valeurs de la clef concernée, dans le localstorage
const boxItems = document.getElementById("cartItems")

function displayProduct(index){
    boxItems.innerHTML += `<div class="itemRow">
    <h2 class= "itemTitle">${getProductName(index)}</h2>
    <p class= "itemPrice">prix unitaire : ${getProductPrice(index)}€</p>
    <p class = "productQuantity">quantité : ${getProductQuantity(index)}</p>
    <p class = "thisProductAmount"> prix total = ${getProductAmount(index)} €</p>
    </div>`
}
function getAllPrice(){
let allPrice = 0
    for (let i = 0 ; i < localStorage.length; i++){
    allPrice += getProductAmount(i)}
return allPrice}
console.log(getAllPrice())

function cardisNotEmpty(){
    return localStorage.length > 0
}

if (cardisNotEmpty()){
    for (let i = 0; i < localStorage.length; i++){
        displayProduct(i);
    }
}
else{
    alert("le panier est vide")
}
    getValueFromKey()
    getAllPrice()