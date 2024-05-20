function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector('.change-color');
const widgetEl = document.querySelector('.widget');
const spanEl = document.querySelector('.color');
const body = document.querySelector('body');

buttonEl.addEventListener('click', function (event) {
  event.preventDefault();
  const randomColor = getRandomHexColor();
  spanEl.textContent = randomColor;
  body.style.backgroundColor = randomColor;
});

const pElem = widgetEl.querySelector('p');
console.log(pElem);
pElem.classList.add('text-color');

