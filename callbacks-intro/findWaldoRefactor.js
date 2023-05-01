
// Exercise 2 - Array forEach
// A very common implementation of callback functions is with forEach which uses callbacks to allow us to easily iterate through the elements of an array.

// Read about iterating through elements of an array using JavaScript's Array.prototype.forEach() method.

// Instruction
// Refactor the function findWaldo to use the forEach() method instead of a for loop.

const findWaldo = function(names, found) {
 names.forEach(function(name, index) {
    if (name === "Waldo") {
      found(index);   // execute callback with index as argument
    }
  });
}

const actionWhenFound = function(index) {
  console.log("Found Waldo at index", index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);