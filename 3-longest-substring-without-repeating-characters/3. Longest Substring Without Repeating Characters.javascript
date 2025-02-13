/**
 * @param {string} s
 * @return {number}
 * two pointer (r and l) sliding window
 * set record the subString
 * max record the curMax
 */
 var lengthOfLongestSubstring = function(s) {
    let i = 0;
    const set = new Set();
    let max = 0;
    for (let j = 0; j < s.length; j++) {
        while(set.has(s[j])){ 
            set.delete(s[i])
            i++
        }
        set.add(s[j]);
        max = Math.max(max, set.size)
    }
    return max
};