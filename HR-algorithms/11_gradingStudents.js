

// given a number, the func should return next multiple of 5 of this number



const gradingStudents = grades => {
    
    // helper function
    // given a number, should return a number that is
    // the next muliple of 5
    const nextMultipleOfFive = number => {

        // create a loop between number and 100, <= 0 number <= 100
        for ( let i = number; i <= 100, i++;) {
            // if number is divisible by 5 or one, return this number
            if ( i % 5 == 0 || i % 1 == 1) {
                return i;
            }
        }
    }

    // map throught grades, array
    return grades.map( item => {
        // rules
        // if number >= 38
            // if next X5 - grade < 3, then the grade should be next X5
            // if next X5 - grade >= 3, then return the grade
        // if number < 30, no changes will be occured
        if ( item >= 38 ) {
            if ( nextMultipleOfFive(item) - item < 3) {
                return item = nextMultipleOfFive(item)
            } else {
                return item
            }
        }

        else {
            return item;
        }
    })
}



const arr = [73, 67, 38, 33];
console.log(gradingStudents(arr));  // should return 75 67 40 33
