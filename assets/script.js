/*
//PSUEDOCODE:
• What do I need to do?
  1. Prompt user for password length.
  2. Confirm uppercase letters.
  3. Confirm lowercase letters.
  4. Confirm numbers.
  5. Confirm special characters.
  6. Generate the password based on the user's inputs.

 • What do I need to track?
  1. Give value to variables.
  2. Store the user's inputs.
  3. Set the length of the password based on the user's input.
  4. Randomize the value of the variables based on the user's inputs.
 */





// Assignment Code
// generateBtn calls the html element with 'id = #generate'
var generateBtn = document.querySelector("#generate");

//-----------------------------------VARIABLES-----------------------------------//

var typeNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var typeUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var typeLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var typeSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "?", ":", ";", "~"];

var charChosen = [];
var pwLength = 128

//-------------------------------PROMPT/CONFIRM USER-------------------------------//
function pwCriteria() {
  charChosen = [];
  console.log("Password Criteria")
  //variable "pwLength" is getting the desired password length.
  pwLength = parseInt(prompt("Please provide desired password character length between 8 and 128:"));
  if (pwLength < 8 || pwLength > 128 || (isNaN(pwLength))) {
    alert("ALERT: Must be a number between 8 - 128 charaters!");
    return "Try Again!";
  }
  //confirming the "pwLength" selection
  confirm("You selected: " + pwLength + " characters have been confirmed.");
  alert("Answer the following prompts with 'OK' or 'Cancel' to select your character types.");

  //confirm numbers
  if (userNumber = confirm("Would you like numbers?")) {
    charChosen = charChosen.concat(typeNumber);
  }
  alert("Numbers: " + userNumber);

  //confirm uppercase letters
  if (userUpper = confirm("Would you like upper case letters?")) {
    charChosen = charChosen.concat(typeUpper);
  }
  alert("Uppercase Letters: " + userUpper);

  //confirm lowercase letters
  if (userLower = confirm("Would you like lower case letters?")) {
    charChosen = charChosen.concat(typeLower);
  }
  alert("Lowercase Letters: " + userLower);

  //confirm special characters
  if (userSpecial = confirm("Would you like special characters?")) {
    charChosen = charChosen.concat(typeSpecial)
  }
  alert("Special Characters: " + userSpecial);

  return true;
}


//----------------------------generatePassword FUNCTION----------------------------//
function generatePassword() {
  console.log("Password length established!")

  //for loop to establish password length based on the user's selection
  var pwCreate = "";
  for (var i = 0; i <= pwLength; i++) {
    var sortChar = Math.floor(Math.random() * charChosen.length);
    pwCreate += charChosen[sortChar];
  }

  return pwCreate;
}


//----------------------------writePassword FUNCTION----------------------------//
// Write password to the #password input
// function for 'writePassword'
function writePassword() {
  var displayCriteria = pwCriteria();
  // passwordText calls the entire element for 'id #password' in HTML
  var passwordText = document.querySelector("#password");

  if (displayCriteria) {
    // password calls the function 'generatePassword'
    var password = generatePassword();

    // the value of passwordText and setting it to password
    passwordText.value = password;
  } else {
    alert("You MUST choose at least (1) character type!")
  }
}

// Add event listener to generate button
// using generateBtn for the 'class = click' and the writePassword function
generateBtn.addEventListener("click", writePassword);






