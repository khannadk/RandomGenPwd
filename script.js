// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variable input
var chosenChar = [];

var passwordLength;


var lower = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var upper = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var special = [ "!", "@", "#", "$", "%", "^", "&", "*", "+" ];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


// Opening Alert 
alert("Time to generate a new password!");

// User Prompts upon clicking generate button 
generateBtn.addEventListener("click", passwordReqs);

function passwordReqs() {
    chosenChar = [];

    alert("Follow the next prompts to create your password");

     passwordLength = parseInt(prompt("Choose between 8 and 128 characters for your password length"));

      if (passwordLength >= 8 && passwordLength <= 128) {
        alert("Password length Requirements Met!")         

     addSpecial = confirm("Do you want any Special characters?");
     addNumbers = confirm("Do you want any Numeric Characters?");
     addLower = confirm("Do you want any Lowercase characters?");
     addUpper = confirm("Do you want any Uppercase characters?");
      }else { alert("not a valid password");
           passwordReqs ();
    }


    // if (addSpecial || addNumbers || addLower || addUpper) {
    //     alert("Your password meets all requirements!");
    // }else { alert("Your password does meet all the requirements"); 
    //    passwordReqs ();
    //   }

    if (addSpecial) {
        chosenChar = chosenChar.concat(special);
     }
    if (addNumbers) {
        chosenChar = chosenChar.concat(numbers);
    }

    if (addLower) {
        chosenChar = chosenChar.concat(lower);
    }

    if (addUpper) {
        chosenChar = chosenChar.concat(upper);
    }
    
    writePassword();
}

 function generatePassword() {
    var password = "";
    for (i = 0; i < passwordLength; i++) {
        password += chosenChar[Math.floor(chosenChar.length * Math.random())];
    }

    return password;
    }


// // Write password to the #password input
   function writePassword() {
     var password = generatePassword();
     var passwordText = document.querySelector("#password");
     passwordText.value = password;
   
// call writePassword() after prompts met 
   }