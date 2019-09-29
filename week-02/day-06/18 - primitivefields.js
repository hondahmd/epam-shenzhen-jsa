function primitiveFields(object) {
    let results = [];
    primitiveTypes = ['undefined', 'null', 'boolean', 'string', 'number'];
    for (let entry of Object.entries(object)) {
        if (primitiveTypes.includes(typeof(entry[1]))) {
            results.push(entry[0]);
        }
    }
    return results;
}

console.log(primitiveFields({x:1,y:true, z:[]}));
