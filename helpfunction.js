function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
} 

function generateRandomPassword(length) {
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const smallLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const bigLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const specialChars = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

let result = digits[getRandomNumber(0,9)] + smallLetters[getRandomNumber(0,25)]+ bigLetters[getRandomNumber(0,25)] + specialChars[getRandomNumber(0,30)];
 
const combinedArr = [...digits, ...smallLetters, ...bigLetters, ...specialChars];

  for(i=0;i<length-4;i++){
      result+= combinedArr[getRandomNumber(0, combinedArr.length - 1)];
  }
return result;
}

function generateRandomEmail() {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const smallLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const bigLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const specialChars = ['+', '-', '.', '_',];
  let result='';
  const combinedArr = [...digits, ...smallLetters, ...bigLetters, ...specialChars];
  
    for(i=0;i<getRandomNumber(4, 10);i++){
        result+= combinedArr[getRandomNumber(0, combinedArr.length - 1)];
    }
    result+='@';
    for(i=0;i<getRandomNumber(3,5);i++){
      result+= smallLetters[getRandomNumber(0, smallLetters.length - 1)];
    }
    result+='.';
    for(i=0;i<getRandomNumber(2,3);i++){
      result+= smallLetters[getRandomNumber(0, smallLetters.length - 1)];
    }
  return result;
  }

function generateRandomUsername(length) {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const smallLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const bigLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const specialChars = ['-', '.', '_'];
   
  const combinedArr = [...digits, ...smallLetters, ...bigLetters, ...specialChars];
  let result='';
    for(i=0;i<length;i++){
        result+= combinedArr[getRandomNumber(0, combinedArr.length - 1)];
    }
  return result;
  }
  //неработает вызов в функцию
  const locators = require('./locators');
  async function clearField(field) {
    //Очистка полей которая работает
    await driver.findElement(field).sendKeys(Key.CONTROL + "a");
    await driver.findElement(field).sendKeys(Key.BACK_SPACE);
    //await driver.sleep(500);
}

module.exports = {
  getRandomNumber,
  generateRandomPassword,
  generateRandomEmail,
  generateRandomUsername,
  clearField
};