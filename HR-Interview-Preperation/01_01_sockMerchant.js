/* 
John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are
socks with colors . There is one pair of color and one of color . There are three odd socks left, one of each color. The number of pairs is

.

Function Description

Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):

    n: the number of socks in the pile
    ar: the colors of each sock

Input Format

The first line contains an integer
, the number of socks represented in .
The second line contains space-separated integers describing the colors

of the socks in the pile.


Output Format

Return the total number of matching pairs of socks that John can sell.

Sample Input

9
10 20 20 10 10 30 50 10 20

Sample Output

3

*/

// clear console before running the program
console.clear();


const sockMerchant = (arr) => {

    // create an object to hold socks
    let socks = {};
    let count = 0;  // end result

    // group socks by color
    /* 
        this loop makes an object lik this:
        socks = {
            "10": 4,
            "20": 3,
            "30" 1,
            "50" 1
        }
    */
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        
        if ( socks[item]) {
            socks[item] ++
        }

        else {
            socks[item] = 1
        }
    }

    // look for pairs
    for (let key in socks) {
        let item = socks[key]
        // if the color is only has one pair, ignore it
		if ( item > 1 ) {
            // if the color was even number, then divide the number by 2 and add to count
			if ( item % 2 == 0 ) {
                count += item / 2
                
            // if number was odd, then devide by 2 and subtract the remaining wich is 0.5, then add to count
			} else {
				count += (item / 2 ) - 0.5
			}
		}
	}


    return count;
}


// method 2
const sockMerchant2 = (arr) => {

    // socks holder
    let socks = {}
    let pairs = 0; // color pairs

    for ( let item of arr ) {
        socks[item] = socks[item] + 1 || 1;
        if ( socks[item] % 2 == 0 ) pairs += 1;
    }
    
    return pairs;

}

const arr = [10, 20 ,20, 10, 10, 30, 50, 10, 20];

console.log(sockMerchant(arr));
console.log(sockMerchant2(arr));

