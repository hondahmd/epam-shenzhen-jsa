function mostWord(words) {
    let max = 0;
    let maxName = '';
    for (let entry of Object.entries(words)) {
        if (entry[1] > max) {
            max = entry[1];
            maxName = entry[0];
        }
    }
    return maxName;
}

const words = {
    x: 1,
    y: 100,
    z: 10,
}
console.log(mostWord(words));