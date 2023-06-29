//-----------------------------------PASSWORD CRITERIA VARIABLES-----------------------------------//
//--------------------CHARACTERS--------------------//

var typeNumber = ["0","1","2","3","4","5","6","7","8","9"];
var typeUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V"];
var typeLower = ["a","b","c","d","e","f",,"g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var typeSpecial = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","<",">","?",":",";","~"];


//--------------------EMPTY--------------------//

var pwLength = 9;
var charChosen = [];

//-----------------------------------PASSWORD CRITERIA FUNCTION-----------------------------------//
function generatePassword() {
  //--------------------LENGTH--------------------//
  var charLength = parseInt(prompt("Please provide desired password character length between 8 and 128:"));
  if (charLength < 8 || charLength > 128 || (isNaN(charLength))) {
    alert("ALERT: Must be a number between 8 - 128 charaters!");
    return "Try Again!";
  }
  confirm("You selected: " + charLength + " characters have been confirmed.");
  alert("Answer the following prompts with 'OK' or 'Cancel' to select your character types.");
  //--------------------CHARACTERS--------------------//
  var typeNumber = confirm("Would you like numbers?");
  alert("Numbers: " + typeNumber);
  var typeUpper = confirm("Would you like upper case letters?");
  alert("Uppercase Letters: " + typeUpper);
  var typeLower = confirm("Would you like lower case letters?");
  alert("Lowercase Letters: " + typeLower);
  var typeSpecial = confirm("Would you like special characters?");
  alert("Special Characters: " + typeSpecial);
}

//-----------------------------------PASSWORD CRITERIA RETURN-----------------------------------//

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

