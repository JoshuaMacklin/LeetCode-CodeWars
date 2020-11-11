//Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// returns 'www.codewars.com'
//removeUrlAnchor('www.codewars.com#about')
// returns 'www.codewars.com?page=1'
//removeUrlAnchor('www.codewars.com?page=1')

//answer:
//take string and .split('')
//find the #, discard the rest

function removeUrlAnchor(url){
  let urlSplit = url.split('')
  if(urlSplit.includes('#')){
    return urlSplit.slice(0, urlSplit.indexOf('#')).join('')
  }else{
    return urlSplit.join('')
  }
}
