let rows = 0, cols = 0;

document.write("<table border='1'>");

for (let i = 0; i < rows; i++) {
    document.write("<tr>");
    for (let j = 0; j < cols; j++) {
        document.write("<td>TData</td>")
    }
    document.write("</tr>");
}
document.write("</table>");


// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         for (let k = 0; k < 10; k++) {
//             document.write(`<p>01 - ${i}${j}${k} - DD</p>`);
//         }
//     }
// }


for (let index = 0; index < 10; index++) {

    for (let index_1 = 0; index_1 < 2; index_1++) {

        document.write(`<p>vlera e printuar ${index}</p>`);
    }

    index = 10;
    // if (index == 0)
    //     break;
}





