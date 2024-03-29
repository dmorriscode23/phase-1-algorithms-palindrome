function isPalindrome(word) {
  // Write your algorithm here
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}

/* 
  Add your pseudocode here
  1.Convert string to an array of charecters.
  2.Reverse the array and join it back into a string.
  3.Compare the reversed string to the original string.
  -if they are the same return 'true'
  -Otherwise return 'false'
*/

/*
  Add written explanation of your solution here
  We first start with a function that checks if we have a word that is a palindrome.
  I then began to write my pseudocode to solve the lab. But in order to complete the lab 
  I had to first take a variable that would take the given string and sets it as an array of
  individual charecter. I would then use the reverse method to reverse the order of the array.
  As from there I would use the join method to bring that reversed array back into a string.
  Lastly, I used return word === reversed; to see if the given string was a match to the reversed
  array of the given string. If it matched it would log 'true', if it was false it would log 'false'.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
