/**
 * 1. 지도: grid, map, arr,
 * 2. 지도랑 똑같은 형식의 방문 체크가 필요합니다. visited / 가끔은 다르다. 유연하게 만들어라
 * 3. Queue : array .shift() 마지노선 의심 <미리 만들면안됨, BFS 시작될때 만들어져야 함 (인스턴스 만들어라)>
 * 4. 방향
 */

// new Pos(y,x) :: { y , x }
class Pos {
  constructor(public y: number, public x: number) {}
}

function numIslands(grid: string[][]): number {
  let answer = 0
  const [N, M] = [grid.length, grid[0].length]
  const DIRECTS = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ]

  let visited: boolean[][] = Array.from(Array(N), () => Array(M).fill(false))

  // 스타트와 인접한 "1"을 가진 인덱스에 방문체킹을 해주는 함수입니다.
  // 파라메타로 들어간 start position에서 "1"로 연결된 모든 인덱스에 방문체킹을 해주는 함수.
  const bfs = (start: Pos) => {
    let queue = [start] // 실행할 바구니, (지라)
    visited[start.y][start.x] = true // BFS 방문자 체크는 *필수*

    while (0 < queue.length) {
      const pos = queue.shift()!
      grid[pos.y][pos.x] = 'x'
      // 이해가 안되면 꼭 다시 질문하세요. (제일 중요함)
      // dfs 는 내가 딱 시작 할때 방문체킹을 해줍니다.!
      // bfs 내가 일감을 넣는 순간 방문 체킹을 해줘야합니다. !!!

      for (let [y, x] of DIRECTS) {
        // 다음 행선지
        const ty = y + pos.y
        const tx = x + pos.x

        if (!(0 <= ty && ty < N && 0 <= tx && tx < M)) continue // 범위 체크
        if (visited[ty][tx]) continue // 했던일인지 아닌지

        if (grid[ty][tx] === '1') {
          // 문제에서 낸 조건
          queue.push(new Pos(ty, tx))
          visited[ty][tx] = true // 동기화
        }
      } // for
    } // while
  } // BFS

  // grid 모든 인덱스를 확인하는 코드
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      const val = grid[y][x]

      if (val === '1' && !visited[y][x]) {
        bfs({ y, x })
      }

    } // for M
  } // for N

  console.log(
    grid
  )

  return answer
}







/**
 * 1. BFS 함수 만들기 (params가 시작 위치)
 * 2. 큐 만들기 -> 처음(시작) 위치를 넣어줄 것!  
 * 3. 방문자에 시작위치 꼭 넣어줄 것 (큐에 넣으면, 방문자에도 넣어라)
 * 4. 큐를 반복문으로 돌립니다.
 * 5. 큐 pop의 값을 변수에 담는다.
 * 6. 4방향으로 반복문을 돌린다. :: 다음 행선지 위치를 구한다.
 * 7. 다음 행선지가 범위를 벗어나는지 확인한다. 
 * 8. 다음 행선지가 방문했던 곳인지 확인한다.
 * 9. 다음 행선지가 문제 조건에 맞는지 확인한다. 
 * 10. 큐에 다음 행선지를 넣어준다. 그러면서 다음 행선지의 방문체킹을 한다.
 */