// Exercise 1 - Callback Arguments
// Did you know that we can pass results via callback functions?

// Instruction
// Modify the callback function in the previous example so that it accepts a single argument index and logs it. The problem should therefore output something like "Found Waldo at index 2!".

// Copy the waldo searching code above into the JS file
// Run it via terminal to make sure that it is working as expected
// Modify the actionWhenFound function to let it receive and use the index
// Modify the findWaldo function so that it passes the index array to the callback


const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found();   // execute callback with index as argument
    }
  }
}

const actionWhenFound = function(index) {
  console.log("Found Waldo at index", index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);