// 두 수 사이에 홀수 출력

function 홀수재귀(num){
  let idx = 0;
  answer = num[idx];
  idx++;
  if(idx > 1) return console.log('없음');
  else if(idx % 2 !== 0) return;
  console.log('홀수', num[idx])
};

let num = [10, 4]
홀수재귀(num)