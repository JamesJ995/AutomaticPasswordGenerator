// Assignment Code
var generateBtn = document.querySelector("#generate");
var charSet = "";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var retVal = "";
  var passLength = prompt("How long would you like your password to be? Please choose between 8 and 128 characters.");
  if (passLength < 8 || passLength > 128){
    alert("Password must be between 8 and 128 characters, please try again.");
    return;
  }
  var underCase = confirm("Would you like to use undercase characters?");
  if (underCase){
    charSet = "abcdefghijklmnopqrstuvwxyz";
  }
  var upperCase = confirm("Would you like to use uppercase characters?");
  if (upperCase){
    var addUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    charSet = charSet.concat(addUpperCase);
  }
  var numeric = confirm("Would you like to use numeric characters?");
  if (numeric){
    var addNumeric = "0123456789";
    charSet = charSet.concat(addNumeric);
  }
  var special = confirm("Would you like to use special characters?");
  if (special){
    var addSpecial = "!@#$%^&*()";
    charSet = charSet.concat(addSpecial);
  }
  if(underCase == false && upperCase == false && numeric == false && special == false){
    alert("Please select at least one character type to include in the password, try again.");
    return;
  }
  for (var i = 0; i < passLength; i++) {
    retVal += charSet.charAt(Math.random() * charSet.length);
  }
  return retVal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
