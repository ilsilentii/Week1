function obfuscate(password){
  var output = password.toString().replace(/a/g, 4).replace(/e/g, 3).replace(/o/g, 0).replace(/l/g, 1);
  return output;
}

