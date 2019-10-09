const replaceContents = ['apple', 'banana', 'cat', 'dog'];
let rawNodes = document.querySelectorAll('li');
for (let i = 0; i < rawNodes.length; i++) {
    rawNodes[i].innerText = replaceContents[i];
}
document.querySelector('ul').setAttribute('class', 'ul-bg');