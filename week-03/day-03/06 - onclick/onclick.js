let partyButton = document.querySelector('button');
let wholeRoom = document.querySelector('div');

partyButton.onclick = () => {
    if (wholeRoom.hasAttribute('class')) {
        wholeRoom.removeAttribute('class');
    } else {
        wholeRoom.setAttribute('class', 'party');
    }
};