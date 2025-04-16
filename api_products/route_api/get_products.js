class Product {
    constructor(id, title, price, image, category, description) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.image = image;
        this.category = category;
        this.description = description;
    }

    static Card(obj) {

        return `<div class="col-md-3">
        <div class="card">
         <img src="${obj.image}" class="card-img-top" alt="...">
         <div class="card-body">
           <p class="card-text">${obj.title}</p>
           <p class="card-text">Price: ${obj.price}</p>
           <div class="text-end">
           <button onclick="addToCart(${obj.id})" class="btn btn-primary btn-sm">ADD TO CART</button>
           </div>
             </div>
         </div>
        </div>
        `;
    }
}


fetch("https://fakestoreapi.com/products").then(res => res.json())
    .then(data => {
        let htmlCards = '';
        data.map(item => {
            htmlCards += Product.Card(item);
        })
        document.getElementById("cards").innerHTML = htmlCards;
    })




function addToCart(productid) {
    fetch(`https://fakestoreapi.com/products/${productid}`).then(res => res.json())
        .then(data => {
            localStorage.setItem("addToCart", JSON.stringify(data));
        })
}


function Increment() {
    let btnValue = document.getElementById("btnValue").innerText;
    let newValue = parseInt(btnValue) + 1;
    document.getElementById("btnValue").innerText = newValue;
}

let obj = {
    "id": 3,
    "name": "test"
};
localStorage.setItem("carts", JSON.stringify(obj));



