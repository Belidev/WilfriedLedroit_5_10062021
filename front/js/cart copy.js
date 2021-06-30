// on liste les éléments du localStorage//
const boxItems = document.getElementById("cartItems")
const item1 = localStorage.getItem("name5be9cc611c9d440000c1421e")
const item2 = localStorage.getItem("name5beaadda1c9d440000a57d98")
const item3 = localStorage.getItem("name5beaae361c9d440000a57d99")
const item4 = localStorage.getItem("name5beaaf2e1c9d440000a57d9a")
const item5 = localStorage.getItem("name5beab2061c9d440000a57d9b")
const item1price = localStorage.getItem("price5be9cc611c9d440000c1421e")/100;
const item2Price = localStorage.getItem("price5beaadda1c9d440000a57d98")/100;
const item3Price = localStorage.getItem("price5beaae361c9d440000a57d99")/100;
const item4Price = localStorage.getItem("price5beaaf2e1c9d440000a57d9a")/100;
const item5Price = localStorage.getItem("price5beab2061c9d440000a57d9b")/100;


//fonctions qui permettent de check la présence de chaque item, et de générer le HTML en conséquence//
function checkItem1(){
    if (item1 === null){
        return console.log(`item1 inexistant`)
    }
    else {
    boxItems.innerHTML += `<div class="itemRow"><h2 class="itemTitle">${item1}</h2><p class="itemPrice">prix unitaire : ${item1price}€</p></div>`
    return console.log(`item1 existe`)
    }
}
function checkItem2(){
    if (item2 === null)
        return console.log(`item2 inexistant`)
        
    boxItems.innerHTML += `<div class="itemRow"><h2 class="itemTitle">${item2}</h2><p class="itemPrice">prix unitaire : ${item2Price}€</p></div>`
    return console.log(`item2 existe`)
}
function checkItem3(){
    if (item3 === null){
        return console.log(`item3 inexistant`)
    }
    else {
    boxItems.innerHTML += `<div class="itemRow"><h2 class="itemTitle">${item3}</h2><p class="itemPrice">prix unitaire : ${item3Price}€</p></div>`
    return console.log(`item3 existe`)
    }
}
function checkItem4(){
    if (item4 === null){
        return console.log(`item4 inexistant`)
    }
    else {
    boxItems.innerHTML += `<div class="itemRow"><h2 class="itemTitle">${item4}</h2><p class="itemPrice">prix unitaire : ${item4Price}€</p></div>`
    return console.log(`item4 existe`)
    }
}
function checkItem5(){
    if (item5 === null){
        return console.log(`item5 inexistant`)
    }
    else {
    boxItems.innerHTML += `<div class="itemRow"><h2 class="itemTitle">${item5}</h2><p class="itemPrice">prix unitaire : ${item5Price}€</p></div>`
    return console.log(`item5 existe`)
    }
}
checkItem1();
checkItem2();
checkItem3();
checkItem4();
checkItem5();

// bouton qui permet de reset le panier //
const resetButton = document.createElement("button")
resetButton.innerHTML = "vider le panier"
boxItems.appendChild(resetButton);
console.log(localStorage.length);
resetButton.onclick = function () {
    if (localStorage.length > 0){
    localStorage.clear()}
    else {
    alert("le panier est vide")
    }
    }