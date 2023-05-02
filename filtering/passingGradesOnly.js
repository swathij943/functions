const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

//--Using the anonymous function
// const passingGrades = grades.filter(function(num) {
//   return num >= 70; 
// });

//--Using the arrow function
const passingGrades = grades.filter(grade => grade >= 70);

console.log("Passing grades", passingGrades);