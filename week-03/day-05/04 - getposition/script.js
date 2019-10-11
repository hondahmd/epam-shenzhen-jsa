'use strict';

function searchAndLocate(ipAddress) {
    let request = new XMLHttpRequest();
    
    request.open('GET', `${locateURL}${ipAddress.value}?access_key=${ipKey}`);
    request.send();
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status === 200) {
                mapFrame.setAttribute('src', `${mapURL}${mapKey}&q=${JSON.parse(request.response)['city']}`);
            } else {
                console.log('Request failed');
            }
        }
    };
}

const mapURL = 'https://www.google.com/maps/embed/v1/place?key=';
const mapKey = 'AIzaSyDNpuXxug8jOx6LMOZ51yrcl0tTLpWrle4';
const locateURL = 'http://api.ipapi.com/';
const ipKey = '5ef76a80536e19f10a030723100bafe3';
const mapFrame = document.querySelector('iframe');
let ipAddress = document.querySelector('input');
let button = document.querySelector('button');

button.addEventListener('click', () => {
    searchAndLocate(ipAddress);
});
