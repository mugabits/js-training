function productOfDynamicArrays(arr) {
    let before = 1;
    const products = [];

    // befores -> [1,1,2,6]
    for (let i=0; i < arr.length; i++) {
        products[i] = before;
        before *= arr[i];
    }

    let after = 1;
    for (let k=arr.length -1; k > -1; k--) {
        products[k] = after * products[k];
        after *= arr[k];
    }

    return products;
}


function productOfDynamicArraysGreedy(arr) {
    let before = 1;
    const beforeProduct = [];


    // befores -> [1,1,2,6]
    for (let i=0; i < arr.length; i++) {
        beforeProduct[i] = before;
        before *= arr[i];
    }
    // console.log(`before: ${JSON.stringify(beforeProduct)}`)

    let after = 1;
    const afterProduct = [];

    // afters -> [24, 12, 4, 1]
    for (let j= arr.length - 1; j > -1; j--) {
        afterProduct[j] = after;
        after *= arr[j];
    }
    // console.log(`after: ${JSON.stringify(afterProduct)}`);

    const products =[];
    for (let k=0; k < arr.length; k++) {
        products[k] = beforeProduct[k] * afterProduct[k];
    }
    return products;
}


//two loops O(2n)
//nested loops O(n^2)


console.log(productOfDynamicArrays([1,2,3,4])) // [24,12,8,6]
console.log(productOfDynamicArrays([5,8,7,10])) // [560,350,400,280]
console.log(productOfDynamicArrays([0,1,2,4])) // [8,0,0,0]