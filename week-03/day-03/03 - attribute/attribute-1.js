const img = document.querySelector('img');
const secondButton = document.querySelector('button:last-of-type');

console.log(img.getAttribute('src'));
img.setAttribute('src', './cat.jpeg');
document.querySelector('a').setAttribute('href', 'https://www.greenfoxacademy.com/en/home');
secondButton.setAttribute('disabled', 'disabled');
secondButton.innerText = 'Dont\'t click me!';