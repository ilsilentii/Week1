function piglatin(string){
  for (i = 0;i <= string.length - 1; i++) {
    var word = '';
    var str1 = string[i];
    var output = string[i].replace(str1[0], ' ');


  for (x = 0; x <= str1.length - 1; x++) {
    var pig = output + str1[0] + 'ay';
    }
    return pig;
  }
}

console.log(piglatin);

piglatin(process.argv.slice(2));
