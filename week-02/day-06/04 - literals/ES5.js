function carWrapper(model, color, year, doors, specPropName, specPropValue){
    var result = {
        model: model,
        color: color,
        year: year,
        doors: doors,
    };
    result[specPropName] = specPropValue;
    return result;
}

console.log(JSON.stringify(carWrapper('Benz','black',1886,0,'historical',true)));
// expected output: { model: 'Benz', color: 'black', year: 1886, doors: 0, historical: true}