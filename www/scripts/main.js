function tryLogin() {
    var message = document.getElementById("message");
    message.innerHTML = "";
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var encryptedPassword = encryptPassword(password);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4) {
            var data = JSON.parse(xhttp.responseText);
            if (xhttp.status == 200){
                // If the login is successful, we show a message and redirect to the game page in 2 seconds.
                message.innerHTML = data.message;
                message.innerHTML += "<br>Redirecting to game page in 2 seconds.";
                message.style.color = "green";

                // Redirect to game page in 2 seconds
                setTimeout(() => {
                    window.location.replace("/match.html");
                }, 2000)
            } else {
                // If the login is not successful, we show an error message.
                message.innerHTML = data.error;
                message.style.color = "red";
            }
        }
    };

    // Send the username and encrypted password to the server
    var data = {
        "username": username,
        "password": encryptedPassword
    }

    // Send a POST request to the server (we are sending as post because we are sending a body with the data to the server)
    xhttp.open("POST", "/login", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(data));
}

function encryptPassword(password) {
    const hashedPassword = CryptoJS.SHA256(password).toString();
    return hashedPassword;
}

function register() {
    var message = document.getElementById("message");
    message.innerHTML = "";
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;

    
    if(password != password2){
        message.innerHTML += "<br> Sorry, but passwords don't match";
        return;
    }

    var encryptedPassword = encryptPassword(password);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4) {
            var data = JSON.parse(xhttp.responseText);
            if (xhttp.status == 200){
                // If the registration is successful, we show a message and redirect to the login page in 5 seconds.
                message.innerHTML = data.message;
                message.innerHTML += "<br>Redirecting to login page in 5 seconds.";
                message.style.color = "green";

                // Redirect to game page in 2 seconds
                setTimeout(() => {
                    window.location.replace("/login.html");
                }, 5000)
            } else {
                // If the registration is not successful, we show an error message.
                message.innerHTML = data.error;
                message.style.color = "red";
            }
        }
    };

    // Send the username, encrypted password to the server
    var data = {
        "username": username,
        "password": encryptedPassword
    }

    // Send a POST request to the server
    xhttp.open("POST", "/register", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(data));
}