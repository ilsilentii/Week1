function check(account_number){
  if (/[^0-9-\s]+/.test(account_number)) return false; //accepts only digits  or spaces
  var string = account_number.toString()
  var arr = string.split("");

for (i = 0; i < arr.length; i++){
      arr[i] = parseInt(arr[i]);
    }


  if (arr.length % 2 === 0) {

  for (var i = 1; i < arr.length; i+=2) {
    arr[i] *=2;
    if (arr[i] > 9){
          arr[i] = arr[i] - 9;
        }

    }
  } else
    for (var i = 0; i < arr.length; i+=2) {
        arr[i] *= 2;
        if (arr[i] > 9){
          arr[i] = arr[i] - 9;
        }

}

var sum = 0;

 for (i = 0; i < arr.length; i++) {

   sum = sum + arr[i];
 }


var valid = sum * 9

  if (valid % 10 === 0) {
    console.log("this is a valid number!")
  } else {
    console.log("this is not a valid number!")
  }

}

check(8891139891);
check(7992739871);


