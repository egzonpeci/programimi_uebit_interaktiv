//get product from localStorage

let products = localStorage.getItem("addToCart");
let jsonObj = JSON.parse(products);


document.getElementById("products").innerHTML=`
          <tr>
                    <th>#1</th>
                    <th>
                    <img src="${jsonObj.image}" class="img-fluid">
                    </th>
                    <th>${jsonObj.title}</th>
                    <th>${jsonObj.price}</th>
                </tr>

`;