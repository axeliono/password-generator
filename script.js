// Assignment code here
var generatePassword = function() {
  //ask how many characters wanted
  var personInput = window.prompt("How long do you want the password to be. Enter a number (Just a number, not a word, between 8 and 128.)");
  console.log(personInput);
  var passwordLength = 0;
  var checker = /[^0-9]/g;

  console.log(isNaN(personInput));
    if(isNaN(personInput)) {
      window.alert("Your criteria is invalid, choose a viable number.");
      generatePassword();
    }

    passwordLength = parseInt(personInput);
    if(passwordLength > 128 || passwordLength < 8) {
      window.alert("Your criteria is invalid, choose a viable length.");
      generatePassword();
    }
  passwordLength = parseInt(personInput);

  console.log(passwordLength);

  //create initial array to draw from along with arrays of char types
  var chosenCharacters = [];
  var lowerChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var specialChars = ["!","@","$","%","^","&","*","(",")","+","=","-","~",":",";","/","<",">","?",","];
  //ask kind of characters wanted
    //lowercase
    let doLowerCase = window.confirm("Do you want lowercase letters?");
    //uppercase
    let doUpperCase = window.confirm("Do you want uppercase letters?");
    //special characters
    let doSpecialChar = window.confirm("Do you want special characters?");
    console.log("lower - " + doLowerCase);
    console.log("upper - " + doUpperCase);
    console.log("special - " + doSpecialChar);

  //check if at least one type of character was chosen
    if(doLowerCase === false) {
      if(doUpperCase === false) {
        if(doSpecialChar === false) {
          window.alert("You criteria is invalid,choose at least one of lowercase, uppercase, and special characters.");
          generatePassword();
        }
      }
    }
  //add to array based on choices of characters
    if(doLowerCase) {
      chosenCharacters.push(...lowerChars);
      console.log(chosenCharacters);
    }
    if(doUpperCase) {
      chosenCharacters.push(...upperChars);
      console.log(chosenCharacters);
    }
    if(doSpecialChar) {
      chosenCharacters.push(...specialChars);
      console.log(chosenCharacters);
    }

    var startPass = '';
    
  //begin compiling password string
    for(i = 0; i < passwordLength; i++) {
      startPass += chosenCharacters[Math.floor(Math.random()*(chosenCharacters.length-1))];
      console.log(startPass);
    }

    return startPass;





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
