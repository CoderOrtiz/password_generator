// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharaters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "[", "]", "~", "-", "_", "."];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCasedCharacters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "x", "y", "z"]
var upperCasedCharacters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function input () {
  var passworkLength = prompt ("How long would you like your password to be? Please select 8 - 128 characters.");
  console.log (passworkLength) 
  if (passworkLength) {
    alert = ("I'm sorry, please enter a number.")
  return; 
  }
  if (passworkLength < 8|| passworkLength > 128) {
    alert = ("Please select a minimum of 8 characters to a maximum of 128 characters.")
  }
  var confirmSpecialCharacters = prompt ("Click Okay if you would like special characters to be generated")
    console.log (confirmNumbers);

  var confirmNumbers = prompt ("Click Okay if you would like numbers to be generated")
    console.log (confirmNumbers);

  var confirmUpperCharacters = prompt ("Click Okay if you would like uppercase letters to be generated")
    console.log (confirmNumbers);
  
  var confirmLowercase = prompt ("Click Okay if you would like lowercase letters to be generated")
    console.log (confirmNumbers);



  if (confirmNumbers === false && confirmSpecialCharacters === false && confirmUpperCharacters === false && confirmLowercase === false) {
    alert("Please select at least one option.")
    return;
  } 

  var reply = {
    passworkLength: passworkLength,
    confirmSpecialCharacters: confirmSpecialCharacters,
    confirmNumbers: confirmNumbers,
    confirmUpperCharacters: confirmUpperCharacters,
    confirmLowercase: confirmLowercase,
  };
    return reply;
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
