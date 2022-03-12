//return an array that contains the items for the target Sum


const howSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers, memo); // we can reuse the elements
        if (remainderResult !== null) {
            memo[targetSum] = [...remainderResult, num];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
}


console.log(howSum(7, [2,3])); // [3,2,2]
console.log(howSum(7, [5,3,4,7])); // [4,3]
console.log(howSum(7, [2,4]));  // null
console.log(howSum(8, [2,3,5]));  // [2,2,2,2]
console.log(howSum(300, [7,14]));  // []


// m = targetSum
// n = numbers.length (height of the tree)

// brute-force
// time O(m*n^m)
// space O(m)  stack

// memoization
// time complexity 
// number of recursive calls (n*m) + copying the contents of array
// O(n*m*m) or O(n*m^2)

//space
// At least O(m) plus all the space in the memo object m
// O(m^2)

