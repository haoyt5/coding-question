/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 * s to array
 * iterate pattern 
 * charToWord {char, word}
 * wordToChar {word, char}
 */
 var wordPattern = function(pattern, s) {
  const words = s.split(' ');
  const charToWord = new Map()
  const wordToChar = new Map()
  if (pattern.length !== words.length){
    return false
  }
  for (let i = 0; i < pattern.length; i++){
    const char = pattern[i]
    const word = words[i]
    if(charToWord.has(char)){
        if(charToWord.get(char) !== word){
          return false
        } 
        
    } else {
      charToWord.set(char, word);
    }

    if(wordToChar.has(word)){
      if(wordToChar.get(word) !== char){
        return false
      } 

    } else {
      wordToChar.set(word, char);
    }
  }


  return true
};