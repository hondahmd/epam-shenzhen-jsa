'use strict';

function useResponseData(data) {
    document.querySelector('.gifs').innerHTML = data;
}

function listStaticGifs() {
    for (let i = 0; i < gifsData.length; i++) {
        let singleGif = document.createElement('li');
        let gifContent = document.createElement('img');
        gifContent.setAttribute('src', gifsData[i]['images']['480w_still']['url']);
        gifContent.setAttribute('id', i);
        singleGif.appendChild(gifContent);
        list.appendChild(singleGif);
    }
}

let request = new XMLHttpRequest();
let gifsData = [];
const list = document.querySelector('.gifs');
const searchContent = 'LMAO';
const apiKey = 'xACkgh9J6yUg4Mu6nx0utyWXx3EIN0od';

request.open('GET', `http://api.giphy.com/v1/gifs/search?q=${searchContent}&api_key=${apiKey}&limit=16`, true);
request.send();
request.onreadystatechange = () => {
    if (request.readyState === 4) {
        if (request.status === 200) {
            gifsData = JSON.parse(request.response)['data'];
            listStaticGifs();
        } else {
            useResponseData(`Oh ho, game over: ${request.status}`);
        }
    }
}

list.addEventListener('click', (event) => {
    let selectedGif = event.target;
    selectedGif.setAttribute('src', gifsData[Number(selectedGif.getAttribute('id'))]['images']['original']['url']);
})