const orderBox = document.getElementById("orderConfirmation")
const contact = JSON.parse(sessionStorage.getItem("contact"))
const orderId = sessionStorage.getItem("orderId")
const totalAmount = sessionStorage.getItem("totalPrice")
function getFirstName(){
    firstName = contact.firstName
    return firstName
}
function getLastName(){
    lastName = contact.lastName
    return lastName
}
function getAddress(){
    address = contact.address
    return address
}
function getCity(){
    city = contact.city
    return city
}
function orderDisplay(){
    orderBox.innerHTML += 
    `<p class = "customerThanks">Félicitation pour votre achat ${getFirstName()} ${getLastName()}  ! et merci de faire confiance à Orinoco! </p></br>
    <p> votre numéro de commande est le : ${orderId} pour un prix total de ${totalAmount}€. <br/>
    Cette commande sera livrée au ${getAddress()} dans la ville de ${getCity()}.</br>
    <button id="clearStorageToIndex">pour réaliser une autre commande, cliquez ici!</button>`
}
function newOrderButton(){
    const ButtontoIndex = document.getElementById("clearStorageToIndex")
    ButtontoIndex.addEventListener('click', function (event) {
        event.preventDefault()
        localStorage.clear()
        sessionStorage.clear()
        window.location.replace("../index.html")
  })
}
orderDisplay()
newOrderButton()