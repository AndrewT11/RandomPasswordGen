// Assignment Code
var generateBtn = document.querySelector("#generate");

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
}
// ***Asking character types (will save a true/false boolean for the variable, which is used to add the style of character you wanted to the generator)
var yesUpper = confirm("Would you like upper case letters in the password?");
var yesLower = confirm("Would you like lower case letters in the password?");
var yesNumber = confirm("Would you like numbers in the password?");
var yesSpecial = confirm("Would you like special symbols in the password?");

// ***Conditional selections
if(!yesUpper&&!yesLower&&!yesNumber&&!yesSpecial){
  alert("Passwords must be made with at least 1 type of character.");
  return generatePassword();
