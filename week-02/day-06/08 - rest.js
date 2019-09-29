function createMatrix(row, col, ...lines) {
    let matrix = [[]];
    if (lines.length < row) {return null;}
    for (let i = 0; i < row; i++) {
        if (lines[i].length !== col) {
            return null;
        } else {
            matrix[i] = lines[i];
        }
    }
    return matrix;
}

let matrix = createMatrix(2, 2, [1,2], [3,4]);
console.log(matrix);