

// given a number, the func should return next multiple of 5 of this number
const nextMultipleOfFive = number => {
    for ( let i = number; i <= 100, i++;) {
        if ( i % 5 == 0 || i % 1 == 1) {
            return i;
        }
    }
}


const gradingStudents = grades => {
    
//     let result = [];

//     grades.forEach(item => {
//         // if item < 38, return item
//         if ( item < 38 ) {
//             result.push(item);
//         }
//     });

//     return result;

    return grades.map( item => {
        if ( item >= 38 && (nextMultipleOfFive(item) - item < 3)) {
            return item = nextMultipleOfFive(item)
        }

        if ( item >= 38 && ( nextMultipleOfFive(item) - item >= 3 )) {
            return item = item;
        }
        else {
            return item
        }
    })
}

const arr = [73, 67, 38, 33];
console.clear();
console.log(gradingStudents(arr));  // should return 75 67 40 33

// console.log(nextMultipleOfFive(73))
// console.log(nextMultipleOfFive(67))
// console.log(nextMultipleOfFive(38))