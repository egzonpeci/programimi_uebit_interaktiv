localStorage.setItem("items", "te dhenat ne storage");

function addItem() {
    document.getElementById("addItem").innerHTML += "<p>Paragrafi</p>";
    localStorage.setItem("htmlData", document.getElementById("addItem").innerHTML);
}



let _dataFromStorage = localStorage.getItem("items");
document.writeln(_dataFromStorage);


let htmlData = localStorage.getItem("htmlData");
document.getElementById("addItem").innerHTML = htmlData;



let obj = {
    id: "test",
    name: "test"
}

localStorage.setItem("objStorage", JSON.stringify(obj));


let objString = localStorage.getItem("objStorage");
console.log(JSON.parse(objString));

//remove single item

localStorage.removeItem("htmlData");

//remove all storage

localStorage.clear();


