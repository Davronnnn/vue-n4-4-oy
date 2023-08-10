function findElement(element,parent = document){
    return document.querySelector(element)
}



const elCards = findElement(".cards");
const element =findElement("#test")
const title =findElement("h1");
const elBlock = findElement(".blocks");
const blockTitle = findElement("h1", elBlock)

function renderProducts(array,parent){
    parent.innerHTML = ""
    
    array.forEach((element) => {

        const newCard = document.createElement("div");
        newCard.className = "card";
        newCard.style.width = "18rem";
    
        newCard.innerHTML = `
            <img class="card-img-top" src="${element.image}" alt="${element.title}" />
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.description}</p>
            <p class="card-text">${element.category}</p>
            <p class="card-text">$${element.price}</p>
            <p class="card-text">Rating: ${element.rating.rate}</p>        
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        `
        parent.appendChild(newCard)
    })
}

renderProducts(products,elCards)