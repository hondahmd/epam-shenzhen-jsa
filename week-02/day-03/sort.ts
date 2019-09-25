'use strict';

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] > array[j]) {
                let tmp = array[i];
                array[i] = array[j];
                array[j] = tmp;
            }
        }
    }
    return array;
}

function sortPart(array, sortLength) {
    let startIndex = 0;
    let firstArray = array.slice(startIndex, startIndex + sortLength);
    let secondArray = array.slice(startIndex + sortLength, startIndex + 2 * sortLength);
    let sortArray = [];
    let firstPoi = 0;
    let secondPoi = 0;
    while (startIndex < array.length - 1) {
        while (firstPoi < firstArray.length && secondPoi < secondArray.length) {
            if (firstArray[firstPoi] < secondArray[secondPoi]) {
                sortArray.push(firstArray[firstPoi++]);
            } else {
                sortArray.push(secondArray[secondPoi++]);
            }
        }
        while (firstPoi < firstArray.length) {
            sortArray.push(firstArray[firstPoi++]);
        }
        while (secondArray < secondArray.length) {
            sortArray.push(secondArray[firstPoi++]);
        }
        startIndex += sortLength * 2;
    }
    for (let i = 0; i < sortArray.length; i++) {
        array[i] = sortArray[i];
    }
    return array;
}

function mergeSort(array) {
    let sortLength = 1;
    while (sortLength < array.length) {
        array = sortPart(array, sortLength);
        sortLength *= 2;
    }
    return array;
}

let shortArray = [];
let longArray = [];
for (let i = 0; i < 13; i++) {
    shortArray[i] = 13 - i;   
}
for (let i = 0; i < 100000; i++) {
    longArray[i] = Math.round(Math.random() * 13 + 1);
}

console.log('bubblesort: ');
console.log(bubbleSort(shortArray));
console.log('mergesort: ');
console.log(mergeSort(shortArray));

console.time('bubblesort');
bubbleSort(longArray);
console.timeEnd('bubblesort');
console.time('mergesort');
mergeSort(longArray);
console.timeEnd('mergesort');
