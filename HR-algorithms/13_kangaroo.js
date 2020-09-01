

console.clear();


const kangaroo = (x1, v1, x2, v2) => {

    // if ( (x1 > x2 && v1 && v2) || ( x2 > x1 && v2 > v1) ) return 'NO'

    let result = 'NO';

    for (let i = 0; i < 10000 && result == 'NO'; i++) {
        if (x1 + v1 * i == x2 + v2 * i) {
            result = 'YES';
        }
    }

    return result;
}

console.log(kangaroo(0, 2, 5, 3))
console.log(kangaroo(0, 3, 4, 2))
console.log(kangaroo(4523, 8092, 9419, 8076))   // should YES
