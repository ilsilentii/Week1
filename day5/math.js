function add(a) {
  return out(a + a);
}

function out(answer) {
  console.log("The answer is " + answer)
}

function times (a) {
  return out(a * a);
}

module.exports = {export1: add, export2: times};