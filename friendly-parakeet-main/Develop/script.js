// Assignment code here
var lowerCaseChars = "qwertyuiopasdfghjklzxcvbnm";
var upperCaseChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
var numbersChars = "1234567890";
var specialChars = "!#$%&()*+,-./:;<=>?@[]^_{|}~";
function generatePassword (){
var ask1 = prompt("Would you like your password to have lowercase characters?");
if (ask1 === "yes" || "YES" || "Yes"){
  writePassword + lowerCaseChars;
  }
var ask2 = prompt("Would you like your password to have uppercase characters?");
if (ask2 === "yes" || "YES" || "Yes"){
  writePassword + upperCaseChars;
  }
var ask3 = prompt("Would you like your password to contain numbers?");
if (ask3 === "yes" || "YES" || "Yes"){
  writePassword + numbersChars;
  }
var ask4 = prompt("Would you like your password to contain special characters?");
if (ask4 === "yes" || "YES" || "Yes"){
  writePassword + specialChars;
  }
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
