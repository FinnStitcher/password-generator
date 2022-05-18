/* ASSIGNMENT CODE START */

function generatePassword() {
    var characterString = "";
    var passwordLength = window.prompt("Enter a number between 8 and 128 to be the length of your password.");
    passwordLength = parseInt(passwordLength);
    
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
            console.log(characterString);
        };

        // make sure they didn't click no to everything
        if (characterString === "") {
            window.alert("You disabled all character types, so a password can't be generated. Try again.");
        };

        // PUT RANDOM NUMBER GENERATOR HERE
    }
};

/* ASSIGNMENT CODE END */



// var password is set to the result of generatePassword()
// var passwordText is set to the textarea on the page where the password will be printed
// passwordText.value - the contents of the text area - is assigned the value of password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// clicking "generate password" calls writePassword()
// writePassword() calls generatePassword()
    // generatePassword() requests a number (passwordLength) between 8 and 128 for the length
        // this data is validated to make sure it's actually a number, and then converted to an integer value
    // generatePassword() concatenates multiple strings to make a list of possible characters
    // Math() is used to generate a bunch of random numbers within a certain range
    // each number is used as the index of a character in possibleCharacters, which is then added to a new string, newPassword
    // return newPassword;
// generatePassword() returns a value that is used by writePassword(), which can then continue and display the generated password