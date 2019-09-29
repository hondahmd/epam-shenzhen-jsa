function generateBMI(body) {
    let {mass, height} = body;
    return {
        mass,
        height,
        bmi: mass / (height * height)
    }
}

let man = {mass: 70, height: 1.7};
let manBMI = generateBMI(man);
console.log(manBMI);