let dataById = document.getElementById("about");

dataById.innerHTML = "";
document.writeln(dataById.innerText);


// document.getElementsByClassName("class_name");
// document.getElementsByTagName("element_name");


let _dataById = document.querySelector("#about");
console.log(_dataById);

let _datasByQuery = document.querySelectorAll(".text-red");
console.log(_datasByQuery);


let _inputById = document.getElementById("personalnr");
_inputById.value += 23;



let _jsStyleEle = document.querySelectorAll(".js-style");

// for (let i = 0; i < _jsStyleEle.length; i++) {

//       _jsStyleEle[i].style.fontSize ="40px";
//       _jsStyleEle[i].style.display ="none";

// }
function showAlert() {

    alert("Ju keni klikuar mbi tekst");
}


function changeColor(obj) {
    // console.log(obj);
    obj.style.color = "red";
}

function Kalkulo() {
    let val_1 = parseFloat(document.getElementById("val_1").value);
    let val_2 = parseFloat(document.getElementById("val_2").value);

    let sum = val_1 + val_2;
    document.getElementById("setsum").innerText = sum;
}



function getCurrentValue(objekti) {
    alert(objekti.value);
}


let _createdEvent = document.getElementById("createEvent");

_createdEvent.addEventListener("click", function () {
    alert("Eventss");
});













