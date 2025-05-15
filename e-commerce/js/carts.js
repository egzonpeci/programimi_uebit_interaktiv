
//get products

let productsCart = JSON.parse(localStorage.getItem("products-cart"));
let htmlRows = '';

productsCart.map(prod => {
    htmlRows += `<tr id="row_${prod.id}">
    <td>
    <img src="${prod.image}" height="70" width="70">
    </td>
    <td>${prod.title}</td>
    <td>
    <input data-id="${prod.id}" type="number"class="form-control quantity" value="${prod.quantity}">
    </td>
    <td>${prod.price}</td>
    <td id="amount_${prod.id}" >${prod.amount}</td>
    <td>
       <button type="button" data-id="${prod.id}" class="delete btn btn-outline-danger btn-sm">X</button>
    </td>
    </tr>
    `;
});

document.getElementById("prodcuts").innerHTML = htmlRows;



$(document).on("change", ".quantity", function () {
    let prodId = $(this).data("id");
    let quantity = $(this).val();
    updateQuantitProduct(prodId, quantity);

});


$(document).on("click", ".delete", function () {
    let productId = $(this).data("id");
    $(`#row_${productId}`).remove();
    DeleteProduct(productId);
});


function updateQuantitProduct(idproduct, quantity) {
    let objProducts = JSON.parse(localStorage.getItem("products-cart"));
    let objExists = objProducts.filter(item => item.id == idproduct);
    if (objExists.length > 0) {

        let oldProducts = objExists[0];
        let newObj = {
            id: oldProducts.id,
            title: oldProducts.title,
            price: oldProducts.price,
            image: oldProducts.image,
            amount: Number.parseInt(quantity) * oldProducts.price,
            quantity: Number.parseInt(quantity)
        };

        $(`#amount_${idproduct}`).text(Number.parseInt(quantity) * oldProducts.price);
        //get all productst without current productID
        let updateObject = objProducts.filter(item => item.id != idproduct);
        updateObject.push(newObj);
        localStorage.setItem("products-cart", JSON.stringify(updateObject));
        TotalInvoice();
    }
}


function DeleteProduct(productid) {
    let objProducts = JSON.parse(localStorage.getItem("products-cart"));
    let currnetObject = objProducts.filter(item => item.id != productid);
    localStorage.setItem("products-cart", JSON.stringify(currnetObject));
}


$("#remove_all").click(function () {
    localStorage.removeItem("products-cart");
});


function TotalInvoice() {
    let objProducts = JSON.parse(localStorage.getItem("products-cart"));
    if (objProducts != null && objProducts.length > 0) {
        let total = 0;
        objProducts.map(prod => {
            total += prod.amount;
        });

        $("#total").text(total.toFixed(2));
    }
    else {
        $("#total").text('0.00');
    }

}

TotalInvoice();



