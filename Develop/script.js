// Instructor Code - no stars next to comment bars
// Student Code - 3 stars next to comment bars


// Assignment Code
var generateBtn = document.querySelector("#generate");

// ***Assigning variables
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbol = "~!@#$%^&*()<>[]{}-=_+";
var passwordCharacters = ""; //This is where all the character types that were ok'd will be stored.

// Writes generated password to the #password output (placeholder)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//declaring generatePassword function is called in writePassword Func, will return final password.
function generatePassword() {
  var result = "";

// ***Amount of characters in password is set here. alert when if statement true.    
var length = prompt("How many characters would you like your password to be? (8-128 chracters)");
if(length < 8 || length > 128){
    alert("You must choose 8-128 characters.");
    return generatePassword();
}

if (isNaN(length)) {
      alert("Please enter number's only.");
      return generatePassword();
}
// ***Asking character types (will save a true/false boolean for the variable, which is used to add the style of character you wanted to the generator)
var yesUpper = confirm("Would you like upper case letters in the password?");
var yesLower = confirm("Would you like lower case letters in the password?");
var yesNumber = confirm("Would you like numbers in the password?");
var yesSpecial = confirm("Would you like special symbols in the password?");

// ***Conditional selections. If user selects no character types, if statement true, alert for at least one character.
if(!yesUpper&&!yesLower&&!yesNumber&&!yesSpecial){
  alert("Passwords must be made with at least 1 character type.");
  return generatePassword();
}

// ***If OK is selected=true, each type of character list is added to passwordCharacters for results to pull from.
if (yesUpper) {
    passwordCharacters += upperCase;
}
if (yesLower) {
    passwordCharacters += lowerCase;
}
if (number) {
    passwordCharacters += number;
}
if (symbol) {
    passwordCharacters += symbol;
}

/* 
For loop. result is empty string ready to be filled. loop adds character types into loop. 
 math.random = random number 0-1. Math.floor will round down. Multipled by the length of the selected 
lenght from generatebtn click. Gives random character selected as many times as user selected password 
length to be.

Return calcuates result, which was an empty string. All random characters selected at the amount
selected by user when first prompt asks user will display on text bar.
*/

for (var i=0; i < length; i++) {
    result += passwordCharacters(Math.floor(Math.random() * passwordCharacters.length));
}
return result;
}

