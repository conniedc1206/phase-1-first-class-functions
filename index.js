//define a function called receivesAFunction 
//this function takes 1 argument: callback function
//call the callback function
function receivesAFunction(cb) {
    return (cb());
}
receivesAFunction();


//define a function called returnsANamedFunction
//this function takes no arguments
//return a named function

function returnsANamedFunction() {
    const namedFunction = parameter => console.log(parameter);
    return namedFunction;
}

//define a function called returnsAnAnonymousFunction 
//takes no arguments
//returns an anonymous function

function returnsAnAnonymousFunction() {
    return () => console.log('Anonymous Function');
}

//The returnsAnAnonymousFunction function should:take no arguments & return an anonymous function
// function returnsAnAnonymousFunction() {
//     let fn = function() {
//         console.log();
//     }
//     return function() {
//         console.log();
//     }
// }

// const returnsAnAnonymousFunction = function() {
//     return;
// }

//The returnsANamedFunction function should:take no arguments & return a named function
// function returnsANamedFunction() {
//     let fn = function namedFunction(){
//         console.log();
//     }
//     return fn;
// }