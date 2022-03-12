let arr =  [
    {
        first: "test",
        last: "test9",
        score: 55
    },
    {
        first: "test1",
        last: "test8",
        score: 35
    },
    {
        first: "test2",
        last: "test7",
        score: 95
    },
    {
        first: "test3",
        last: "test6",
        score: 75
    },
    {
        first: "test4",
        last: "test5",
        score: 85
    },
];

function descendingScore(a, b) {
    if (a.score < b.score) return 1;
    if (a.score > b.score) return -1;
    return 0;
}

arr.sort(descendingScore);
// console.log(arr);

//ascending Order
arr.sort(function (a, b) {
    //if b should come before a return a number larger than zero

    if (a.score < b.score) return -1; 
    if (a.score > b.score) return 1;
    return 0; //equal
})
// console.log(arr);

arr.sort(function (a,b) {
    return a.score - b.score; //ascending  
});
console.log(arr);

arr.sort((a,b) => {
    return b.score - a.score; //descending
});
console.log(arr);

arr.sort((a,b) => a.score - b.score);
console.log(arr);