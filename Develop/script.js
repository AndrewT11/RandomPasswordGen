// Assignment Code
var generateBtn = document.querySelector("#generate");


//Assigned variables
// ***Assigning variables
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbol = "~!@#$%^&*()<>[]{}-=_+";
var passwordCharacters = ""; //This will be where all the types of characters that were ok'd will be stored.

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ***Amount of characters in password    
var length = prompt("How many characters would you like your password to be? (8-128 chracters)");
if(length < 8 || length > 128){
    alert("You must choose 8-128 characters.");
    return generatePassword();



/* Random code figuring stuff out

//generate password click event
function (generatePassword) {
  var length = +length.value;
  var 
}

var choiceUpper = window.confirm(
  if (!choiceUpper) {
    return;
  }
);
var choiceLower = window.confirm();
 if (!choiceLower) {
    return;
  }
var choiceNumber = window.confirm();
 if (!choiceNumber) {
    return;
  }
var choiceSymbol = window.confirm();
 if (!choiceSymbol) {
    return;
  }

*** w3collective.com help***

*Setup var*

