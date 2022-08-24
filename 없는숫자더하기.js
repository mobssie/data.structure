// 프로그래머스 : 없는 숫자 더하기
function solution(numbers) {
  var answer = 0;
  for(var i = 1; i < 10; i++){
      if(!numbers.includes(i)) answer += i
  }
  return answer;
}