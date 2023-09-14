function hasTargetSum(array, target) {
  let sum = 0;
  for (i in array) {
    for (j in array) {
      sum = sum + array[i] + array[j];
    }
  }
  if (sum === target) {
    return true;
  }
  else {
    return false;
  }
}

function hasTargetSum(array, target) {
 let sum = 0;
 let index = 0;
 while (sum !== target) {
  for (let i = 1; i < array.length; i++) {
    if (sum = sum + array[index] + array[i];
  }
 }
}

function hasTargetSum(array, target) {
  let sum = 0;
  let index = 0;
  if (sum !== target) {
    for (let i = 1; i < array.length; i++) {

    }
  }

  }

function hasTargetSum(array, target) {
  let index = 0;
  for (let i = 1; i < array.length) {
    if (array[index] + array[i] !=== target) {
      i++;
    }
    if (array[index + i] + array[i])
  }
}


/*
  Write the Big O time complexity of your function here
*/

/*
  Add your pseudocode here
  initialize a for loop, that runs through each item in the array
  initialize a second for loop, that runs through each item in the array
  while loop that keeps running until the numbers add up
  if statement the sum equals the target
  return true, else return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
