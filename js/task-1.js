const categoriesList = document.querySelector('#categories');
const categoriesItem = categoriesList.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesItem.length}`);

categoriesItem.forEach(item => {
    const categoryName = item.querySelector('h2');
    const categoryItems = item.querySelectorAll('ul li');
    console.log(`Category:${categoryName.textContent}`);
    console.log(`Elements:${categoryItems.length}`);
})

