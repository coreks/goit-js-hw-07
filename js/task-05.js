const inputNameEl = document.querySelector('#name-input');
const outputNameEl = document.querySelector('#name-output');

inputNameEl.addEventListener('input', onInputChange);
let text = [];
function onInputChange(event) {
  outputNameEl.textContent = event.currentTarget.value;
  if (!event.currentTarget.value) {
    outputNameEl.textContent = 'незнакомец';
  }
}
// console.log(inputTextEl);
// console.log(outputNameEl.textContent);
