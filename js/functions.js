alert("Te dhenat e juaja u derguan me sukses");

function MsgSuccess() {
    document.write("<h1>Jeni regjistruar me sukses</h1>");
}

MsgSuccess();
MsgSuccess();
MsgSuccess();
MsgSuccess();
MsgSuccess();

function ShowDynamicMSg(msg) {
    document.write(`<h4>${msg}</h4>`)
}

ShowDynamicMSg("Sot eshte dite e merkure")
ShowDynamicMSg("Sot eshte dite e mire")



function generateCard() {
    return `
    <div class="col-md-3 mt-2">
    <div class="card">
  <img src="https://srv.carbonads.net/static/30242/5553640155979510763aebb62751652e628b00e1" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  </div>
</div>`;
}


document.write(`<div class="row">`);
for (let i = 0; i < 100; i++) {
    document.write(generateCard())
}
document.write(`</div>`);



function OperCalc(a, b, operatori) {

    switch (operatori) {
        case "+":
            document.write(`<h4>Shuma e llog. ${a + b}</h4>`)
            break;
        case "-":
            document.write(`<h4>Zbitja e llog. ${a - b}</h4>`)
            break;
        case "x":
            document.write(`<h4>Shumezimi i llog. ${a * b}</h4>`)
            break;
        case "/":
            document.write(`<h4>Pjestimi i llog. ${a / b}</h4>`)
            break;
        default:
            document.write(`<h4>Gabim operatori</h4>`)
            break;
    }
}



OperCalc(5, 3, "+");
OperCalc(5, 3, "-");
OperCalc(5, 3, "x");
OperCalc(5, 3, "/");





