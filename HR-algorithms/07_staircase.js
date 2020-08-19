console.clear()


const staircase = n => {

    // create a loop n times, start with 1
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n - i) + "#".repeat(i));
    }
}

staircase(5)