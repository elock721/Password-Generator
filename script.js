// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password

}
// criteria variables
var charNum;
var charConfirm;
var numConfirm;
var upperConfirm;
var lowerConfirm;
var characterChoices = []; // empty array

// all necessary arrays
var lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var specChar = ["\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/"];

// event listener for the generate button
document.getElementById("generate").addEventListener("click", function () {
 writePassword();

});

// function created to generate the random password
function generatePassword() {

  charNum = window.prompt("How many characters would you like your password to be? (number between 8 and 128)");
  // this conditional tells the user if there character number is acceptable or not for the application  
  if (charNum < 8 || charNum > 128) {
    alert("too small or too big")
    return; // the return terminates the function 
  }

  //ensures clear array to begin
  charaterChoices = [];
  // these prompts allow user select what specific password criteria they want
  upperConfirm = window.confirm("Would you like to include Uppercase Letters?");

  lowerConfirm = window.confirm("Would you like to include Lowercase Letters?");

  numConfirm = window.confirm("Would you like to include numbers?");

  charConfirm = window.confirm("Would you like to include special characters?");
  console.log(upperConfirm, lowerConfirm, numConfirm, charConfirm)

  // if they don't select any they will be alerted that they must choose at least one 
  if (upperConfirm === false && lowerConfirm === false && numConfirm === false && charConfirm === false) {
    alert("MUST SELECT AT LEAST ONE!")
    return;
  }

  // if the user chooses upper case character 
  // it will randomly use the uppercase character array
  // making array available to generate password 
  if (upperConfirm === true) {
    characterChoices.push(upperAlpha);
  }

  // if the user chooses lower case character 
  // it will make the lower case array available 
  // for random selections
  if (lowerConfirm === true) {
    characterChoices.push(lowerAlpha);
  }

  // if the user chooses number character 
  // it will make the numbers array available 
  // for random selections
  if (numConfirm === true) {
    characterChoices.push(numbers);
  }

  // if the user chooses special characters 
  // it will make the special characters array available 
  // for random selections
  if (charConfirm === true) {
    characterChoices.push(specChar);
  }

  // initilizing the password to be empty 
  var password = "";

  // for loop to create random password of charNum
  for (let i = 0; i < charNum; i++) {
    // getting the index of one of the arrays that has characters that we want to use 
    var num = Math.floor(Math.random() * characterChoices.length);
    // charArray is a reference to one the arrays defined above 
    var charArray = characterChoices[num];
    // here we get the random index of the character in the charArray
    var randomcharacterposition = Math.floor(Math.random() * charArray.length);
    // now adding the random character to the end of the password
    password += charArray[randomcharacterposition];
  }
  // returning password to be displayed 
  return password;
}

