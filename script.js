// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} 

function generatePassword() {

  //var to store password generated

  var password = "";

// prompts

// in for loop // for loop add characters to that password
// var num = Math.floor(Math.random() * 10)
// var num = Math.floor(Math.random() * 26)
// var randomcharacter = lowercasecharacters[num]
  password += randomcharacter 


  // all 4 arrays 



// return 
return password;




}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
