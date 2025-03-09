
// let n = prompt("Vlera per n");
let i = 1;
while (i <= 6) {
    document.write('<h' + i + '>Heading ' + i + '</h' + i + '>');
    i++;
}


let j = 0;

do {
    document.write("Vlera e printuar per j");
} while (j > 100);



for (let k = 0; k < 10; k = k + 5) {
    document.write("<p>Brenda komandes for</p>");
}


//Shembull 1

let s = 0;

for (let index = 1; index <= 100; index++) {
    s = 0;
    s = s + index;
}
document.write("<h4>Shuma e llog " + s + "</h4>");



//Shembull 2, te dallohet cdo i 4-ti element


for (let index = 0; index < 400; index++) {
    if ((index + 1) % 4 == 0) {
        document.write("<p class='bg-red'>Paragrafi i printuar</p>");
    }
    else {
        document.write("<p>Paragrafi i printuar</p>");
    }
}



for (let i = 0; i < 10; i++) {
    document.write("<p>Rreshti i " + (i + 1) + "</p>")
    for (let j = 0; j < 10; j++) {
        document.write("<p>Elementi i " + (j + 1) + "</p>")
    }
    document.write("<br>");
}









