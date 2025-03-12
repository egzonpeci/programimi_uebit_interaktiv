function CreateCard(url_img, description) {
    return `
    <div class="col-md-6 mt-2">
    <div class="card">
    <img src="${url_img}" class="card-img-top" alt="...">
    <div class="card-body">
    <p class="card-text">${description}</p>
  </div>
  </div>
</div>`;
}

const cards =[
   ["https://www.w3schools.com/bootstrap5/img_avatar3.png","Pershkrimi 1"],
   ["https://www.w3schools.com/bootstrap5/img_avatar3.png","Pershkrimi 1"],
   ["https://www.w3schools.com/bootstrap5/img_avatar3.png","Pershkrimi 1"],
   ["https://www.w3schools.com/bootstrap5/img_avatar3.png","Pershkrimi 1"],
   ["https://www.w3schools.com/bootstrap5/img_avatar3.png","Pershkrimi 1"],
   ["https://www.w3schools.com/bootstrap5/img_avatar3.png","Pershkrimi 1"],
   ["https://www.w3schools.com/bootstrap5/img_avatar3.png","Pershkrimi 1"],
   ["https://www.w3schools.com/bootstrap5/img_avatar3.png","Pershkrimi 1"],
   ["https://www.w3schools.com/bootstrap5/img_avatar3.png","Pershkrimi 1"],
   ["https://www.w3schools.com/bootstrap5/img_avatar3.png","Pershkrimi 1"],
   ["https://www.w3schools.com/bootstrap5/img_avatar3.png","Pershkrimi 1"],
   ["https://www.w3schools.com/bootstrap5/img_avatar3.png","Pershkrimi 1"],
   ["https://www.w3schools.com/bootstrap5/img_avatar3.png","Pershkrimi 1"],
   ["https://www.w3schools.com/bootstrap5/img_avatar3.png","Pershkrimi 1"],
   ["https://www.w3schools.com/bootstrap5/img_avatar3.png","Pershkrimi 1"],
   ["https://www.w3schools.com/bootstrap5/img_avatar3.png","Pershkrimi 1"],
   ["https://www.w3schools.com/bootstrap5/img_avatar3.png","Pershkrimi 1"],
   ["https://www.w3schools.com/bootstrap5/img_avatar3.png","Pershkrimi 1"],
   ["https://www.w3schools.com/bootstrap5/img_avatar3.png","Pershkrimi 1"],
   ["https://www.w3schools.com/bootstrap5/img_avatar3.png","Pershkrimi 1"],
   ["https://www.w3schools.com/bootstrap5/img_avatar3.png","Pershkrimi 1"],
   ["https://www.w3schools.com/bootstrap5/img_avatar3.png","Pershkrimi 1"],
   ["https://www.w3schools.com/bootstrap5/img_avatar3.png","Pershkrimi 1"],
   ["https://www.w3schools.com/bootstrap5/img_avatar3.png","Pershkrimi 1"],
];


for (let i = 0; i < cards.length; i++) {
      document.writeln(CreateCard(cards[i][0], cards[i][1]));
}


