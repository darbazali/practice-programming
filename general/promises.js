console.clear();

const addNum = () => {
  return new Promise((resolve, reject) => {
    let num = 1 + 1;
    if (num == 2) {
      resolve(num);
    } else {
      reject("An error ocurred!");
    }
  });
};

addNum()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

const makeServerRequest = new Promise((resolve, reject) => {
  let serverResponse = false;
  if (serverResponse) {
    // promise fullfiled
    resolve("We got the data");
  } else {
    // promise breaked
    reject("Data not recived!");
  }
});


makeServerRequest
    .then( result => console.log(result))
    .catch( err => console.log(err))


