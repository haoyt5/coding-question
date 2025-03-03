/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxReachIndex = 0
    for (let i = 0; i < nums.length; i ++){
        if ( i > maxReachIndex ) return false; // stuck
        maxReachIndex = Math.max(maxReachIndex, i + nums[i])
        if (maxReachIndex >= nums.length -1 ) return true
    }
    return true
};