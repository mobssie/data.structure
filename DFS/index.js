// 재귀 (recursive)
// 1. 나오는 조건
// 2. 자기자신을 호출

/**
 * Number[] horses
 * Number target
 * return { hours: number, v: 도착했을때 몇번만에 갔는지 || 못했으면 -1 }[]
 */

function DFS(horse, target, pos, cnt){
  // 종료
  if(target === pos){
    console.log(horse + '말 도착 :: ' + cnt);
    return 
  } else if(target < pos) {
    console.log(horse + '말 못 도착');
    return
  } else {
    DFS(horse, target, pos+horse, cnt+1);
  }
}
function logic (horses, target) {
  console.log('target', target)
  for(let i = 0; i <= horses.length-1; i++) DFS(horses[i], target, 0, 0)
}
logic([2,3,4,5,8], 100)