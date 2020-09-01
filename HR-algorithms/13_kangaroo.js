


const kangaroo = (x1, v1, x2, v2) => {

    if ( x1 >= x2 && v1 >= v2 ) {
        return 'NO'
    } else if ( x2 >= x1 && v2 >= v1 ) {
        return 'NO'
    } else {
        return 'YES'
    }
}


console.log(kangaroo(0, 2, 5, 3))
console.log(kangaroo(0, 3, 4, 2))