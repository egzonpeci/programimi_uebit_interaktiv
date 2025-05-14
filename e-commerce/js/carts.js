
//get products

let productsCart = JSON.parse(localStorage.getItem("products-cart"));

console.log(productsCart);  

let htmlRows = '';

productsCart.map(prod => {
    htmlRows += `<tr>
    <td>
    <img src="${prod.image}" height="70" width="70">
    </td>
    <td>${prod.title}</td>
    <td>${prod.quantity}</td>
    <td>${prod.price}</td>
    <td>${prod.amount}</td>
    </tr>
    `;
});

document.getElementById("prodcuts").innerHTML = htmlRows;







