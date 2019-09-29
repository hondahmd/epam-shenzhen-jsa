function carWrapper(model, color, year, doors, specPropName, specPropValue){
    return {
        model,
        color,
        year,
        doors,
        [specPropName]: specPropValue,
    }    
}

console.log(JSON.stringify(carWrapper('Benz','black',1886,0,'historical',true)));
// expected output: { model: 'Benz', color: 'black', year: 1886, doors: 0, historical: true}