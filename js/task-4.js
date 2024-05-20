const formEl = document.querySelector('.login-form');
console.log(formEl);
formEl.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = this.email.value.trim();
    console.log(email);
    const password = this.password.value.trim();
    if (!email || !password) {
        alert('All form fields must be filled in');
    } else {
        const formData = {
            email: email,
            password: password,
        };
        console.log(formData);
    };
    this.reset();
});
const label = document.querySelectorAll('label');
// console.log(label);
for (const el of label) {
    el.classList.add('inputItem');

};
// console.log(inputElem);

const inputElem = document.querySelectorAll('input');
console.log(inputElem);
for (const el of inputElem) {
    el.classList.add("input");
};
inputElem[0].placeholder = 'Type area';
inputElem[0].placeholder.add

const btn = formEl.querySelector('button');

btn.classList.add('btn-class');
console.log(btn);

