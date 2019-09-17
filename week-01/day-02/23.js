'use script';

let s = [1, 2, 3, 8, 5, 6];
s = s.map(x => {
    if (x === 8) {
        return 4;
    }
    return x;
});

console.log(s[3]);