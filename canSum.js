// Needs to return a boolean that shows whether or not a targetSum can be generated using numbers from array
// canSum(7, [5,3,4,7])
// 5 + 3 = 8 *
// 5 + 4 = 9 **
// 5 + 7 = 12 ***
// 3 + 5 = 8 *
// 3 + 4 = 7  TRUE
// 3 + 7 = 10 >>>
// 4 + 5 = 9 **
// 4 + 3 = 7 TRUE
// 4 + 7 = 11 <<<
// 7 + 5 = 12 ***
// 7 + 3 = 10 >>>
// 7 + 4 = 11 <<<

// a + b = b + a

const canSum = (target, numbers, memo= {}) => {
    if (target in memo) return memo[target];
    if (target === 0) return true;
    if (target < 0) return false;

    for (let num of numbers) {
        const remainder = target - num;
        if (canSum(remainder, numbers, memo) === true) { 
            memo[target] = true;
            return true;
        }
    }
    memo[target] = false;
    return false; //after trying all possibilities
}

console.log(canSum(7,[2,3]));
console.log(canSum(7, [5,3,4]))
console.log(canSum(7, [2,4]))
console.log(canSum(7, [2,3,5]))
console.log(canSum(7, [7,14]))
console.log(canSum(8, [2,3,5]))
console.log(canSum(300, [7,14]))