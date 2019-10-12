'use strict';

function* getName(array) {
    let index = Math.round(Math.random() * array.length + 1);
    yield array[index];
}

const header = document.querySelector('header');
const button = document.querySelector('button');
const names = ['Esther','Eulalia','Harriet','Ida','Lula','Marguerite','Mary','Minerva','Nancy','Pearl','Rowena','Theodosia','Zephyrine','Albert','Bernard','Chester','Edmund','Ira','Leon','Linus','Ralph','Roger','Stanley','Van','Victor','Virgil','Wilfred','Esmeralda','Fernanda','Flavia','Ines','Io','Ione','Ludovica','Olga','Noa','Fflur','Saskia','Soleil','Anders','Bas','Boris','Dev','Dimitri','Ivan','Lazaro','Magnus','Neo','Seb','Soren','Vladimir','Teilo','Andromeda','Aster','Azalea','Bee','Birdie','Blossom','December','Dove','Lilac','Maple','Nova','Vega','Ash','Beach','Bear','Frost','Hawk','Huckleberry','Mars','Oak','Pike','Agatha','Agnes','Constance','Ethel','Eunice','Francine','Gertrude','Ida','Lenore','Mildred','Myrtle','Opal','Thomasina','Wilhelmina','Clarence','Edgar','Floyd','Irving','Leonard','Murray','Osbert','Oswald','Percival','Sheldon'];



button.addEventListener('click', () => {
    let name = getName(names);
    header.textContent = name.next().value;
});
