//In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

//make as few changes as possible.
//if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
//For example:
//solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
//solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
//solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

//Answer: 
//for loop to check if ( let strArray = string.split('') ) strArray[i] === strArray[i].upperCase, else lowercase
//strArray = s.split('')
  //for loop (let i = 0; i < s.length; i++){
  //}

function solve(s){
  let strArray = s.split('')
  let uppArray = ''
  let lowArray = ''
  let answer
  
  for (let i = 0; i < strArray.length; i++){
    if(strArray[i] === strArray[i].toUpperCase()){
      uppArray += strArray[i]
    }else{
      lowArray += strArray[i]
    }
  }
  
  if (lowArray.length >= uppArray.length ){
    answer = s.toLowerCase();
  }else{
    answer = s.toUpperCase();
  }
  
  return (answer)
}
