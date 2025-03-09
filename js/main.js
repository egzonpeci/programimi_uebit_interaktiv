// alert("Sot jemi duke filluar me JavaScript");
// alert("Sot jemi duke filluar me JavaScript");
// alert("Sot jemi duke filluar me JavaScript");
// alert("Sot jemi duke filluar me JavaScript");

// document.write("Test 12121");
// document.write("<h1>Heading 1 me js</h1>");
// console.log("po shkruaj ne console");
// // prompt("Sa eshte mosha juaj");

// var x = 4;
// alert(x);
// var x = "Egzon";
// alert(x);

// let y = 45;
// alert(y);
// y = 10;
// alert(y);

// y = "test";
// alert(y);

// const pi = 3.14;
// alert("pi = " + pi);


// Operatoret Aritmetikore


let x = 4, y = 8;

document.write("Shuma e llogaritur " + (x + y));
document.write("<br>Zbritja e llogaritur " + (x - y));
document.write("<br>Shumezimi i llogaritur " + (x * y));
document.write("<br>Pjestimi i llogaritur " + (x / y));
document.write("<br>Eksponenti " + (x ** 3));
document.write("<br>Moduli " + (x % y));
document.write("<br>Inkrementi me prefiks " + (++x));
document.write("<br>Inkrementi me postfiks " + (x++) + " - " + x);
document.write("<br>Dekrementi me prefiks " + (--x));
document.write("<br>Dekrementi me postfiks " + (x--) + " - " + x);



//Forma te shkurtera per ndarjen e vleres


let z = 50;

z += 70;//<=> z = z + 70;
z -= 40;
alert(z);


//Operatoret krahasimore


let x1 = 3, x2 = "3";


document.write("<br>x1==x2 " + (x1 == x2));
document.write("<br>x1===x2 " + (x1 === x2));
document.write("<br>x1!=x2 " + (x1 != x2));
document.write("<br>x1!==x2 " + (x1 !== x2));
document.write("<br>x1 > x2  " + (x1 > x2));
document.write("<br>x1 < x2  " + (x1 < x2));
document.write("<br>x1 >= x2  " + (x1 >= x2));
document.write("<br>x1 <= x2  " + (x1 <= x2));


var result = x1 > x2 ? "<br>Vlera x1 > x2" : "<br>Vlera x2 > x1 ";
document.write(result);


//Operatoret logjike
document.write("<br> Operatori logjike <br>")
let egzon = 4;
document.write((x1 > 10) || (x1 < egzon));

document.write(!(x1 > 10));


let v1 = prompt("Piket ne provime");

let res = v1 >= 50 ? "Provimi u kalua me sukses" : "Suksese hereve te tjera";
document.write(res);

let g = 8;
if (g < 10) {
    if (g < 100) {
        alert("Vlera e g < 100");
    }
    document.write("Jemi brenda komandes if testtttt");
}
else {
    document.write("Jemi brenda komandes if else");
}


let a = 50, b = 40, c = 30;
if (c < a && c < b) {
    document.write("<h1>c ka vleren minimale</h1>");
}

if (a < b && a < c) {
    document.write("<h1>a ka vleren minimale</h1>");
}
if (b < a && b < c) {
    document.write("<h1>b ka vleren minimale</h1>");
}

let startValue = prompt("Te jepet vlera per a");

if (startValue % 3 == 0 && startValue <= 50) {
    document.write("<h3>Vlera e dhene modulohet me 3 dhe eshte me e vogel se 50</h3>");
}


let gjinia = "F";

switch (gjinia) {
    default:
        document.write("Asnje nga pergjigjet")
        break;
    case "F":
    case "Femer":
        document.write("Pergjigje e sakte");
        break;
    case "M":
        document.write("Pergjigje e pasakte");
        break;
}



























































