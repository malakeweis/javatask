const numberInput = document.getElementById('numberInput');
const errorMessage = document.getElementById('errorMessage');
const digitalDisplay = document.getElementById('digitalDisplay');

const Digits = (value) => {
  digitalDisplay.innerHTML = '';
  [...value].forEach(digit => {
    const span = document.createElement('span');
    span.textContent = digit;
    span.classList.add('digit');
    digitalDisplay.appendChild(span);
  });
};
const isValidInput = (input) => {
    return /^\d{1,3}$/.test(input);
  };
const showError = (msg) => {
  errorMessage.textContent = msg;
};

const handleDisplay = () => {
  const inputVal = numberInput.value.trim();

  if (!isValidInput(inputVal)) {
    showError("Input must be 1 to 3 digits only (no letters or symbols).");
    digitalDisplay.innerHTML = '';
    return;
    
  }

  showError("");
  localStorage.setItem('savedNumber', inputVal);
  Digits(inputVal);
};

