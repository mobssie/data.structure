
function sum(startNumber, n){
    console.log(startNumber);
    if(startNumber === n) return console.log('끝');
    startNumber++;
    return sum(startNumber, n);
}

console.log(sum(1, 100));