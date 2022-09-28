/**
 * @return {Array} [2,3,4, ... 99, 100]
 */
function getNums () {
    return Array.from({length: 99},((_, i)=> i+2))
}

/**
 * @param nums {Array} [2,3,4, ... 99, 100]
 */
function getPrimeNumbers (nums) {
    let answer = [];
    let dec =[2, 3, 5];
    answer = nums.filter(item=> item % 2 !== 0)
      .filter(item=> item % 3 !== 0)
      .filter(item=> item % 5 !== 0)
    return [...dec, ...answer]
}

console.log(
    getPrimeNumbers(
        getNums()
    ),
    // [2,3,5,7,11,13, ... 97]
)
