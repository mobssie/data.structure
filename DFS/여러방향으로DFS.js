// DFS 4방향으로 움직이면서 타켓을 찾기

/*
* 1. 맵을 만들줄알아야한다.
* - 2차원 배열
* - 2차원 배열의 값에 공간에 값을 채워넣어야한다.
* (갈 수 있는 공간, 갈 수 없는 공간, 출발지점, 도착지점)
* 2. DFS(재귀)
* - 탈출 조건을 만듬.
* - 반복하여 호출하는 코드를 작성.
* > 한방향으로 움직이던걸 (4방향으로 움직이는 코드를 작성.)
*/

// 문제, : N개의 0, 1로 이루어진 배열이 주어진다.
// (0, 0)에서 DFS를 이용하여 (N-1, N-1)로 도착할 수 있으면 1리턴,
// 아닐땐 0리턴

const DIRECTIONS = {
  y: [1, 0, -1, 0],
  x: [0, 1, 0, -1]
}
function solution(N, maps) {
  let answer = 0;
  function DFS(pos, answerRef, target) {
    if(answerRef) return;
    if(pos.y === target.y && pos.x === target.y) {
      answerRef = true;
      return;
    }
  }
  return answer;
}

const input = {
  N: 5,
  maps: [
    [0, 1, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0]
  ]
}

console.log(solution(input.N, input.maps))