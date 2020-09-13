'use strict'

console.clear();

const url = 'https://jsonplaceholder.typicode.com/todos/1';
const getUsers = async () => await fetch(url).then(res => res.json());

// getUsers()
//     .then(data => console.log(data))
//     .catch( err => console.log(err))


const calculateData = async (x, y) => {
    return await x + y
}

calculateData(10, 10)
    .then( res => console.log(res) )