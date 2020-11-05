//Write function avg which calculates average of numbers in given list.

function find_average(array) {
  let divide = array.length
  let add = array.reduce(function (a,b){
    return a + b
  }, 0)
  let result = (add/divide)
  return result;
}
