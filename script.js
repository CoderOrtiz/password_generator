// Assignment Code

var generateButton = document.querySelector ("#generate");


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

var random = document.querySelector("#generate");

random.addEventListener("click", function(){
  randomPassword = generatePassword();
  document.getElementById("password").placeholder = randomPassword;
});

function generatePassword() {
  enter = parseInt(prompt("How long would you like your password to be? Please select 8 - 128 characters."))
}

if (!enter) {
  alert("HEY! It needs a value...");
} else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("Hey! I said to choose between 8 to 128 characters human."));

} else {
  confirmNumber = confirm ("How many characters you want? Choose between 8 and 128?")
  confirmCharacter = confirm("Do want special characters in your password?")
  confirmUppercase = confirm("Do want Uppercases in your password?")
  confirmLowercase = confirm("Do you want lowercases in your password?")
};

if (!confirmCharacter && !confirmNumber && !confirmUppercse && !confirmLowercase) {
  choices = alert("Choose one of them!")
}
// 
else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
  choices = character.concat(specialCharaters, numericCharacters, lowerCasedCharacters, upperCasedCharacters)
}

else if (confirmCharacter && confirmNumber && confirmUppercase)
