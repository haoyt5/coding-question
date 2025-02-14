/**
 * @param {number[]} heights
 * @return {number[]}
 * reverse iteration
 * track the maxHeight
 * 
 * 
 * use a stack to record the valid heights
 */
var findBuildings = function (heights) {
    let valid = [];
    let maxHeight = 0; // Track the maximum height seen from the right
    for (let i = heights.length; i >= 0; i--) {  // Traverse from right to left
        if (heights[i] > maxHeight) { // if curHeight exceed the max
            valid.push(i)  // means it has a ocean view
            maxHeight = heights[i]; // update the tallest seen so far
        }
        /* else -> building are too short to view */
    }
    return valid.reverse();
}; 