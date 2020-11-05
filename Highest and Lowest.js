//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
  let first = numbers.split(' ').sort(function (a,b){return b-a})
  let second = numbers.split(' ').sort(function (a,b){return b-a}).reverse()
  return (`${first[0]} ${second[0]}`)
}
