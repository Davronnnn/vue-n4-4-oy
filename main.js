const elInputName = document.querySelector(".input-name");
const elInputRelationship = document.querySelector(".input-relationship");
const elInputPhone = document.querySelector(".input-phone");
const elForm = document.querySelector("#form");
const elCards = document.querySelector(".cards");

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();

    if(elInputName.value !==""){
    const newCard = document.createElement("div");
    newCard.className = "card p-3 mt-3";
    newCard.innerHTML = `
    <div class="card-title">${elInputName.value}</div>
    <p class="card-relationship">${elInputRelationship.value}</p>
    <p class="card-phone">${elInputPhone.value}</p>
    `
    elCards.appendChild(newCard)

   elForm.reset()}
   else{
    alert("Error")
   }
})


