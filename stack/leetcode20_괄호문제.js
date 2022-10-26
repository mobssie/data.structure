function isValid(s) {
  let stack = [];
  let obj = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
  }

  for(let i = 0 ; i < s.length; i++){
    if(s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i])
    } else {
      let peek = stack.pop();
      if(s[i] !== obj[peek]){
        return false;
      }
    }
  }
  return !stack.length;
}


let s = "({{{{}}}))"
console.log(isValid(s));