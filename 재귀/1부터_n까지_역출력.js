function 역순재귀(n){
  if(n < 1) return;
  console.log(n)
  n--
  return 역순재귀(n)
}

역순재귀(10)