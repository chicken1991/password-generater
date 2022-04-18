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

//Start of Ben's code =====================================================

//define and build generatePassword()

//this function needs to prompt the user with prompt() to specify the attributes
//  of the password (lowercase, uppercase, numeric, and/or special characters)

function generatePassword() {
  
  //set a new blank password that will be added to later on
  var newPass = '';

  //superArray is used to combine all selected char types, and utilize random() to parse
  // array to select random chars
  var superArray = [];

  //This object "Inputs" prompts the user for inputs, and stores the chars
  var inputs = {
   lowercase: {
      userPrompt: prompt("Use lowercase letters?\ny or n"),
      chars: "abcsefghijklmnopqrstuvwxyz"
    },
    uppercase: { 
      userPrompt: prompt("Use uppercase letters?\ny or n"),
      chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    },
    numeric: {
      userPrompt: prompt("Use numeric characters?\ny or n"),
      chars: "0123456789"
    },
    special: {
      userPrompt: prompt("Use special characters?\ny or n"),
      chars: "!\"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~"
    },
    pwLength: {
      userPrompt: prompt("How many characters in this password?\nBetween 8 and 128"),
      chars: ""
    },
  }

  // This string will be a combination of the "True" isEnabled chars
  var bigString = "";

  // Iterate through all object properties, determine the answer, flag it for isEnabled
  //  and add the chars to the bigString
    for (var x in inputs){
      if(inputs[x].userPrompt !== "n") {
        bigString += inputs[x].chars;
      }
    }

    //Create superArray from the combinated bigString
    var superArray = bigString.split("");
    console.log("The superArray is " + superArray);

  // https://www.w3schools.com/Js/js_array_sort.asp
  // check out the Fisher Yates method
  // Pull random characters from superArray and put them together as a string
  function randomizer(){
    for (var i = 0; i < inputs.pwLength.userPrompt; i++){
      newPass += superArray[Math.floor(Math.random() * superArray.length)];
    }
  }

  randomizer();
  return newPass;

}