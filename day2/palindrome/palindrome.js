function isPalindrome(str) {
  var str = str.toLowerCase();
  var noSpaces = str.split(" ").join("");
  var mid = Math.floor(noSpaces.length/2);
  var last = noSpaces.length - 1;

  for (var i = 0; i <= mid; i++) {

    if (noSpaces[i] !== noSpaces[last - i]) {
      return false;
    }

  }
  return true;
}

// Test driver code. These should all log true.
console.log(isPalindrome('p'));
console.log(isPalindrome('foo'));
console.log(isPalindrome('racecar'));
console.log(isPalindrome('Kayak'));
console.log(isPalindrome('a santa at NASA'));
console.log(isPalindrome('live without evil'));
console.log(isPalindrome('just some random words'));

