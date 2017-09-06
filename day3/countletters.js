function countletters(string) {
  var object = {};
  string = string.split("").filter(function(str) {
    return /\S/.test(str);
});
  for (i = 0; i < string.length; i++) {
    var character = string[i];
    if (character in object) {
      object[character]++;
    } else {
      object[character] = 1;
    }
 }
  return object;
}

console.log(countletters("lighthouse in the house"));




