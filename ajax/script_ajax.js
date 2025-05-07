
// $("#part_1").val();



function GetProducts() {
    $.ajax({
        // url: "http://127.0.0.1:5500/ajax/success.html",
        url: "https://fakestoreapi.com/products/1",
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (res) {
            console.log(res);
            // $("#api_fake").html(res);
        },
        error: function (error) {
            console.log(error);
        }
        // ,
        // complete: function () {
        //     console.log("Kerkesa u perfundua")
        // }
    });
}

GetProducts();



$("#city").on("change", function () {
    let cityId = $(this).val();
    // alert(cityId);
    let queryurl = '';

    switch (cityId) {
        case "1":
            queryurl = "city_1.html";
            break;
        case "2":
            queryurl = "city_2.html";
            break;
        default:
            break;
    }


    $.ajax({
        url: `http://127.0.0.1:5500/ajax/${queryurl}`,
        method: "GET",
        dataType: "json",
        beforeSend: function () {
            $("#desc_city").html("Duke u ngarkuar...");
        },
        success: function (htmldoc) {
            $("#desc_city").html(htmldoc);
        },
        statusCode: {
            401: function () {
                $("#desc_city").html("Nuk jeni te autorizuar!!!");
            },
            404: function () {
                // alert('Faqja nuk u gjet!');
                $("#desc_city").html("Nuk ka te dhena per kete qytet!!!");
            },
            500: function () {
                alert('Gabim në server!');
            }
        },
        error: function (error) {
            // $("#desc_city").text(`Diqka nuk shkoi mire!!!`);
        }
    });

})


$("#search").on("keyup", function () {
    let searchText = $(this).val();
    alert(searchText.length);

    //ajax || fetch per rastin kur searchText.length ka 4 ose me shume karaktere



});