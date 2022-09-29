function DFS(horse, target, pos, cnt) {
  if(pos > target) return;
  if(pos === target) return cnt;
  return DFS(horse, target, pos+horse, cnt+1) || DFS(horse, target, pos - 1, cnt+1)
}

function logic(horse, target) {
  let cnt = 0;
  cnt = DFS(horse, target, 0, 0)
  return cnt;
}

const horse = 5;
const target = 11;
console.log(logic(horse, target))