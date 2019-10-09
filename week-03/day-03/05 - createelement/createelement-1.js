let list = document.querySelector('ul.asteroids');
let container = document.querySelector('.container');

let greenFox = document.createElement('li');
greenFox.innerText = 'The Green Fox';
list.appendChild(greenFox);

let lamLighter = document.createElement('li');
lamLighter.innerText = 'The LampLighter';
list.appendChild(lamLighter);

let heading = document.createElement('h1');
heading.innerText = 'I can add elements to the DOM!';
container.appendChild(heading);

let image = document.createElement('img');
image.setAttribute('src', './chuanchuan.jpg');
container.appendChild(image);
