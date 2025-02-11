/**
 * @param {string} s
 * @return {number}
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
//     const words = s.split(" ").filter(e=>e!=="")
//     return words[words.length-1].length
// };