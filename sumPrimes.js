function sumPrimes(num) {
  // How to determine a prime number?
  function isPrime(n){
    for(var i = 2; i < n; i++){
      if(n % i == 0){
        return false;
      }
      return n > 1;
    }
  }

  var sum = 0;
  for(var i = 0; i <= num; i++){
    if(isPrime){
      sum += num[i];
    }
  }

  return sum;
}