// $("selector").action(function(){

// });

// //js

// let dataById = document.getElementById("red-1").innerText;
// let dataByIdjQuery = $("#red-1").text();


let getDataById = $("#section1");
getDataById.text('');
console.log(getDataById);

$(document).ready(function () {

    // alert("test");
    // $("p").click(function(){
    //     alert("sdfdsfdsf")
    //     $(this).hide();
    // });
    // $("p").on("click", function () {
    //     alert("Menyra tjeter");

    // });

    // $(document).on("click", "p", function () {
    //    alert("dsfdfds");
    // });


    $(".value").on("keyup", function () {
        alert("Vlera e lexuar" + $(this).val());
    });

    $("#showhide").click(function () {
        $("p").toggle(3000);
    });

    //dom jquery

    //get

    let htmlPart = $("#part-2").html();
    let textPart = $("#part-2").text();
    console.log(htmlPart);
    console.log(textPart);

    //set html
    $("#part-2").html(`<h4>Heading 4</h4>`);
    $("#part-2").text(`Pjesa e tekstit e vendosur me jquery`);


    $("p").click(function () {
        // $(this).toggleClass("text-red");
        $(this).css({ "color": "red", "font-size": "40px" });
    })

});

