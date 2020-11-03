function digital_root(n) {
  let numb = n.toString().split('').map(Number).reduce((a,c) => a+c)
  let total = numb
  while(numb >= 10){
    numb = total.toString().split('').map(Number).reduce((a,c) => a+c)
  }return numb
}
