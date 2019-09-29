function multiPurposeFunction(action){
    if (action){
        console.log(action(3));        
    }
}

function exampleNonAnonymFunction(param){
    return param*param;
}

function frameFunction(){
    multiPurposeFunction(exampleNonAnonymFunction);
    multiPurposeFunction(function(number) {
        return number * number;
    });
    multiPurposeFunction(number => {return number * number});
}

function multiPurposeFunction2(action){
    if (action){
        console.log(action('John', 'Smith'));
        console.log(action('', 'Bond'));        
    }
}

function frameFunction2(){
    // Write your code here
    multiPurposeFunction2(function(input1, input2) {
        if (input1 === '') {
            return input2;
        } else {
            return `${input1} ${input2}`;
        }
    });
    multiPurposeFunction2((input1, input2) => {
        return input1 === '' ? input2 : `${input1} ${input2}`;
    });
}

frameFunction();

frameFunction2();