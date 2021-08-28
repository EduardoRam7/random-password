// Assignment code here
var lowerCaseChars = "qwertyuiopasdfghjklzxcvbnm";
var uppercaseChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
var numbersChars = "1234567890";
var specialChars = "!#$%&()*+,-./:;<=>?@[]^_{|}~";

prompt("Would you like your password to have lowercase characters?");
prompts("Would you like your password to have uppercase characters?");
prompt("Would you like your password to contain numbers?");
prompt("Would you like your password to contain special characters?");


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
