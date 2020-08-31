
const nextMultipleOfFive = number => {
    for ( let i = number; i <= 100, i++;) {
        if ( i % 5 == 0 || i % 1 == 1) {
            return i;
        }
    }
}
const gradingStudents = grades => {
    
    let result = [];

    for ( let item in grades ) {
        let grade = grades[item];

        // if grade - next x5 < 3 => grade - next x5


        if ( grade < 38 ) {
            result.push(grade);
        }
    }
    return result;
}

const arr = [73, 67, 38, 33];
console.log(gradingStudents(arr));  // should return 75 67 40 33

console.log(nextMultipleOfFive(73))
console.log(nextMultipleOfFive(38))