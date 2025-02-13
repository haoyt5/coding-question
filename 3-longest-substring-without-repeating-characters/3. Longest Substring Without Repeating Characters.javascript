/**
 * @param {string} s
 * @return {number}
 * two pointer (left and right)
 * set record the current window
 * maxLen record the current max length
 * left pointer will shrink
 * right pointer will expand
 * each iteration:
 * if expand char is dup char in subStr, i++
 * each iteration right exapnd
 * each iteration find max between window size and maxLen
 */
 var lengthOfLongestSubstring = function(s) {
    let left = 0;
    const set = new Set();
    let maxLen = 0;
    for (let right = 0; right < s.length; right ++) {
        while(set.has(s[right])){
          set.delete(s[left])
          left++
        }
        set.add(s[right]);
        maxLen = Math.max(maxLen, set.size) // OR (right - left + 1)
    }
    return maxLen
};