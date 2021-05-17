// Assignment Code


// Slider Features
const characterAmount = document.getElementById ('characterAmountRange');
const numberAmount = document.getElementById ('characterAmountNumber');
characterAmount.addEventListener('input', syncCharacterAmount)
characterAmount.addEventListener('input', syncCharacterAmount)
function syncCharacterAmount(e){
  const value = e.target.value
  characterAmount.value = value
  numberAmount.value = value
}


// View Requirements Button
function openForm() {
  var x = document.getElementById("passwordGeneratorForm");
  if (x.style.display === "none") {
    x.style.display = "grid";
  } else {
    x.style.display = "none";
  }
}


// Establishing Array Variable Values
const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('password')



// Array Range Properties
const LOWERCASE_CHAR_CODES = arrayLowToHigh(97, 122)
const UPPERCASE_CHAR_CODES = arrayLowToHigh(65, 90)
const NUMBER_CHAR_CODES = arrayLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayLowToHigh(33, 47).concat(
  arrayLowToHigh(58, 64)
).concat(
  arrayLowToHigh(91, 96)
).concat(
  arrayLowToHigh(123, 126)
)



// Array Slider Properties
characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)


// Checkbox Checking Properties
form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSymbols = includeSymbolsElement.checked
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
  passwordDisplay.innerText = password
})


// Generating Random Password Properties
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  
  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

// Array Low To High Properties
function arrayLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}

