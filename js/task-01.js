const categoriesListEl = document.querySelector('#categories').children;
console.log(`В списке ${categoriesListEl.length} категории`);

for (let i = 0; i < categoriesListEl.length; i++) {
  const nameEl = categoriesListEl[i].firstElementChild.textContent;
  const valueEl = categoriesListEl[i].lastElementChild.children.length;
  console.log(`Категория: ${nameEl} Количество элементов: ${valueEl}`);
}
