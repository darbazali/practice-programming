
console.clear();


const birthdayCakeCandles = arr => {

    // find max number in array
    let max = Math.max(...arr)

    let candles = [];

    // find similars to max number
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (item === max) {
            candles.push(item)
        }
        
    }
    
    return candles.length;
}


console.log(birthdayCakeCandles([4, 4, 1, 3]))
console.log(birthdayCakeCandles([3, 2, 1, 3]))