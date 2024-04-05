# algorithm: minprice and maxprofit, iterate 
# time: O(N)
# space: O(1) constant (2 variables)
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buy = prices[0] # or set to positive infinity float('inf')
        profit = 0
        for i, price in enumerate(prices):
            if price < buy:
                buy = price
            elif price - buy > profit:
                profit = price - buy
        
        return profit