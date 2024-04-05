# algorithm: minprice and maxprofit, iterate 
# time: O(N)
# space: O(1) constant (2 variables)
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_pc = float('inf') # set to positive infinity
        max_pf = 0
        for i, p in enumerate(prices):
            if p < min_pc:
                min_pc = p
            elif p - min_pc > max_pf:
                max_pf = p - min_pc
        
        return max_pf