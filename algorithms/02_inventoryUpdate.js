/* 
    Inventory Update
    Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

*/

const updateInventory = (arr1, arr2) => {

    // iterate throu arr2(new items)
    for (let i = 0; i < arr2.length; i++) {
        const item = arr2[i];
        
        // check if item is exist
        let isItemExist = arr1.every( element => item[1] != element[1])

        // it it's new, add it to the inventory
        if ( isItemExist /* == false */) {
            arr1.push(item);
        } else {
            // find the index
            let index = arr1.findIndex( element => element[1] === item[1])
            arr1[index][0] += item[0]
        }
    }
    
    // return and sort
    return arr1.sort( (a, b) => a[1] < b[1] ? -1 : 1)
}


/* 
    updateInventory
        [
            [21, "Bowling Ball"], 
            [2, "Dirty Sock"], 
            [1, "Hair Pin"], 
            [5, "Microphone"]
        ], 
        
        [
            [2, "Hair Pin"], 
            [3, "Half-Eaten Apple"], 
            [67, "Bowling Ball"], 
            [7, "Toothpaste"]
        ] 
        
        should return 
        [
            [88, "Bowling Ball"], 
            [2, "Dirty Sock"], 
            [3, "Hair Pin"], 
            [3, "Half-Eaten Apple"], 
            [5, "Microphone"], 
            [7, "Toothpaste"]
        ]
*/