/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // use split to split the string to array; use left and right pointer to swap and use joint to convert the array back
    let strArr = s.split(/ /g);
    strArr = strArr.filter((e)=> e !== "")
    let left = 0;
    let right = strArr.length - 1;
    let curL = "";
    while (right > left){
        curL = strArr[left];
        strArr[left] = strArr[right];
        strArr[right] = curL;
        left = left + 1;
        right = right - 1;
    }
    return  strArr.join(" ")
};