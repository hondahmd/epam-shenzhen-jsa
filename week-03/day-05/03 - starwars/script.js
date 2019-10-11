'use strict';

function addAllCharacters(characters) {
    let charAndFilms = {};
    characters.forEach(character => {
        charAndFilms[character.name] = character.films;
        let newEle = document.createElement('li');
        newEle.textContent = character.name;
        newEle.addEventListener('click', () => {
            movieList.innerHTML = '';
            findFilms(charAndFilms[character.name]);
        });
        charList.appendChild(newEle);
    });
}

function findCharacters(name) {
    let request = new XMLHttpRequest();

    request.open('GET', `${searchURL}people/?name=${name}`, true);
    request.send();
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status === 200) {
                addAllCharacters(JSON.parse(request.response)['results']);
            } else {
                //addOneToList(['no match!'], charList);
            }
        }
    }
}

function findFilm(filmURL) {
    let request = new XMLHttpRequest();

    request.open('GET', filmURL, true);
    request.send();
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            let newFilm = document.createElement('li');
            if (request.status === 200) {
                newFilm.textContent = `${JSON.parse(request.response)['title']} (${JSON.parse(request.response)['release_date']})`;
                movieList.appendChild(newFilm);
            } else {

            }
        }
    }
}

function findFilms(filmURLs) {
    filmURLs.forEach(filmURL => {
        findFilm(filmURL);
    });
}

const inputBox = document.querySelector('input');
const button = document.querySelector('button');
const searchURL = 'https://swapi.co/api/';
const charList = document.querySelector('.character-names');
const movieList = document.querySelector('.movie-names');

button.addEventListener('click', () => {
    charList.innerHTML = '';
    movieList.innerHTML = '';
    findCharacters(inputBox.value);
});
