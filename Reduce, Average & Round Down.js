
//Question: It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
//Return the average of the given array rounded down to its nearest integer.
//The array will never be empty.

function getAverage(arr){
// loop array -> to get the sum of array
  let sum = arr.reduce((a,c) => a + c )
// divide sum by length of array
  let avg =  sum / arr.length
//rounded down to nearest integer
  return Math.floor(avg)
}

// Without Comments
function getAverage(arr){
  let sum = arr.reduce((a,c) => a + c )
  let avg =  sum / arr.length
  return Math.floor(avg)
}

// One Line Function
function getAverage(arr){
  return Math.floor((arr.reduce((a,c) => a+c)) / arr.length)
}

//Final One Liner
const getAverage = arr => Math.floor((arr.reduce((a,c) => a+c)) / arr.length)

//Test Cases
console.log(getAverage([2,2,2,2]),2)
console.log(getAverage([1,2,3,4,5,]),3)
console.log(getAverage([1,1,1,1,1,1,1,2]),1)
