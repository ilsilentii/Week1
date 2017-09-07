function map(arrArg, callback) {
  var arr = [];

  arrArg.forEach(function(x){
    arr.push(callback(x));
  });

  console.log(arr);

};



var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

