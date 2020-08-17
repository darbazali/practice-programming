const getPermutations = arr => {

    const output = [];
  
    const swapInPlace = (arrToSwap, indexA, indexB) => {
      const temp = arrToSwap[indexA];
      arrToSwap[indexA] = arrToSwap[indexB];
      arrToSwap[indexB] = temp;
    };
  
    const generate = (n, heapArr) => {
      if (n === 1) {
        output.push(heapArr.slice());
        return;
      }
  
      generate(n - 1, heapArr);
  
      for (let i = 0; i < n - 1; i++) {
        if (n % 2 === 0) {
          swapInPlace(heapArr, i, n - 1);
        } else {
          swapInPlace(heapArr, 0, n - 1);
        }
  
        generate(n - 1, heapArr);
      }
    };
  
    generate(arr.length, arr.slice());
  
    return output;
  };


const permAlone = str => {

    
    const arr = str.split('');
    const perms = getPermutations(arr)
    let count = 0;

    for ( let perm of perms ) {
        let hasRepeats = false;
        for (let i = 0; i < perms.length - 1; i++) {
            if ( perm[i] === perm[i+1]) {
                hasRepeats = true;
                break;
            }
        }
        if ( !hasRepeats ) {
            count++;
        }
    }

    return count
}

console.clear();
console.log(permAlone('aab')) // should return 2
console.log(permAlone('aaa')) // should return 0
console.log(permAlone('a')) // should return 1
console.log(permAlone('aabb')) // should return 8
console.log(permAlone('abcdefa')) // should return 3600
