/* 
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with

places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to

are acceptable.

Example
There are elements, two positive, two negative and one zero. Their ratios are , and

. Results are printed as:

0.400000
0.400000
0.200000

Function Description

Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):

    int arr[n]: an array of integers

Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with

digits after the decimal. The function should not return a value.

Input Format

The first line contains an integer,
, the size of the array.
The second line contains space-separated integers that describe

.

Constraints


Output Format

Print the following
lines, each to

decimals:

    proportion of positive values
    proportion of negative values
    proportion of zeros

Sample Input

6
-4 3 -9 0 4 1         

Sample Output

0.500000
0.333333
0.166667

*/

console.clear();

const plusMinus = arr => {

    // initialize portions
    let plus = 0, minus = 0, zero = 0;
    let len = arr.length;

    // filter the array, assigin each portion to it's corresponding variable
    for (let i = 0; i < len; i++) {
        const item = arr[i];

        if ( item > 0 ) plus += 1   // positive number
        else if ( item < 0 ) minus += 1 // negetive number 
        else zero += 1  // zero
    }

    // print out each portion
    console.log( plus / len)
    console.log( minus / len)
    console.log( zero / len)

}

console.log(plusMinus([1, 1, 0, -1, -1]));
