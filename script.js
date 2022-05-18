/* ASSIGNMENT CODE START */

function generatePassword() {
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