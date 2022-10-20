// 1. 반복문
// 2. 큐
// 3. 방문체크
// 4. 방향
// 5. 객체, 클래스 => 상태값을 체크( 보기 편하게 하기 위해서 )

/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
  let answer=0;
  let n=grid.length;
  let m=grid[0].length;
  let dx=[-1, -1, 0, 1, 1, 1, 0, -1];
  let dy=[0, 1, 1, 1, 0, -1, -1, -1];
  let queue=[];
  for(let i=0; i<n; i++){
      for(let j=0; j<m; j++){
          if(grid[i][j]===1){
              grid[i][j]=0;
              queue.push([i, j]);
              answer++;
              while(queue.length){
                  let x=queue.shift();
                  for(let k=0; k<8; k++){
                      let nx=x[0]+dx[k];
                      let ny=x[1]+dy[k];
                      if(nx>=0 && nx<n && ny>=0 && ny<n && grid[nx][ny]===1){
                          grid[nx][ny]=0;
                          queue.push([nx, ny]);
                      }
                  }
              }
              
          }
      }
  }
  return answer;
};

const grid = [
  [1, 1, 0, 0, 0, 1, 0], 
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0]];

console.log(numIslands(grid))