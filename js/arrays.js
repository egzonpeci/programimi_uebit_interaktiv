//=> index         0        1         2
const student = ["Filan", "Fisteku", "30"];
//get value by position => student[index]



student[0] = "Testim";


document.writeln(student[0]);
document.writeln(student[1]);
document.writeln(student[2]);

// document.writeln(student);

//Array method

const values = new Array("1", "2", "3", "4", "Test", "tesitmi");
// document.writeln(values);


// values.pop();
values.push("NewElement");

for (let index = 0; index < values.length; index++) {
    document.writeln(`<p>Ant. ${index + 1} = ${values[index]}</p>`);
}


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 0, "Lemon", "Kiwi");

document.writeln(`<h4>${fruits}</h4>`)


const fruits_1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits_1.slice(1, 4);



document.writeln(`<h6>${citrus}</h6>`);

const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return a - b });

document.writeln(points);

const studentat = [
    ["1", "2", "3","test","test 1"],
    ["4", "5", "6"],
    ["7", "8", "9"]
];

document.writeln(`<p>Ant. 1 ${studentat[1][1]}</p>`);


//leximi i vargut 2d


for (let i = 0; i < studentat.length; i++) {

    for (let j = 0; j < studentat[i].length; j++) {

        document.writeln(`${studentat[i][j]} `)
    }
    document.writeln("<br>");
}




