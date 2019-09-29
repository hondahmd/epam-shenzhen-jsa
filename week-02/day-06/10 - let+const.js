function average(numbers) {
    const length = numbers.length;
    let sum = 0;
    numbers.forEach(element => sum += element);
    return sum / length;
}

var numbers = [1,2,3,4,5];
console.log(average(numbers));