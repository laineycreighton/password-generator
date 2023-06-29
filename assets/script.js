// Assignment Code
var generateBtn = document.querySelector("#generate");

//-----------------------------------PASSWORD CRITERIA VARIABLES-----------------------------------//
//--------------------CHARACTERS--------------------//

var typeNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var typeUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W","X","Y","Z"];
var typeLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var typeSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "?", ":", ";", "~"];


//--------------------EMPTY--------------------//

var charChosen = [];
var pwLength = 128

//-----------------------------------PASSWORD CRITERIA FUNCTION-----------------------------------//
function pwCriteria() {
  charChosen = [];
  //--------------------LENGTH--------------------//
  pwLength = parseInt(prompt("Please provide desired password character length between 8 and 128:"));
  if (pwLength < 8 || pwLength > 128 || (isNaN(pwLength))) {
    alert("ALERT: Must be a number between 8 - 128 charaters!");
  //-----------RETURN-----------//
    return "Try Again!";
  }
  confirm("You selected: " + pwLength + " characters have been confirmed.");
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
//-----------------------------------CREATE PASSWORD FUNCTION-----------------------------------//
function generatePassword() {
  var pwCreate = "";
  for (var i = 0; i <= pwLength; i++) {
    var sortChar = Math.floor(Math.random() * charChosen.length);
    pwCreate += charChosen[sortChar];
  }

  //-----------RETURN-----------//
  return pwCreate;
}

//-----------------------------------DISPLAY PASSWORD FUNCTION-----------------------------------//
function writePassword() {
  var displayCriteria = pwCriteria();
  var passwordText = document.querySelector("#password");

  if (displayCriteria) {
    var password = generatePassword();
    passwordText.value = password;
  } else {
    alert("You MUST choose at least (1) character type!")
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

