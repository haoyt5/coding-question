/**
 * @param {string} s
 * @return {number}
 * time: O(N)
 * space: O(1)
 */
var lengthOfLastWord = function(s) {
    // start from last index, ignore trailing space, count the char until encounter space
    let i = s.length - 1;
    let length = 0;
    while(i >=0 && s[i]===" "){
      i--;
    }

    while(i >= 0 && s[i] !==" "){
      length++;
      i--;
    }

    return length
};
// var lengthOfLastWord = function(s) {
//     // time:O(n), spaceo(n)
//     const words = s.split(" ").filter(e=>e!=="")
//     return words[words.length-1].length
// };