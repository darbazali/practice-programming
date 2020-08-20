console.clear();


const miniMaxSum = arr => {

    // find min, max from srouce array
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    // create new array for 2 cases
    const minArr = [...arr]
    const maxArr = [...arr]

    // remove min value from maxArr
    const removeMin = maxArr.splice(arr.indexOf(min), 1);
    // remove max value from minArr
    const removeMax = minArr.splice(arr.indexOf(max), 1);

    // sum minArr
   const mini = minArr.reduce((prev, curr) => prev + curr)
   // sum maxArr
   const maxi = maxArr.reduce((prev, curr) => prev + curr)

    console.log(mini, maxi)
}


const arr = [1, 2, 3, 4, 5];
const arr2 = [1, 3, 5, 7, 9];

miniMaxSum(arr)
miniMaxSum(arr2);
