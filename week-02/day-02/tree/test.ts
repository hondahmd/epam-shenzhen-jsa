'use strict';

import BinarySearchTree from './binarysearchtree';

let binarysearchtree = new BinarySearchTree();

//console.log(binarysearchtree.empty());
for(let i = 0; i < 10; i++) {
    binarysearchtree.add(i.toString());
}
binarysearchtree.remove('2');
//console.log(binarysearchtree.search('1'));
//console.log(binarysearchtree.search('0'));
for(let i = 0; i < 10; i++) {
    console.log(binarysearchtree.search(i.toString()));
}
