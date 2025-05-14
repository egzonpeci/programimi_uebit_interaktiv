$(document).ready(function () {

    class Product {
        constructor(id, title, price, image) {
            this.id = id;
            this.title = title;
            this.price = price;
            this.image = image;
        }

        static GenerateCard(obj) {
            return `<div class="col-md-3 mt-2">
        <div class="card">
          <img src="${obj.image}" class=" card-img-top" alt="...">
          <div class="card-body">
         <p class="card-text">${obj.title}</p>
         <p class="card-text"><strong>$ ${obj.price}</strong></p>
         <div class="text-end">
         <button type="button" 
         data-id="${obj.id}" 
         data-title="${obj.title}" 
         data-price="${obj.price}" 
         data-image="${obj.image}" 
         class="btn btn-primary btn-sm add-to-cart">Add To Cart</button>
         </div>
      </div>
     </div>
     </div>`;
        }
    }


    //get products

    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            let htmlCards = '';
            data.map(item => {
                htmlCards += Product.GenerateCard(item);
            })

            document.getElementById("cards").innerHTML = htmlCards;

        });


    //add to cart
    //handle 1
    // $(".add-to-cart").click(function () {
    //     alert("test");
    // });


    //handle 2
    $(document).on("click", ".add-to-cart", function () {

        //get from data (product)
        let id = $(this).data("id");
        let title = $(this).data("title");
        let price = $(this).data("price");
        let image = $(this).data("image");

        if (!CheckCart()) {
            //create new array [objects]
            let obj = [];
            let newObj = {
                id: id,
                title: title,
                price: price,
                image: image,
                amount: price,
                quantity: 1
            };

            obj.push(newObj);
            // console.log(obj);
            localStorage.setItem("products-cart", JSON.stringify(obj));
        }
        else {
            let objProducts = JSON.parse(localStorage.getItem("products-cart"));
            let newObj = {
                id: id,
                title: title,
                price: price,
                image: image,
                amount: price,
                quantity: 1
            };

            objProducts.push(newObj);
            localStorage.setItem("products-cart", JSON.stringify(objProducts));
        }
    });

    function CheckCart() {
        let hasProduct = JSON.parse(localStorage.getItem("products-cart")) != null ? true : false;
        return hasProduct;
    }

});

