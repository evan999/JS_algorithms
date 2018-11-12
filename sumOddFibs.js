function sumFibs(num) {
  var fibs = [];
  var sum = 0;
  if(i == 1){
    sum = 1;
  }
  for(var i = 0; i < num; i++){
    if(fibs[i] % 2 !== 0){
      fibs[i+1] = fibs[i] + fibs[i-1]; 
      sum = sum + fibs[i];
    }
  }
  return sum;
  


}

sumFibs(4);