function repeatStringNumTimes(str, num) {
  var i = 0;
  var repeatedStr= '';

  while(i < num){

    if(num < 0){
      return '';
    }
    repeatedStr += str;
    i++;
  }

  return repeatedStr;
}