function isPrimeNumber(a){
  if(a < 2){
    return false;
  }
  var i = 2;
  while(i <= a / 2){
    if(a % i == 0){
       return false;
    }
    i = i + 1;
  }
  return true;
}
