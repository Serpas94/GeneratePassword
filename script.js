// Character sets
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const specialCharacters = '@%+\/\'!#$^?:,)(}{][~_-.';
let passwordLength;

// Function to generate a random password
function generatePassword() {
  // Get password length from user input
  passwordLength = prompt("Choose a password length between 8 and 128 characters.");

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return generatePassword();
  }

  // Character type confirmations
  const includeLowercase = confirm("Include lowercase letters?");
  const includeUppercase = confirm("Include uppercase letters?");
  const includeNumbers = confirm("Include numbers?");
  const includeSpecialChars = confirm("Include special characters?");

  if (!(includeLowercase || includeUppercase || includeNumbers || includeSpecialChars)) {
    alert("Please select at least one character type.");
    return generatePassword();
  }

  // Combine selected character sets
  let characterSet = '';
  if (includeLowercase) characterSet += lowercaseLetters;
  if (includeUppercase) characterSet += uppercaseLetters;
  if (includeNumbers) characterSet += numbers;
  if (includeSpecialChars) characterSet += specialCharacters;

  // Generate the random password
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }

  return password;
}

// Event listener for the generate button
document.querySelector("#generate").addEventListener("click", function () {
  const password = generatePassword();
  document.querySelector("#password").value = password;
});
