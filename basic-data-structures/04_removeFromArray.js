/* 
    Removing items from array
    pop(): takes no argument, removes the last item of array
    shift(): takes no argument, removes the first item of array
*/


const arr = ['a', 'b', 'c', 'd'];
console.log(arr);   //  [ 'a', 'b', 'c', 'd' ]

// remove first item
arr.shift()
console.log(arr);   // [ 'b', 'c', 'd' ] => removed 'a'

// remvoe the last item
arr.pop()
console.log(arr);   // [ 'b', 'c' ] => remvoed 'd'

const popShift = arr => {
    const poped = arr.pop();
    const shifted = arr.shift();
    return [shifted, poped];
}


console.log(popShift(['Challenge', 'is', 'not', 'complete']))
