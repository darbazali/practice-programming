

const countApplesAndOranges = ( s, t, a, b, apples, oranges) => {
    let closeApples = 0, closeOranges = 0;
    
    apples.forEach(d => {
        if ( a + d >= s && a + d <= t) {
            closeApples += 1
        }
    });

    // oranges
    oranges.forEach(d => {
        if ( b + d  <= t && b + d >= s) {
            closeOranges += 1;
        }
    });

    console.log(closeApples)
    console.log(closeOranges);
}