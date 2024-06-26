# algorithm: move the pointer on the string, *skip non alphabetic and numeric, to check if it's equal
# time: O(N) linear
# space: O(1) constant
class Solution:
    def isPalindrome(self, s: str) -> bool:
        if len(s) < 2:
            return True
        i, j = 0, len(s) - 1
        while i < j:
            while i < j and not s[i].isalnum():
                i += 1
            while i < j and not s[j].isalnum():
                j -= 1

            if s[i].lower() != s[j].lower():
                return False
            i += 1
            j -= 1
        return True