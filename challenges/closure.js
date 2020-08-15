// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// Answer: The nested function is beign called inside the closure of the myFunction, this is the reason why it can access the variable internal. 

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function sumation (num){
  let count = 0;
  for(let i = 0; i <= 4; i++)
  {
    count = count + i;
  }
  return count;
}
console.log(sumation(4))