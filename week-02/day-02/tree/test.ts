'use strict';

import BinarySearchTree from './binarysearchtree';

let binarysearchtree = new BinarySearchTree();

//console.log(binarysearchtree.empty());
for(let i = 0; i < 10; i++) {
    binarysearchtree.add(i.toString());
}
binarysearchtree.add('15');
binarysearchtree.add('12');
binarysearchtree.add('10');
binarysearchtree.add('11');
binarysearchtree.add('14');
binarysearchtree.add('13');
binarysearchtree.add('16');
//binarysearchtree.remove('15');
binarysearchtree.remove('15');
//console.log(binarysearchtree.search('1'));
//console.log(binarysearchtree.search('0'));
for(let i = 0; i < 17; i++) {
    console.log(binarysearchtree.search(i.toString()));
}
