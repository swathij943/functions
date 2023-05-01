//Refactor the code by making the callback anonymous.
const findWaldo = function (names, found) {
  names.forEach(function(name, index) {
    if (names === "Waldo") {
      found(index);
    }
  });
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log("Found Waldo at index", index);
});