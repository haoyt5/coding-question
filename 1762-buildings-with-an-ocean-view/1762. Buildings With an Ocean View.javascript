/**
 * @param {number[]} heights
 * @return {number[]}
 * the rightmost always have a view
 * pointer start form right
 * every iterate should add a "valid" building indices
 * what is valid? 
 * - building is taller than rest of the right -> compare w/ tallest so far
 * - if it's taller
 * ---- add this building
 * ---- update the tallest
 */
var findBuildings = function (heights) {
    let valid = [];
    let max = 0;
    for (let i = heights.length - 1; i >= 0; i--) { // reverse iteration
        if (heights[i] > max) { // valid building
            valid.push(i)
            max = heights[i]
        }
    }
    return valid.reverse()
};