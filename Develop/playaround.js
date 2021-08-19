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

var createPassword = function() {
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

/* Random code figuring stuff out

//generate password click event
function (generatePassword) {
  var length = +length.value;
  var 
}

var choiceUpper = confirm("You want Uppercase letters?")
  if (!choiceUpper) {
    return;
  }
);
var choiceLower = confirm("You want Lowercase letters?");
 if (!choiceLower) {
    return;
  }
var choiceNumber = confirm("You want numbers?");
 if (!choiceNumber) {
    return;
  }
var choiceSymbol = confirm("You want symbols?");
 if (!choiceSymbol) {
    return;
  }

*** w3collective.com help***

*Setup var*