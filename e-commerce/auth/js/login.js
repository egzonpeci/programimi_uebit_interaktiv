$(document).ready(function () {

    $("#login").click(function () {
        let username = $("#username").val(); //john_doe
        let password = $("#password").val(); //pass123

        const credentials = { username: username, password: password };
        fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        })
            .then(response => response.json())
            .then(data => {
                //token 
                //  console.log(data)

                //kur te logohet me sukses
                //  localStorage.setItem("token", data.token);
                // window.location.href = '/e-commerce/cms';
            }
            );
          window.location.href = '/e-commerce/cms';
    });

});