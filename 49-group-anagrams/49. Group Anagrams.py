# algorithm: hashtable {sortedstr: [str]}; N: len(strs), K: max leng(str)
# time: O(NKlogK) linearithmic time
# space: O(NK) 

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        dict = {}
        for s in strs:
            word = s
            sort = ''.join(sorted(word))
            if sort in dict:
                dict[sort] += [word]
            else:
                dict[sort] = [word]
        return dict.values()
        