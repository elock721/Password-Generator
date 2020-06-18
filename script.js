// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password

}

var charNum;
var charConfirm;
var numConfirm;
var upperConfirm;
var lowerConfirm;

lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

specChar = ["\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/"];

document.getElementById("generate").addEventListener("click", function () {
  var ps = generatePassword(); //calling password here
  //.placeholder = ps;

});


function generatePassword() {

  charNum = window.prompt("How many characters would you like your password to be? (number between 8 and 128)");
  // this conditional tells the user if there character number is acceptable or not for the application  
  if (charNum < 8 || charNum > 128) {
    alert("too small or too big")
    return; // the return terminates the function 
  }

  upperConfirm = window.confirm("Would you like to include Uppercase Letters?");

  lowerConfirm = window.confirm("Would you like to include Lowercase Letters?");

  numConfirm = window.confirm("Would you like to include numbers?");

  charConfirm = window.confirm("Would you like to include special characters?");
  console.log(upperConfirm, lowerConfirm, numConfirm, charConfirm)
  
  if (upperConfirm === false && lowerConfirm === false && numConfirm === false && charConfirm === false) {
    alert("MUST SELECT AT LEAST ONE!")
    return; 
  }

}

if




















// function generatePassword() {

//   //var to store password generated

//   var password = "";

//   // prompts

//   // in for loop // for loop add characters to that password
//   // var num = Math.floor(Math.random() * 10)
//   // var num = Math.floor(Math.random() * 26)
//   // var randomcharacter = lowercasecharacters[num]
//   // password += randomcharacter


//   // all 4 arrays 



//   // return 
//   return password;




// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
