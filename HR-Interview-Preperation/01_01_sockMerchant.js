/* 
John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.


Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):

    n: the number of socks in the pile
    ar: the colors of each sock

Input Format

The first line contains an integer
, the number of socks represented in .
The second line contains space-separated integers describing the colors

of the socks in the pile.



Sample Input

9
10 20 20 10 10 30 50 10 20

Sample Output
3

*/

// clear console before running the program
console.clear();

const sockMerchant = (n, arr) => {
    const socks = {};
    let pairs = 0;

    for ( let item of arr ) {
        socks[item] = socks[item] + 1 || 1; // create a key of current item or add one to it if exist
        socks[item] % 2 == 0 ? pairs += 1: null; // if item is even, add one to pairs
    }

    return pairs;
}


const arr = [10, 20 ,20, 10, 10, 30, 50, 10, 20];
console.log(sockMerchant(null, arr));


