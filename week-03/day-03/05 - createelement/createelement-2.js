const planetData = [
    {
      category: 'inhabited',
      content: 'Foxes',
      asteroid: true,
    },
    {
      category: 'inhabited',
      content: 'Whales and Rabbits',
      asteroid: true,
    },
    {
      category: 'uninhabited',
      content: 'Baobabs and Roses',
      asteroid: true,
    },
    {
      category: 'inhabited',
      content: 'Giant monsters',
      asteroid: false,
    },
    {
      category: 'inhabited',
      content: 'Sheep',
      asteroid: true,
    },
  ];

const list = document.querySelector('.asteroids');

list.removeChild(list.querySelector('li'));
for (let item of planetData) {
    if (item.asteroid) {
        let newNode = document.createElement('li');
        newNode.setAttribute('class', item.category);
        newNode.textContent = item.content;
        list.appendChild(newNode);
    }
}
