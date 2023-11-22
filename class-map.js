const arr = [12, 33, 17, 16, 15, 18];

let newArr = arr.map(item => item = item*2);

console.log(newArr);

let myArr = [
    {
        studentName: "jack",
        studentClass: 6,
        studentSection: "a"
    },
    {
        studentName: "tom",
        studentClass: 6,
        studentSection: "a"
    }
];

myArr.map((value) => {
    for(let property in value) {
        console.log(`${property}: ${value[property]}`);
    }
});
