const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientListEl = document.querySelector('#ingredients');

for (let i = 0; i < ingredients.length; i++) {
  const ingredientItemEl = document.createElement('li');
  ingredientListEl.appendChild(ingredientItemEl);
  ingredientItemEl.textContent = ingredients[i];
}

// ingredients.forEach(ingredient => {
//   const ingredientItemEl = document.createElement('li');
//   ingredientListEl.appendChild(ingredientItemEl);
//   ingredientItemEl.textContent = ingredient;
// });
