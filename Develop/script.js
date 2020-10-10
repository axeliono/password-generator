// Assignment code here
var generatePassword = function() {
  //ask how many characters wanted
  var passwordLength = parseInt(window.prompt("How long do you want the password to be. Enter a number (Just a number, not a word)"));
  console.log(passwordLength);

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
