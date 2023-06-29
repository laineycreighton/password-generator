// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var pwLength = prompt("Please provide desired password length:");
  alert("You selected: " + pwLength + " characters.");
  if (pwLength < 8 || pwLength > 128) {
    alert("ALERT: Must be between 8 - 128 charaters!");
  } else {
    confirm(pwLength + " characters have been confirmed.");
  }
  alert("Answer the following prompts with 'Yes' or 'No' to select your character types.");
  var typeNum = prompt("Would you like numbers?");
  confirm("Numbers Included: " + typeNum);
  var typeUpper = prompt("Would you like upper case letters?");
  confirm("Upper Case Letters Included: " + typeUpper);
  var typeLower = prompt("Would you like lower case letters?");
  confirm("Lower Case Letters Included: " + typeLower);
  var typeSpcChar = prompt("Would you like special characters?");
  confirm("Special Characters Included: " + typeSpcChar);
}


// Write password to the #password input
/*
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
*/
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

