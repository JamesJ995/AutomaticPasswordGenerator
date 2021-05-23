// Assignment Code
var generateBtn = document.querySelector("#generate");
var charSet = "";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  charSet = "";
}

//Generates the password to be displayed
function generatePassword() {
  var returnValue = "";
  //ask for the length of the password
  var passLength = prompt("How long would you like your password to be? Please choose between 8 and 128 characters.");
  //check for correct password length, if incorrect break the procedure
  if (passLength < 8 || passLength > 128){
    alert("Password must be between 8 and 128 characters, please try again.");
    return;
  }
  //ask to include undercase characters, if yes add those to charset
  var underCase = confirm("Would you like to use undercase characters?");
  if (underCase){
    var addUnderCase = "abcdefghijklmnopqrstuvwxyz";
    charSet = charSet.concat(addUnderCase);
  }
  //ask to include uppercase characters, if yes add those to charset
  var upperCase = confirm("Would you like to use uppercase characters?");
  if (upperCase){
    var addUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    charSet = charSet.concat(addUpperCase);
  }
  //ask to include numeric characters, if yes add those to charset
  var numeric = confirm("Would you like to use numeric characters?");
  if (numeric){
    var addNumeric = "0123456789";
    charSet = charSet.concat(addNumeric);
  }
  //ask to include special characters, if yes add those to charset
  var special = confirm("Would you like to use special characters?");
  if (special){
    var addSpecial = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    charSet = charSet.concat(addSpecial);
  }
  //check to make sure that at least one character type has been chosen, otherwise break the procedure
  if(underCase == false && upperCase == false && numeric == false && special == false){
    alert("Please select at least one character type to include in the password, try again.");
    return;
  }

  //generates a password from charset, after being given user parameters
  function makePassword(){
    var retVal = "";
    returnValue = "";
    for (var i = 0; i < passLength; i++) {
      retVal += charSet.charAt(Math.random() * charSet.length);
    }
    return retVal;
  }

  //call makePassword(), then validate(). This starts a recursive loop which will generate a new password until it meets all of the users parameters.
  returnValue = makePassword();
  validate();

  //validate the generated password to ensure that all selected character types have been used, if not generate a new password by calling makePassword() and then validate() again.
  function validate(){
    console.log("validate ran");
    if (underCase){
      var test1;
      for (var i=0; i < addUnderCase.length; i++){
        test1 = returnValue.includes(addUnderCase.charAt(i));
        console.log(test1);
        if(test1 === true){
          console.log("Passed test1");
          i = addUnderCase.length + 1;
        }
      }
      if(test1 != true){
        returnValue = makePassword();
        console.log("Test1 failed");
        validate();
        return;
      }
    }
    if (upperCase){
      var test2;
      for (var i=0; i < addUpperCase.length; i++){
        test2 = returnValue.includes(addUpperCase.charAt(i));
        console.log(test2);
        if(test2 === true){
          console.log("Passed test2");
          i = addUpperCase.length + 1;
        }
      }
      if(test2 != true){
        returnValue = makePassword();
        console.log("Test2 failed");
        validate();
        return;
      }
    }
    if(numeric){
      var test3;
      for (var i=0; i < addNumeric.length; i++){
        test3 = returnValue.includes(addNumeric.charAt(i));
        console.log(test3);
      if(test3 === true){
        console.log("Passed test3");
        i = addNumeric.length + 1;
      }
      }
      if(test3 != true){
        returnValue = makePassword();
        console.log("Test3 failed");
        validate();
        return;
      }
    }
    if (special){
      var test4;
      for (var i=0; i < addSpecial.length; i++){
        test4 = returnValue.includes(addSpecial.charAt(i));
        console.log(test4);
      if(test4 === true){
        console.log("Passed test4");
        i = addSpecial.length + 1;
      }
      }
      if(test4 != true){
        returnValue = makePassword();
        console.log("Test4 failed");
        validate();
        return;
      }
    }
  }
  //return generated password
  return returnValue;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
