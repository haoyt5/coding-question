/**
 * @param {string[]} strs
 * @return {string[][]}
* hashmap {sortedStr, str[]}
 */
var groupAnagrams = function(strs) {
    const map = new Map()
    for(const str of strs){
        const sorted = str.split("").sort().join(""); // string should be array to sort
        if(!map.get(sorted)){
            map.set(sorted, []); // initialize 
        }
        map.get(sorted).push(str)
    }
    return Array.from(map.values()); // only the str[] is the value
};
