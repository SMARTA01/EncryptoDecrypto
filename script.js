function caesar(s, n)
	{
		return s
    .split('')
    .map(c => {
      const ascii = c.charCodeAt(0);
      if (' ' == c) return c;
return c.toUpperCase().charCodeAt(0) + n > 90
        ? String.fromCharCode(ascii + n - 90 + 64)
        : String.fromCharCode(ascii + n);
    })
    .join('');
	}
  

  function railfence(messageInput, rowNumber) {
    var messageOutput = '';
  
    var fanceTable = [];
    for (var pos = 0; pos < rowNumber; ++pos) {
      fanceTable[pos] = [];
    }
  
    // First, enter the letters into the fence table:
  
    var r = 0;
    var direction = 1;
  
    for (var c = 0; c < messageInput.length; ++c) {
      fanceTable[r].push(messageInput[c]);
  
      if (((r == rowNumber - 1) && (direction == 1)) ||
          ((r == 0) && (direction == -1))) {
        direction = -direction;
      }
  
      r = r + direction;
    }
  
    // Then, read off the ciphertext:
  
    var row = 0;
    while (row < rowNumber) {
      for (var pos = 0; pos < fanceTable[row].length; ++pos) {
        messageOutput = messageOutput.concat(fanceTable[row][pos]);
      }
      ++row;
    }
  
    return messageOutput;
  }

// Vigenere Cipher
function isLetter (str) {
  return str.length === 1 && str.match(/[a-zA-Z]/i)
}
 
/**
 * Check if is Uppercase or Lowercase
 * @param {String} character - character to check
 * @return {Boolean} result of the checking
 */
function isUpperCase (character) {
  if (character === character.toUpperCase()) {
    return true
  }
  if (character === character.toLowerCase()) {
    return false
  }
}
 
/**
 * Encrypt a Vigenere cipher
 * @param {String} message - string to be encrypted
 * @param {String} key - key for encrypt
 * @return {String} result - encrypted string
 */
function vigenere (message, key) {
  let result = ''
 
  for (let i = 0, j = 0; i < message.length; i++) {
    const c = message.charAt(i)
    if (isLetter(c)) {
      if (isUpperCase(c)) {
        result += String.fromCharCode((c.charCodeAt(0) + key.toUpperCase().charCodeAt(j) - 2 * 65) % 26 + 65) // A: 65
      } else {
        result += String.fromCharCode((c.charCodeAt(0) + key.toLowerCase().charCodeAt(j) - 2 * 97) % 26 + 97) // a: 97
      }
    } else {
      result += c
    }
    j = ++j % key.length
  }
  return result
}

function add()
{
   var input= document.getElementById("text-input").value;
   var output= vigenere(input, 'code');
   document.getElementById("text-output").value= output;
}