'use strict';

const jokeURL = 'http://api.icndb.com/jokes/random';
const button = document.querySelector('button');
const div = document.querySelector('div');

/*
button.addEventListener('click', () => {
    fetch(jokeURL)
        .then(reponse => reponse.json())
        .then(responseJson => {
            let newJoke = document.createElement('p');
            newJoke.textContent = responseJson['value']['joke'];
            div.appendChild(newJoke);
        })
        .catch(error => console.log(error));
});
*/

button.addEventListener('click', async () => {
    let response = await fetch(jokeURL);
    let data = await response.json();
    let newJoke = document.createElement('p');
    newJoke.textContent = data['value']['joke'];
    div.appendChild(newJoke);
});
