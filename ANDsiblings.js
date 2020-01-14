
/**
 * finds all combinations of numbers in a string
 * @param {string} string - string to be parsed
 */
function solution(string) {
  let results = [];
  
  //extracting digits from the string
  let firstCandidate = string.replace(/[^0-9]/g, '');

 if (firstCandidate.length == 0) {
  console.log("Error: String provided contained no digits.");
 } else if (firstCandidate.length == 1) {
    results.push(firstCandidate);
    return results;
  }

  //recursive step - puts each digit in the front of the string and does the same for the substrings of the remaing digits
  for (let i = 0; i < firstCandidate.length; i++) {
    let firstDigit = firstCandidate[i];
    let digitsLeft = firstCandidate.substring(0, i) + firstCandidate.substring(i + 1);
    let recursiveCombinations = solution(digitsLeft);
    for (let j = 0; j < recursiveCombinations.length; j++) {
      results.push(firstDigit + recursiveCombinations[j]);
    }
  }
  //removing duplicates
  let final = Array.from(new Set(results));
  
    return final;
}
