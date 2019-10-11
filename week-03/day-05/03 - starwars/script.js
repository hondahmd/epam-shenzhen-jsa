'use strict';

function addOneToList(newContent, list) {
    let newEle = document.createElement('li');
    newContent.forEach(element => {
        newEle.textContent += element + ' ';
    });
    newEle.addEventListener('click', () => {
        findFilms(charAndFilms[newContent]);
    });
    list.appendChild(newEle);
}

function addAllCharacters(characters) {
    characters.forEach(character => {
        charAndFilms[character.name] = character.films;
        let newEle = document.createElement('li');
        newEle.textContent = character.name;
        newEle.addEventListener('click', () => {
            findFilms(charAndFilms[newContent]);
        });
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
                addOneToList(['no match!'], charList);
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
            if (request.status === 200) {
                
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
let charAndFilms = {};

button.addEventListener('click', () => {
    findCharacters(inputBox.value);
});
