


// document.writeln("test");


// let _getDataById = document.getElementById("section_1");
// //te vendoset nje tekst i ri
// _getDataById.innerHTML = "Teksti i ri i vendosur me dom";

// // console.log(_getDataById);



// let _getDataByTagName = document.getElementsByTagName("p");
// console.log(_getDataByTagName);
// // document.writeln(_getDataByTagName);
// for (let index = 0; index < _getDataByTagName.length; index++) {

//     _getDataByTagName[index].className += " bg-success";
//     _getDataByTagName[index].hidden = false;
//     _getDataByTagName[index].innerText = "";
// }


// document.getElementById("set_data").innerHTML = _getDataByTagName[3].innerText;


let _getDataByClassName = document.getElementsByClassName("text-red");




// console.log(document.getElementById("contact").innerHTML);

document.getElementById("new_contact").innerHTML = document.getElementById("contact").outerHTML;

let _getUsingQuery = document.querySelector("#new_contact");
console.log(_getUsingQuery.innerText);




//Te gjenerohen disa Card-s ne html dhe te vendosen brenda class row

function GenerateCard() {
    let htmlData = '';
    for (let index = 0; index < 100; index++) {
        htmlData += `<h4>Heading 4, lorem ipsum test</h4>`
    }
    return htmlData;
}


document.querySelector("#row_1").innerHTML = GenerateCard();










