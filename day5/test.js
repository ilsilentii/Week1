function mode(arr) {
  if (arr.length == 0) {
      return null;
  }
  var mapping = {};
  var max = arr[0], maxCount = 1;
  for(var i = 0; i < arr.length; i += 1)
    {
        var el = arr[i];
        if (mapping[el] == null) {
            mapping[el] = 1;
        } else {
            mapping[el] += 1;
        }
        if(mapping[el] > maxCount)
        {
            max = el;
            maxCount = mapping[el];
        }
    }
    return max;
}