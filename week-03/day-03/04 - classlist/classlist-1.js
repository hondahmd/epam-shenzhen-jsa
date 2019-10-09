const items = document.querySelectorAll('p');

if (items[3].getAttribute('class') !== null && 'dolphin' in items[3].getAttribute('class')) {
    document.querySelector('.apple').innerText = 'pear';
}
if (items[0].getAttribute('class').indexOf('apple') !== -1) {
    document.querySelector('.cat').innerText = 'dog';
}
items[0].setAttribute('class', items[0].getAttribute('class') + ' ' + 'red');
items[1].setAttribute('style', 'border-radius: 10%');