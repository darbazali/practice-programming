'use strict';

console.clear();

const arr = [3, 4, 7, 9, 0, 10, 33, 1, 15, 44, 50];

// for i from 0 to n -1
//  if i = number
//      return i
//  else return not found


const linearSearch = (arr, key) => {

    for ( let i in arr ) {
        let item = arr[i];
        if ( key === item ) {
            return item;
        }
    }

    return 'Not found!'
}


console.log(linearSearch(arr, 10));     // returns 10
console.log(linearSearch(arr, -10));    // returns Not found!
