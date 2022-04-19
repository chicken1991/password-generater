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

  var lowerCaseChars = "abcsefghijklmnopqrstuvwxyz"
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numericChars = "0123456789"
  var specialChars = "!\"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~"
  var pwLength;

  //This object "Inputs" prompts the user for inputs, and stores the chars
  // var inputs = {
  //  lowercase: {
  //     userPrompt: prompt("Use lowercase letters?\ny or n", "y"),
  //     chars: "abcsefghijklmnopqrstuvwxyz"
  //   },
  //   uppercase: { 
  //     userPrompt: prompt("Use uppercase letters?\ny or n", "y"),
  //     chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  //   },
  //   numeric: {
  //     userPrompt: prompt("Use numeric characters?\ny or n", "y"),
  //     chars: "0123456789"
  //   },
  //   special: {
  //     userPrompt: prompt("Use special characters?\ny or n", "y"),
  //     chars: "!\"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~"
  //   }
  // }


  // This string will be a combination of the "True" isEnabled chars
  var bigString = "";

  //Prompt window for user inputs. Utilize if-else and while statments for data validation
  function prompter(){
    var pwLength = prompt("How many characters in this password?\nBetween 8 and 128", "15");
  if (pwLength <= 7 || pwLength > 128){
    pwLength = prompt("ERROR: Please input a number between 8 and 128", "15");
  }

  // ===========lowerAnswer================
  
  //This do-while loop will continue to prompt until an answer is given.
  do{
    lowerAnswer = prompt("Use lowercase letters?\ny or n", "y");
    lowerAnswer = lowerAnswer.toLowerCase();
    if(lowerAnswer !== "y" || "n"){
      loweranswer = "what the fuck";
    }
  } while (!lowerAnswer);

  if (lowerAnswer === "y") {
    bigString += lowerCaseChars;
  } else if (lowerAnswer === "n"){

  }
  
  // lowerAnswer = prompt("Use lowercase letters?\ny or n", "y");
  // lowerAnswer = lowerAnswer.toLowerCase();

  // while(lowerAnswer !== "y" || "n"){
  //   lowerAnswer = prompt("Woah there buddy. Please respond with either 'y' or 'n'.");
  // }
  // lowerAnswer = lowerAnswer.toLowerCase();
  // console.log(lowerAnswer);
  // while(!lowerAnswer){
  //   if (lowerAnswer === "y") {
  //     bigString += lowerCaseChars;
  //   } else if (lowercase === "n"){

  //   } else {
  //       lowerAnswer = "";
  //   }
  // } 

  console.log(lowerAnswer);


}

  // Iterate through all object properties, determine the answer, flag it for isEnabled
  //  and add the chars to the bigString
    // for (var x in inputs){
    //   if(inputs[x].userPrompt !== "n") {
    //     bigString += inputs[x].chars;
    //   }
    // }

    //Create superArray from the combinated bigString
    var superArray = bigString.split("");
    console.log("The superArray is " + superArray);

  // https://www.w3schools.com/Js/js_array_sort.asp
  // check out the Fisher Yates method
  // Pull random characters from superArray and put them together as a string
  function randomizer(){
    for (var i = 0; i < pwLength; i++){
      newPass += superArray[Math.floor(Math.random() * superArray.length)];
    }
  }

  prompter();
  randomizer();
  return newPass;

}