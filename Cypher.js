// This is a JavaScript program. This is a cypher.
// This cypher is going to use the 15th letter after the letter the user would use.
// The program will then print out the encoded message.

// Function will implement Caesar Cipher to encrypt / decrypt the msg by shifting the letters of the message acording to the key.
function programCipher(str, num) {
    var lowerCaseStr = str.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newStr = '';

  for(var i = 0; i < lowerCaseStr.length; i++) {
    var currentLetter = lowerCaseStr[i];
    if (currentLetter === ' ') {
        newStr += currentLetter;
        continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if (newIndex > 16) newIndex = newIndex - Number(16);
    if (newIndex < 0) newIndex = newIndex + Number(16);
    if (str[i] === str[i].toUpperCase()) {
        newStr += alphabet[newIndex].toUpperCase();
    }
    else newStr += alphabet[newIndex];
  }
return newStr;

}

// Console will output the encoded message
console.log(programCipher(prompt("Enter a message: "), 16));
