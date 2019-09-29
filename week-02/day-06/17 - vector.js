function vectorInit(x = 0, y = 0, z = 0) {
    return [x, y, z];
}

const vectors = [
    [1,2,3],
    [],
    [2,3],
    [-1],
    [6,7,8,9]
];
let newVectors = [];

for (let vector of vectors) {
    newVectors.push(vectorInit(...vector));
}
console.log(newVectors);