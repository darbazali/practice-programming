/* 
    One of the simplest and most used data collection is array
    In JavaScript, we can put inside an array all kinds of data types
    Data could be Numbers, String, Boolean, Undefined, null, Object, even functions.

*/

const simpleArray = [
    'one', 
    'two', 
    3, 
    true, 
    false, 
    undefined, 
    null, 
    {name: "name"}
]

/* 
    Array can hold evey anothre array inside id, and called multi-dimentional array
*/

const multiD = [
    [1, 2, 3],
    [4, 5, 6],
    ['7', '8', '9'],
    [true, false],
    undefined
]

for ( let i in multiD ) {
    console.log(multiD[i]);
}