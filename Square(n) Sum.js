function squareSum(numbers){
  if(numbers.length >= 1){
    return numbers.map(x => Math.pow(x, 2)).reduce((a,c) => a+c)
  }else{
    return 0
  }
}
