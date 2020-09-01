

/* 

def countApplesAndOranges(s, t, a, b, apples, oranges):
    closeapples, closeoranges = 0, 0
    for d in apples:
        if a+d>=s and a+d<=t:
            closeapples+=1
    for d in oranges:
        if b+d<=t and b+d>=s:
            closeoranges+=1
    print(closeapples)
    print(closeoranges)

*/

const countApplesAndOranges = ( s, t, a, b, apples, oranges) => {
    let closeapples = 0, closeoranges = 0;
    
    apples.forEach(d => {
        if ( a + d >= s && a + d <= t) {
            closeapples += 1
        }
    });

    // oranges
    oranges.forEach(d => {
        if ( b + d  <= t && b + d >= s) {
            closeoranges += 1;
        }
    });

    console.log(closeapples, closeoranges)
}