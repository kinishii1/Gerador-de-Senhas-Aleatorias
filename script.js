const passwordLengthInput = document.getElementById('password-length');
const passwordButton = document.getElementById('password-button');
const passwordParagraph = document.getElementById('password');

passwordButton.addEventListener('click', () => {
  const size = parseInt(passwordLengthInput.value);
  const generatedPassword = generatePassword(size);
  showPassword(generatedPassword);
});

function generateRandomCharacter() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?/[]{}|';
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

function generatePassword(size) {
  let password = '';

  while (password.length < size) {
    const character = generateRandomCharacter();

    if (!password.includes(character)) {
      password += character;
    }
  }

  return password;
}

function showPassword(password) {
  passwordParagraph.innerText = password ;
}

