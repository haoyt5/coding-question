/**
 * @param {string} s
 * @return {number}
 * @time O(n)
 * @space O(n)
 * two pointer (left and right)
 * set record the  window (no dup char)
 * maxLen record the current max length
 * left pointer will shrink
 * right pointer will grow
 * each iteration:
 * if expand char is dup char in window, shrink the left until right index (removes characters from left until the duplicate is gone.)
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