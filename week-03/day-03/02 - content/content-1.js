let nodes = document.querySelectorAll('p:not(:last-of-type)');
let lastNode = document.getElementsByClassName('animals')[0];
for (let node of nodes) {
    node.innerText += ' ' + lastNode.innerText;
    node.innerHTML += ' ' + lastNode.innerHTML;
}
