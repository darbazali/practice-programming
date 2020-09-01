

console.clear();


const kangaroo = (x1, v1, x2, v2) => {

    // if ( (x1 > x2 && v1 && v2) || ( x2 > x1 && v2 > v1) ) return 'NO'

    const end = 10000;
    let lx1 = 0
    let lx2 = 0
    let result = 'NO';

    for( let i = x1, j = x2; i <= end, j <= end; i = i + v1 , j = j + v2) {
        lx1 = i;
        lx2 = j;

        if ( lx1 === lx2 ) {
            result = 'YES'
            break;
        }
    }
 
    return result;

}

console.log(kangaroo(0, 2, 5, 3))
console.log(kangaroo(0, 3, 4, 2))
console.log(kangaroo(4523, 8092, 9419, 8076))   // should YES
