const array = [3,4,1,5];

// const array2 = ["asd","asdasd","123123a"];

// const text = "lorem nimadir kas asasd asdas";

// const mergedArray = array.concat(array2)
// console.log(mergedArray)

console.log(array.reduce((a,b) => {
    return a + b
}));
