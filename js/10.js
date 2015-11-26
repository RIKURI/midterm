function toOrdinalNumber(a){
  if(a == 1){
    return "1st";
  }else{
    if(a == 2){
      return "2nd";
    }else{
      if(a == 3){
        return "3rd";
      }else{
        if(4 <= a <= 20){
          return a + "th"
        }else{
          
        }
      }
    }
  }
}
