/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let l = 0;
    let r = s.length -1;
    while (l < r){
        let left = s[l]
        s[l] = s[r]
        s[r] = left;
        l++
        r--
    }
    return s;
};