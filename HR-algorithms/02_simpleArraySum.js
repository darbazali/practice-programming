/* 
SIMPLE ARRAY SUM

Given an array of integers, find the sum of its elements.

For example, if the array
, , so return

.

Function Description

Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

simpleArraySum has the following parameter(s):

    ar: an array of integers

Input Format

The first line contains an integer,
, denoting the size of the array.
The second line contains

space-separated integers representing the array's elements.

Constraints

Output Format

Print the sum of the array's elements as a single integer.

Sample Input

6
1 2 3 4 10 11

Sample Output

31

Explanation

We print the sum of the array's elements: 1 + 2 + 3 + 4 + 5 = 15;
.
*/

const simpleArraySum = arr => {

    // method 1 - using conventional iteration loop;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        sum += item;
    }

    // return sum;

    // mehtod 2 - using forEeach function
    let sum2 = 0;
    arr.forEach(item => {
        sum2 += item;
    });

    // method 3 - using functional programing paradim
    return arr.reduce((item, index) => item + index);

}

const sum = simpleArraySum([1, 2, 3, 4, 10, 11])
console.log(sum); // should return 31