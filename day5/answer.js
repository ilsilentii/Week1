function stdev(arr) {

  var num = 0;
  for (var i in arr) {
    num += arr[i];
  }
  var mean =  num / arr.length;

  for (var i in arr) {
    arr[i] = (arr[i] - mean) * (arr[i] - mean);
  }

  add = 0;
  for (var i in arr) {
    add += arr[i];
  }

  var out = Math.sqrt(add / arr.length);


  return out;


}

console.log(stdev([2,2,5]));