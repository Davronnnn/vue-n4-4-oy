function findElement(element, parent = document) {
    return document.querySelector(element);
}

const elTabList = findElement("#tab-list");
const elResultTab = findElement(".result-tab");
const elListItem1 = findElement(".list-item-1");
const elListItem2 = findElement(".list-item-2");
const elListItem3 = findElement(".list-item-3");
const elListItem4 = findElement(".list-item-4");

elTabList.addEventListener("click", (evt) => {
    

    if(evt.target.className.includes("list-item")){

        const tabNumber = Number(evt.target.dataset.tab)
        console.log(evt.target.dataset.tab)


        if(tabNumber === 1){
            elResultTab.textContent = "1"
            elListItem1.className = "list-item list-item-1 bg-secondary px-3 text-white bg-info"
            elListItem2.className = "list-item list-item-2 bg-secondary px-3 text-white"
            elListItem3.className = "list-item list-item-2 bg-secondary px-3 text-white"
            elListItem4.className = "list-item list-item-2 bg-secondary px-3 text-white"
        }else if(tabNumber === 2){
            elResultTab.textContent = "2"
            elListItem2.className = "list-item list-item-1 bg-secondary px-3 text-white bg-info"
            elListItem1.className = "list-item list-item-2 bg-secondary px-3 text-white"
            elListItem3.className = "list-item list-item-2 bg-secondary px-3 text-white"
            elListItem4.className = "list-item list-item-2 bg-secondary px-3 text-white"

        }else if(tabNumber === 3){
            elResultTab.textContent = "3"
            elListItem3.className = "list-item list-item-1 bg-secondary px-3 text-white bg-info"
            elListItem2.className = "list-item list-item-2 bg-secondary px-3 text-white"
            elListItem1.className = "list-item list-item-2 bg-secondary px-3 text-white"
            elListItem4.className = "list-item list-item-2 bg-secondary px-3 text-white"

        }else if(tabNumber === 4){
            elResultTab.textContent = "4"
            elListItem4.className = "list-item list-item-1 bg-secondary px-3 text-white bg-info"
            elListItem2.className = "list-item list-item-2 bg-secondary px-3 text-white"
            elListItem3.className = "list-item list-item-2 bg-secondary px-3 text-white"
            elListItem1.className = "list-item list-item-2 bg-secondary px-3 text-white"

        }

    }
})


const elCards = findElement(".cards");
const elSearchInput = findElement("#search-input");
const elSearchBtn = findElement("#search-btn");

function renderProducts(array, parent) {
    parent.innerHTML = "";
    array.forEach((element) => {
        const newCard = document.createElement("div");
        newCard.className = "card";
        newCard.style.width = "18rem";

        newCard.innerHTML = `
            <img class="card-img-top d-block mx-auto" src="${element.image}" alt="${element.title}" />
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.description}</p>
            <p class="card-text">${element.category}</p>
            <p class="card-text">$${element.price}</p>
            <p class="card-text">Rating: ${element.rating.rate}</p>        
            <button data-id="${element.id}"  data-bs-toggle="modal" data-bs-target="#exampleModal"  class="btn btn-primary edit-btn">Edit</button>
            <button class="btn btn-danger" data-id="${element.id}">Delete </button>
        </div>
        `;
        parent.appendChild(newCard);
    });
}

elSearchBtn.addEventListener("click", (evt) => {

    const newArray = []
    products.forEach((product) => {
        if (product.title.toLowerCase().includes(elSearchInput.value.toLowerCase())) {
            newArray.push(product)
            
        }
    });

    renderProducts(newArray,elCards)
});



renderProducts(products, elCards);

elCards.addEventListener("click", (evt) => {
    if (evt.target.className.includes("edit-btn")) {
        const id = Number(evt.target.dataset.id);

        const elInputTitle = findElement("#input-title");
        const elInputImage = findElement("#input-image");
        const elInputPrice = findElement("#input-price");
        const elUpdateImage = findElement("#update-img");
        const elUpdateBtn = findElement("#update-btn");

        products.forEach((product) => {
            if (product.id === id) {
                elInputTitle.value = product.title;
                elInputImage.value = product.image;
                elInputPrice.value = product.price;
                elUpdateImage.src = product.image;

                elUpdateBtn.addEventListener("click", () => {
                    product.title = elInputTitle.value;
                    product.image = elInputImage.value;
                    product.price = elInputPrice.value;
                    renderProducts(products, elCards);
                });
            }
        });
    }
});
