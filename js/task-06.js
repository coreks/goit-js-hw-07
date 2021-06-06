const inputEl = document.querySelector('#validation-input');
const dataLengthEl = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const val = event.currentTarget.value;

  if (val.length.toString() === dataLengthEl) {
    if (event.currentTarget.classList.contains('invalid')) {
      event.currentTarget.classList.remove('invalid');
    }

    event.currentTarget.classList.add('valid');
  } else {
    if (event.currentTarget.classList.contains('valid')) {
      event.currentTarget.classList.remove('valid');
    }

    event.currentTarget.classList.add('invalid');
  }
}
