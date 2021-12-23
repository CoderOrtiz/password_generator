// Assignment Code

var generateButton = document.querySelector ("#generate");

function generatePassword (){
  var specialCharaters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "[", "]", "~", "-", "_", "."];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCasedCharacters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "x", "y", "z"]
var upperCasedCharacters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// an empty array (*** double check me ***)
var resultArray = [];
var userArray = [];

// full array

var options = prompt ("Human, please select a minimum of 8 characters to a maximum of 128 characters.")
var numbers = confirm ("Human, click Okay if you would like special characters to be generated in your password.")
var upper = confirm ("Human, click Okay if you would like uppercase letters to be generated.")
var lower = confirm ("Human, click Okay if you would like lowercase letters to be generated.")
var special = confirm ("Last option human, click Okay if you would like lowercase letters to be generated.")

// conditions of the array

if (numbers){
  resultArray = resultArray.concat(numericCharacters);
} 
if (upper){
  resultArray = resultArray.comcat(upperCasedCharacters);
}
if (lower){
  resultArray = resultArray.comcat(lowerCasedCharacters);
}
if (special){
  resultArray = resultArray.comcat(specialCharaters);
}

console.log(resultArray)

for (var i=0; i < numericCharacters; i++){

  userArray.push (resultArray[Math.floor(math.random() * resultArray)]);
}

return userArray.join("")
}

// make password

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("password");
  
  passwordText.value = password;
}

function copyToClipboard() {

}

generateButton.addEventListener("click", writePassword);



