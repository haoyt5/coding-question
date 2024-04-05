# algorithm: component as key
# time: O(N) linear
# space: O(N) linear
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hm = {}
        for i, n in enumerate(nums):
            comp = target - n
            if comp in hm:
                return [hm[comp], i]
            else:
                hm[n] = i