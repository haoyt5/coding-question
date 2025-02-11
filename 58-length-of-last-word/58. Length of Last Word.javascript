/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const words = s.split(" ").filter(e=>e!=="")
    return words[words.length-1].length
};