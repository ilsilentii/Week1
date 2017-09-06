function reverse(string){
  for (i = 0; i <= string.length -1; i++) {
    var word = '';
    var str1 = string[i];

  for (x = str1.length -1; x >=0; x--){
    word += str1[x];
    }
   console.log(word);
  }
}

reverse(process.argv.slice(2));