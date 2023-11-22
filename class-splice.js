let num = [0, 1, 2, 3, 4, 5, 6];

console.log("Before any modification:", num);

//splice(start, delete_count, element1,..., elementN)

// Removing one element at index 2 and the numbers 7, 8, 9
let deletedElements = num.splice(2, 1, 7, 8, 9);
//deletedElements will be an array containing the elements removed from the array 'num'

//Printing the resultant array 'num'
console.log("After removing elements:", num);

//Printing the array of deleted elements
console.log(deletedElements);
