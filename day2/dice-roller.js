function diceroller(numberofdice) {
  var array = [];
  for (i = 0; i < numberofdice; i++) {
    var random = Math.floor(Math.random()*6);
    array.push(" " + random)
  }
  console.log("Rolled " + numberofdice + " dice: " + array);
}

diceroller(process.argv.slice(2));
