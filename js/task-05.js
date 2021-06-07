const inputNameEl = document.querySelector('#name-input');
const outputNameEl = document.querySelector('#name-output');

inputNameEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  outputNameEl.textContent = event.currentTarget.value;
  if (!event.currentTarget.value.trim()) {
    outputNameEl.textContent = 'незнакомец';
  }
}
// console.log(inputTextEl);
console.log(outputNameEl.textContent);
