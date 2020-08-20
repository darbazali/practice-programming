console.clear();


const miniMaxSum = arr => {

    /* 
        Helper functions
        sum: reutrns one single value from suming an array
        removeItem: removes an elment from array based on a given index
    */
    const sum = arr => arr.reduce((prev, curr) => prev + curr);
    const removeItem = (arr, index) => arr.splice(arr.indexOf(index), 1);

    // find min, max values of the source array
    let minVal = Math.min(...arr);
    let maxVal = Math.max(...arr);

    // create new array for 2 cases
    const minArr = [...arr]
    const maxArr = [...arr]

    removeItem(maxArr, minVal);     // remove min value from maxArr
    removeItem(minArr, maxVal);     // remove max value from minArr

    console.log(sum(minArr), sum(maxArr))
}


const arr = [1, 2, 3, 4, 5];
const arr2 = [1, 3, 5, 7, 9];

miniMaxSum(arr)
miniMaxSum(arr2);
