/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function (heights) {
    let stack = [];
    let maxHeight = 0;
    for (let i = heights.length; i >= 0; i--) {
        if (heights[i] > maxHeight) {
            stack.push(i)
            maxHeight = heights[i];
        }
    }
    return stack.reverse();
}; 