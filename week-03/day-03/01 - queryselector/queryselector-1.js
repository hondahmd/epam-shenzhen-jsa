let king = document.querySelector('#b325');
console.log(king);

let businessLamp = document.querySelectorAll('.big');
for (let node of businessLamp) {
    console.log(node);
}

let conceitedKing = document.querySelector('section').querySelectorAll('div');
console.log(conceitedKing);
for (let node of conceitedKing) {
    alert(node.innerText);
}

let noBusiness = document.querySelectorAll('.asteroid:not(#b325)');
console.log(noBusiness);