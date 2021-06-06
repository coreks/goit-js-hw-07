const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

decrementEl.addEventListener('click', () => {
  valueEl.textContent = --counterValue;
});

incrementEl.addEventListener('click', () => {
  valueEl.textContent = ++counterValue;
});
