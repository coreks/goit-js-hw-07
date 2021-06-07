const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientListEl = document.querySelector('#ingredients');

const ingredientsItemsEl = ingredients.map(ingredient => {
  const ingredientItemEl = document.createElement('li');
  ingredientItemEl.textContent = ingredient;
  return ingredientItemEl;
});

ingredientListEl.append(...ingredientsItemsEl);
