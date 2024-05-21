function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls>input');
const btnCreate = document.querySelector('[data-create]');
// console.log(btnCreate);
const btnDestroy = document.querySelector('[data-destroy]');
// console.log(btnDestroy);
btnCreate.addEventListener('click', createBoxes)
// btnDestroy.addEventListener('click', destroyBoxes);
btnDestroy.addEventListener('click', destroyBoxes);
const fragment = document.createDocumentFragment();
function createBoxes(){
    const amount = parseInt(inputEl.value);
    console.log(amount);
    if (amount < 1 || amount > 100) {
        alert('Please enter a number between 1 and 100.');
        return;
    } 
    const boxesElem = document.querySelector('#boxes');
    boxesElem.innerHTML = '';
let size = 30;

for (let i = 0; i < amount; i++){
    const box = document.createElement('div');
    box.style.width = `${size}px`
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
    size += 10;
  
    }
    boxesElem.appendChild(fragment);
};
function destroyBoxes() {
    const boxesElem = document.querySelector('#boxes');
    boxesElem.innerHTML = '';
}

inputEl.classList.add('input-class');
console.log(inputEl);
btnCreate.classList.add('btn-create');
console.log(btnCreate);
btnDestroy.classList.add('btn-destroy');
console.log(btnDestroy);

