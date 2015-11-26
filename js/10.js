

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
        if(4 <= a && a <= 20){
          return a + "th"
        }else{
          if(a % 10 == 1){
            return a + "st";
          }else{
            if(a % 10 ==2){
              return a + "nd"
            }else{
              if(a % 10 ==3){
                return a +"rd"
              }else{
                return a + "th"
              }
            }
          }

        }
      }
    }
  }
}
