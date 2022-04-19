// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//================================== Start of Ben's code ===========================================

function generatePassword() {
  
  //set a new blank password that will be built to later on
  var newPass = "";

  //superArray is used to combine all selected char types, and utilize random() to parse
  // the array and select random chars
  var superArray;

  // definitions for character types
  var lowerCaseChars = "abcsefghijklmnopqrstuvwxyz";
  var upperCaseChars =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!\"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~";

  var pwLength;

  // This string will be a combination of all "y" user inputs
  var bigString = "";

  // Prompts with data validation below==========
  function prompter(){

    // ===========pwLength Answer================
    while (true) {
      pwLength = prompt("How many characters in this password?\nBetween 8 and 128", "15");
      if (pwLength >= 8 && pwLength < 128) break;
    }

    // ===========Lowercase Answer===============

    while (true) {
      lowerAnswer = prompt("Use lowercase letters?\ny or n", "y");
      if (lowerAnswer === "n" || lowerAnswer === "y") break;
    }
    if (lowerAnswer === "y") {
      bigString += lowerCaseChars;
      console.log(bigString);
    }

    // ===========Uppercase Answer===============

    while (true) {
      upperAnswer = prompt("Use uppercase letters?\ny or n", "y");
      if (upperAnswer === "n" || upperAnswer === "y") break;
    }
    if (upperAnswer === "y") {
      bigString += upperCaseChars;
      console.log(bigString);
    }

    // ===========Numeric Answer==================

    while (true) {
      numericAnswer = prompt("Use numeric characters?\ny or n", "y");
      if (numericAnswer === "n" || numericAnswer === "y") break;
    }
    if (numericAnswer === "y") {
      bigString += numericChars;
      console.log(bigString);
    }

    // ===========Special character Answer========

    while (true) {
     specialAnswer = prompt("Use special characters?\ny or n", "y");
     if (specialAnswer === "n" || specialAnswer === "y") break;
    }
    if (specialAnswer === "y") {
      bigString += specialChars;
      console.log(bigString);
    }

    // ===========In case user selects n for everything, re-invoke the function=========
    while(true){
      if(bigString === ""){
        alert("Bruh you gotta choose 'y' at least once...");
        prompter();
      } break;
    }
  }

  // Pull random characters from superArray and put them together as a string
  function randomizer(){

    // Define the superArray derived from the bigString
    superArray = bigString.split("");

    // Pull random indexes from the new superArray however many times the pwLength is
    for (var i = 0; i < pwLength; i++){
      newPass += superArray[Math.floor(Math.random() * superArray.length)];
    }
  }

  //run our new functions, and return the new password!
  prompter();
  randomizer();
  return newPass;
}