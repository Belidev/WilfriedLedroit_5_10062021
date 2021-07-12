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
function cartResetDisplay(){
    boxItems.insertAdjacentHTML("beforeend", `<button id = "resetButton"> annuler votre panier </button>`)
}
//fonction qui permet d'afficher le prix total de la commande, en utilisant la fonction getAllPrice
function displayTotalPrice(){
    const totalPriceBox = document.getElementById("totalPrice")
    totalPriceBox.innerHTML += `<p class = "totalPriceText">prix total de la commande : ${getAllPrice()} €</p>`
}
//fonction qui déclenche la fonction sendOrder via le bouton "sendingForm"
function orderButton(){
    const sendingButton = document.getElementById("sendingForm")
    sendingButton.addEventListener('submit', function (event) {
        event.preventDefault()
        sendOrder();
    })
}
//fonction qui permet au bouton "resetButton" de purger le localStorage, et de recharger la page
function resetStorage(){
    const resetButton = document.getElementById("resetButton")
    resetButton.addEventListener('click', function(event) {
        event.preventDefault()
        localStorage.clear()
        window.location.reload("./cart.html")
})}
//fonction qui calcule le prix total, sur tous les produits sélectionnés
function getAllPrice(){
    let allPrice = 0
        for (let i = 0 ; i < localStorage.length; i++){
        allPrice += getProductAmount(i)}
    return allPrice}
//fonction qui indique que le localStorage n'est pas vide
function cardisNotEmpty(){
    return localStorage.length > 0
}
//fonction qui affiche du contenu HTML, selon l'état du localStorage
function displayBoxItemsEvent(){
    if (cardisNotEmpty()){
        for (let i = 0; i < localStorage.length; i++){
        displayProduct(i);
    }}
    else{
    boxItems.innerHTML += `<div class="itemRow">
    <p class="emptyCartText">Votre panier est vide</p>
    <a class="indexLink" href="../index.html"><button class="buttonToIndex">Cliquer ici pour revenir vers l'accueil</button></a>
    </div>`
    }
//définit les objets à envoyer au serveur
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
    //utilisation de fetch pour envoyer le formulaire au serveur, récupère la réponse dans la sessionStorage, puis charge la page confirmation.html
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
      })}
//appel des fonctions
getValueFromKey()
getAllPrice()
cartResetDisplay()
orderButton()
displayTotalPrice()
displayBoxItemsEvent()
resetStorage()