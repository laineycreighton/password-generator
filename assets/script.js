//-----------------------------------PASSWORD CRITERIA VARIABLES-----------------------------------//
//--------------------CHARACTERS--------------------//

var typeNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var typeUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V"];
var typeLower = ["a", "b", "c", "d", "e", "f", , "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var typeSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "?", ":", ";", "~"];


//--------------------EMPTY--------------------//

var pwLength = 9;
var charChosen = [];

//-----------------------------------PASSWORD CRITERIA FUNCTION-----------------------------------//
function pwCriteria() {

  //--------------------LENGTH--------------------//
  var charLength = parseInt(prompt("Please provide desired password character length between 8 and 128:"));
  if (charLength < 8 || charLength > 128 || (isNaN(charLength))) {
    alert("ALERT: Must be a number between 8 - 128 charaters!");

    //-----------RETURN-----------//
    return "Try Again!";
  }
  confirm("You selected: " + charLength + " characters have been confirmed.");
  alert("Answer the following prompts with 'OK' or 'Cancel' to select your character types.");

  //--------------------CHARACTERS--------------------//
  if (userNumber = confirm("Would you like numbers?")) {
    charChosen = charChosen.concat(typeNumber);
  }
  alert("Numbers: " + userNumber);
  if (userUpper = confirm("Would you like upper case letters?")) {
    charChosen = charChosen.concat(typeUpper);
  }
  alert("Uppercase Letters: " + userUpper);
  if (userLower = confirm("Would you like lower case letters?")) {
    charChosen = charChosen.concat(typeLower);
  }
  alert("Lowercase Letters: " + userLower);
  if (userSpecial = confirm("Would you like special characters?")) {
    charChosen = charChosen.concat(typeSpecial)
  }
  alert("Special Characters: " + userSpecial);

  //-----------RETURN-----------//
  return true;
}

//-----------------------------------PASSWORD CRITERIA RETURN-----------------------------------//

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var returnCriteria = pwCriteria();

  if (returnCriteria) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

