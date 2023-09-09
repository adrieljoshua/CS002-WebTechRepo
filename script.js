function validateData() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var dataBase = {
        "users": [
            {
                "email": "user1@gmail.com",
                "password": "password"
            },
            {
                "email": "user2@example.com",
                "password": "password"
            }
        ]
    };


    var userFound = dataBase.users.some(function (user) {
        return user.email === email && user.password === password;
    });

    if (!userFound) {
        alert("INCORRECT ")
    } else {
        window.location = "https://www.google.co.in/";
    }
}