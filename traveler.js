// gridTraveler is just another story but same fibonacci

const traveler = (m, n, memo={}) => {
    const key = `${m},${n}`; //separate m and n to avoid confusion from (3,45) and (34,5)
    // are the args in the memo?
    if (key in memo) return memo[key];
    if (m == 1 && n == 1) return 1;
    if (m == 0 || n == 0) return 0;
    memo[key] = traveler(m - 1, n, memo) + traveler(m, n -1, memo);
    return memo[key];
};


const test = (m,n) => {
    console.log(traveler(m,n));
}

test(1,1); //1
test(1,0); //0
test(0,1); //0
test(0,0); //0
test(2,3); //3
test(3,3); //6
test(5,5);
test(18,18);

// traveler(a,b) === traveler(b,a)
 
// TIME COMPLEXITY WITHOUT MEMOIZATION
// For recursion and related, number of function calls -> number of nodes
// Height of tree, find the farthest base case
// Height of tree:  n + m
// O (2 ^ (n + m))  exponential

// TIME COMPLEXITY WITH MEMOIZATION
// Number of distinct nodes => m * n
// O ( m * n)


// Space complexity
// For recursive functions will be the height of the tree
// O (n + m)
