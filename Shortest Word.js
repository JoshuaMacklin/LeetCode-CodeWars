// Simple, given a string of words, return the length of the shortest word(s).
//
// String will never be empty and you do not need to account for different data types.

//answer:
function findShort(s){
  let str = s.split(' ');
  let len = [];
  for(let i=0; i<str.length; i++){
    len.push(str[i].length)
  }return len.sort((a,b) => a-b)[0]
}
