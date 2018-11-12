function factorialize(num){
    var product = 1;
    for(var i = 2; i <= num; i++){
        product *= i;
    }
    return product;
}