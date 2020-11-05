//Your task is to remove all consecutive duplicate words from string, leaving only first words entries. For example:

//"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

//--> "alpha beta gamma delta alpha beta gamma delta"

//Attempt 1
const removeConsecutiveDuplicates = s => {
  let arr = s.split(' ');
  let consecutiveArr = [];
  for(let i=0; i<arr.length; i++){
    if(arr[i] === arr[i+1]){
    }else{
      consecutiveArr.push(arr[i]);
    }
  }return consecutiveArr.join(' ')
}

//Attempt 1 Clean Up
const removeConsecutiveDuplicates = s => {
  let arr = s.split(' ');
  let consecutiveArr = [];
  for(let i=0; i<arr.length; i++){
    if(arr[i] !== arr[i+1]){
      consecutiveArr.push(arr[i]);
    }
  }return consecutiveArr.join(' ')
}
