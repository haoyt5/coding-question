/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let ini = init;
    let result = ini;
    return {
        increment: () => {
            return result += 1;
        },
        decrement: () => {
            return result -= 1;
        }, 
        reset: () => {
            return result = ini
        },  
    } 
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */