function findMax(numbers) {
    let max = numbers[0];
    for (let number of numbers) {
        if (number > max) {max = number;}
    }
    return max;
}

const numbers = [1,2,3,4,5,6];
console.log(findMax(numbers));