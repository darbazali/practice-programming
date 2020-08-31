

const gradingStudents = grades => {
    
    return grades.map( grade => {
        if (grade < 38 ) grade = grade;
        else if ( grade > 38 && grade < 40 ) grade = 40
        // else if ( grade > 40 && grade)
    })

}

const arr = [73, 67, 38, 33];
console.log(gradingStudents(arr));  // should return 75 67 40 33