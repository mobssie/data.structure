function solution(progresses, speeds) {
    let answer = [];
    let arr = [];
    let cnt = 1;
    progresses.map((item, i)=> {
        const day = Math.ceil((100-item)/speeds[i])
        arr.push(day);
    })
    let stack = arr[0];
    for(let j = 1; j < arr.length; j++ ){
        if(stack >= arr[j]){
            cnt += 1;
        } else {
          answer.push(cnt)
          cnt = 1;
          stack = arr[j]
        }
    }
    answer.push(cnt)
    return answer;
}
