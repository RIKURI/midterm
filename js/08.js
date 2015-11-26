
function isLeapYear(a){

  var A = (a % 100 == 0);
  var B = (a % 400 == 0);

  if(a % 4 == 0 && !A){
    return true;
  }else{
    if(a % 4 == 0 && A && !B){
      return false;
    }
  }
}
