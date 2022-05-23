/* ASSIGNMENT CODE START */

function generatePassword() {
    var characterString = "";
    var passwordLength = window.prompt("Enter a number between 8 and 128 to be the length of your password.");
    passwordLength = parseInt(passwordLength);
    var passwordInProgress = "";
    
    // make sure a valid number was input
    if (isNaN(passwordLength)) {
        window.alert("Please enter a number.");
    }
    else if (passwordLength < 8 || passwordLength > 128) {
        window.alert("Please enter a number between 8 and 128.");
    }
    else {
        // generate character set
        var useLowercase = window.confirm("Include lowercase letters?");
        var useUppercase = window.confirm("Include uppercase letters?");
        var useNumbers = window.confirm("Use numbers?");
        var useSpecial = window.confirm("Use special characters?");

        if (useLowercase) {
             characterString += "abcdefghijklmnopqrstuvwxyz";
        };
        if (useUppercase) {
            characterString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        };
        if (useNumbers) {
            characterString += "1234567890";
        };
        if (useSpecial) {
            characterString += "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'";
        };

        // make sure they didn't click no to everything
        if (characterString === "") {
            window.alert("You disabled all character types, so a password can't be generated. Try again.");
        };

        var charactersNumber = characterString.length;

        if (characterString !== "") {
            // this feels like it SHOULD be i <= passwordLength, but this is not the case because i is initialized as 0
            for (var i = 0; i < passwordLength; i++) {
                var currentCharacter = Math.floor(Math.random() * charactersNumber);
                passwordInProgress += characterString[currentCharacter];
                console.log(passwordInProgress);
            };            
        };

        return passwordInProgress;
    }
};

/* ASSIGNMENT CODE END */



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password !== undefined) {
      passwordText.value = password;
  };
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// clicking "generate password" calls writePassword()
// writePassword() calls generatePassword()
    // generatePassword() requests a number (passwordLength) between 8 and 128 for the length
    // generatePassword() concatenates multiple strings to make a list of possible characters, a string called characterString
    // the length of characterString is stored
    // a for loop runs passwordLength times, each time using Math.random() to generate a number between 0 and characterString
    // that number is used as the index of a character in characterString, which is concatenated into passwordInProgress
    // return passwordInProgress;
// generatePassword() returns a value that is used by writePassword(), which can then continue and display the generated password