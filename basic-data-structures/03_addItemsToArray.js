/* 
    ## Add Items to an Array with push() and unshift()

    Javascript has 2 methodes to add items to an aray
    push(): takes 1 or more arguments, adds them to the end of array

    unshift(): takes 1 or more arguments,adds them to the beginning of the array
*/

const arr = ['A', 'B', 'C'];
// Add three items to the end
arr.push('D', 'E', 'F')

// Add three items to beginning
arr.unshift('G', 'H', 'I');
// console.log(arr);

const mixedNumbers = arr => {

    arr.unshift('I', 2, 'three')
    arr.push(7, 'VIII', 9)
    return arr;
}

// console.log(mixedNumbers(['IV', 5, 'six']))


const addToArray = (arr, ...items) => {
    items.forEach( item => {
        arr.push(item);
    });
    return arr;
}


console.log(addToArray([1, 2, 3], 4, 5, 6));
