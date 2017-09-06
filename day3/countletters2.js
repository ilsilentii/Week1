function indexof(string) {
  var object = {};
  for (i = 0; i < string.length; i++) {
    var character = string[i];
    if (character in object) {
      object[character].push(i);
    } else {
    object[character] = [i];
    }
 }
    return object;
}

var myArgs = (process.argv.slice(2));
var input = myArgs.join("").replace(/\s/g, "");
console.log(indexof(input));

//console.log(indexof("lighthouse in the house"));




