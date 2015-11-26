function xor(a,b){
  if(a == true && b == true){
    return false;
  }else{
    if(a == true && b == false){
      return true;
    }else{
      if(a == false && b == true){
        return true;
      }else{
        return false;
      }
    }
  }
}
