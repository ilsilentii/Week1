function average(list) { // missing closing bracket
  var sum = 0;

  for (var num of list) {
    sum += num; // changed ++ to +=
  }

  return sum / list.length;
}

console.log(average([3, 5, 7]));
