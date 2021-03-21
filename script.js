// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays
var lowerChar = ["mtqonhdskc"];
var upperChar = ["EGAFXZBWUH"];
var ranNum = ["123456789"];
var specChar = ["/`~!@$^%"];

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
  var possibilites = "";
  var password = "";

  //ask the user about length
  var passLength = parseInt(prompt("What length?"));

  //check if the length is an actual number
  if (isNaN(passLength)) {
    //send message
    alert("hey this is not a number ...");

    //exit
    return;
  }

  //check if the length is greater than 8
  if (passLength < 8) {
    //send message
    alert("hey this is too small ...");

    //exit
    return;
  }
  //check if the length is less than 128
  if (passLength > 128) {
    //send message
    alert("hey this is too big ...");

    //exit
    return;
  }

  //collect the user info and build array of possibiliites

  //lowerChar
  var wantLowerChar = confirm("Do you want to include lower case characters?");
  if (wantLowerChar) {
    possibilites += lowerChar;
  }

  //upperChar
  var wantUpperChar = confirm("Do you want to include upper case characters?");
  if (wantUpperChar) {
    possibilites += upperChar;
  }

  //ranNum
  var wantRanNum = confirm("Do you want to include numbers?");
  if (wantRanNum) {
    possibilites += ranNum;
  }

  //specChar
  var wantSpecChar = confirm("Do you want to include special characters?");
  if (wantSpecChar) {
    possibilites += specChar;
  }

  console.log("******possibilities:", possibilites);

  //cycle through each array index to get random number
  for (var i = 0; i < passLength; i++) {
    //random number generator for num between 0 and passLength
    var randomIndex = Math.floor(Math.random() * possibilites.length);
    //based on index get random num
    var randomChar = possibilites[randomIndex];
    //add to password
    password += randomChar;
  };

  console.log("******password:", password);

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
