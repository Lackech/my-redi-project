let numbersArr =[1,2,3,4,5]
let lettersArr =['a','b','c','d','e']

let combinedArrays = lettersArr.slice()
combinedArrays.splice(3, 0, ...numbersArr)

console.log(combinedArrays)
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// console.log(combinedArrays.indexOf('a'))
//
// console.log(combinedArrays.indexOf(100))
//
// combinedArrays.push('a')
//
// console.log(combinedArrays)
//
// console.log(combinedArrays.indexOf('a',1))
//
// //
// //
// console.log(combinedArrays.includes('a'))
//
// console.log(combinedArrays.includes(1))
//
// console.log(combinedArrays.includes('1'))
// //
// //
console.log(combinedArrays.reverse())

// let numbers = [0,1,2,3,4,5]
//
// let newNumbers1 = numbers.map(function (num) {
//     return num + 1
// })
//
// console.log(newNumbers1)
//
// let newNumbers2 = numbers.map((num) => {
//     return num + 1
// })
//
// console.log(newNumbers2)
//
// function myFunction (num) {
//     return num + 1
// }
//
// let newNumbers3 = numbers.map(myFunction)
//
// console.log(newNumbers3)
//
// let stringVar = "word"
//
// let numberVar = 2
//
// console.log(typeof numberVar == "string")



function problem(x) {
    if (typeof x == "string") {
        return "string"
    } else if(typeof x == "number") {
        return "number"
    }
}

let something = combinedArrays.map(problem)

console.log(something)












combinedArrays.push(true)
combinedArrays.push('a')


const student1 = {
    name: "Ale",
    age: 26
}

const student2 = {
    name: "Adam",
    age: 25
}
const student3 = {
    name: "Henrik",
    age: 30
}

let classroom = [student1, student2, student3]



let sortedArray = classroom.sort()

console.log(sortedArray)





