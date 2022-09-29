let 방문자 = [];

function DFS(p, target, pos, cnt) {
  // 백틱
  if(!(0 <= pos && pos <= target)) return;

  // // 메모리 제이션
  // if(방문자[pos]) return;
  // 방문자[pos] = cnt;
  
  if(target === pos) {
    return cnt;
  }
  
  return DFS(p, target, pos+p, cnt + 1) || DFS(p, target, pos-1, cnt + 1)
}



function logic (p, target) {
  let cnt = 0;
  cnt = DFS(p, target, 0, 0)
  return cnt;
}

const P = 5
const target = 11
console.log(
  '### :: ', logic(P, target)
)
