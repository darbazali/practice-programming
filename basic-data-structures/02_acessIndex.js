/* 
    The adventage of storing data in any type of data structure, is to retrive the data when we need it.
    In javascript, arrays are zero-based indexed, it means the first element in the array is at zero position/index

    we can acess an index by bracket notation
    let firstElem = arr[0]
*/


let arr = ['a', 'b', 'c', 'd'];

let a = arr[0] // a = 0
console.log(arr[1]); // b


/* 
    after we have access to the index, we can do what ever we want with this element
*/

arr[3] = 'Nod d anymore';
console.log(arr);   // [ 'a', 'b', 'c', 'Nod d anymore' ]