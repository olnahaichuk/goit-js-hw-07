const inputElem = document.querySelector('input#name-input');
const outputElem = document.querySelector('#name-output');
inputElem.addEventListener('input', onInputElemInput);

function onInputElemInput(){
    const trimmedValue = inputElem.value.trim();
    if(trimmedValue){
        outputElem.textContent = trimmedValue;
    } else {
        outputElem.textContent = 'Anonynous';
    }
}
