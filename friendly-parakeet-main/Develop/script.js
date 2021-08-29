// Assignment code here
// Global Variables
var lowerCaseChars = "qwertyuiopasdfghjklzxcvbnm";
var upperCaseChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
var numbersChars = "1234567890";
var specialChars = "!#$%&()*+,-./:;<=>?@[]^_{|}~";
var ask1, text;
var ask2, text;
var ask3, text;
var ask4, text;

function generatePassword (){
 
  ask1 = document.getElementById(prompt("Would you like your password to have lowercase letters?").value);
  if (ask1 === "yes" || "YES" || "Yes" || "Y"){
    document.getElementById(lowerCaseChars,)
    }
    else if (ask1 === "no" || "NO" || "No" || "N") {
    
    }
    
  ask2 = document.getElementById(prompt("Would you like your password to have uppercase letters?").value);
  if (ask2 === "yes" || "YES" || "Yes" || "Y"){
    document.getElementById(upperCaseChars,)
    }
    else if (ask2 === "no" || "NO" || "No" || "N") {

    }

  ask3 = document.getElementById(prompt("Would you like your password to contain numbers?").value);
  if (ask3 === "yes" || "YES" || "Yes" || "Y"){
    document.getElementById(numbersChars,)
    }
    else if (ask3 === "no" || "NO" || "No" || "N") {

    }

  ask4 = document.getElementById(prompt("Would you like your password to contain special characters?").value);
  if (ask4 === "yes" || "YES" || "Yes" || "Y"){
    document.getElementById(specialChars,)
    }
    else if (ask4 === "no" || "NO" || "No" || "N") {

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
