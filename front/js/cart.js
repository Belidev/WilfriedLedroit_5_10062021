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

//affichage du HTML de l'article CartItems, définit par la constante boxItems
function displayProduct(index){
    boxItems.innerHTML += `<div class="itemRow">
    <h2 class= "itemTitle">${getProductName(index)}</h2>
    <p class= "itemPrice">prix unitaire : ${getProductPrice(index)}€</p>
    <p class = "productQuantity">quantité : ${getProductQuantity(index)}</p>
    <p class = "thisProductAmount"> prix total = ${getProductAmount(index)} €</p>
    </div>`
}
//bouton qui permet d'effacer le localstorage
CartResetDisplay()
function CartResetDisplay(){
    boxItems.innerHTML += `<button id = "resetButton"> annuler votre panier </button>`
}
//fonction qui permet d'afficher le prix total de la commande, en utilisant la fonction getAllPrice
function displayTotalPrice(){
    const totalPriceBox = document.getElementById("totalPrice")
    totalPriceBox.innerHTML += `<p class = "totalPriceText">prix total de la commande : ${getAllPrice()} €</p>`
}
displayTotalPrice()

const resetButton = document.getElementById("resetButton");
resetButton.onclick = function(){
    Storage.clear();
    window.location = ('http://127.0.0.1:5500/front/cart.html')
}
function getAllPrice(){
    let allPrice = 0
        for (let i = 0 ; i < localStorage.length; i++){
        allPrice += getProductAmount(i)}
    return allPrice}

function cardisNotEmpty(){
    return localStorage.length > 0
}

if (cardisNotEmpty()){
    for (let i = 0; i < localStorage.length; i++){
        displayProduct(i);
    }
}
else{
    boxItems.innerHTML += `<div class="itemRow">
    <p class="emptyCartText">Votre panier est vide</p>
    <a class="indexLink" href="../index.html"><button class="buttonToIndex">Cliquer ici pour revenir vers l'accueil</button></a>
    </div>`
}
function sendOrder(){
    function getAllId(){
        for( let i = 0; i < localStorage.length; i++){
            products[i] = localStorage.key(i);
        }
        return products
    }
    let products = []
    getAllId()
        let contact = {
            'firstName': document.getElementById("firstName").value,
            'lastName': document.getElementById("lastName").value,
            'address': document.getElementById("address").value,
            'city': document.getElementById("city").value,
            'email': document.getElementById("email").value
        }
    let customerForm = JSON.stringify({products, contact});
    fetch('http://localhost:3000/api/furniture/order', {
      method: 'POST',
      headers: {
        'content-type': "application/json"
      },
      mode: "cors",
      body: customerForm
      })
      .then(function (response) {
        return response.json()
      })
      .then(function (r) {
        sessionStorage.setItem("contact", JSON.stringify(r.contact));
        sessionStorage.setItem("orderId", JSON.stringify(r.orderId));
        sessionStorage.setItem("totalPrice", getAllPrice()), 
        window.location.replace("./confirmation.html")
      })
      //SI PROBLEME API
      .catch(function (err) {
        console.log("fetch Error");
      });
}
const sendingButton = document.getElementById("sendingForm")
sendingButton.addEventListener('click', function (event) {
    event.preventDefault();
    sendOrder();
  })
getValueFromKey()
getAllPrice()
