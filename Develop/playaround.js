// Elements
var passwordText = document.querySelector("password");
var button = document.querySelector("button");

//  Password Data
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbol = "~!@#$%^&*()";
var passwordLength = NULL;
var passwordValue = "";

// Create Password

var createPassword = () => {
    passwordValue = "";

    for (var i = 0; i < passwordLength; i++) {
        var number = Math.floor(Math.random() * upperCase.length);
        passwordValue += chracters.substring(number, number + 1);
    }

    for (var i = 0; i < passwordLength; i++) {
        var number = Math.floor(Math.random() * lowerCase.length);
    }

    for (var i = 0; i < passwordLength; i++) {
        var number = Math.floor(Math.random() * number.length);
    }

    for (var i = 0; i < passwordLength; i++) {
        var number = Math.floor(Math.random() * symbol.length);
    }
    password.value = passwordValue;
}

// Events
button.addEventListener("click", createPassword);