// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays
var lowerChar = ["m", "t", "q", "o", "n", "h", "d", "s", "k", "c"];
var upperChar = ["E", "G", "A", "F", "X", "Z", "B", "W", "U", "H"];
var ranNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specChar = ["/", "`", "~", "!", "@", "$", "^", "%"];

// get random index from array of lowerChar
var indexL = Math.floor(Math.random() * lowerChar.length);
var computerChoice = lowerChar[indexL];

// random index from upperChar
var indexU = Math.floor(Math.random() * upperChar.length);
var computerChoice = upperChar[indexU];

// random index from ranNum
var indexR = Math.floor(Math.random() * ranNum.length);
var computerChoice = ranNum[indexR];

// random index from specChar
var indexS = Math.floor(Math.random() * specChar.length);
var computerChoice = specChar[indexS];


// create generate password function
// majority of code will be in this function
// use confirm and prompts in here
function generatePassword() {
  var password = "";


  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
