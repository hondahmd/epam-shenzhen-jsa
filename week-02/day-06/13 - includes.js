function oneArray(base, compare) {
    let result = [];
    for (let number of base) {
        if (!compare.includes(number)) {result.push(number);}
    }
    return result;
}

function findNumbers(array1, array2) {
    let result1 = oneArray(array1, array2);
    let result2 = oneArray(array2, array1);
    return result1.concat(result2);
}

let array1 = [1,2,3];
let array2 = [2,3,4,5];
console.log(findNumbers(array1, array2));