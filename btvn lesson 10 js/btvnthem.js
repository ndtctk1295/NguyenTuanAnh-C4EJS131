// // Ex1: Use for ...in loop and recursive to get all the keys of object:
// var user = {
//     name : 'Hieu',
//     age: 18,
//     appearance: {
//         hairColor: 'black',
//         skinColor: 'yellow',
//         height: 1700,
//         weight: 68, 
//     }
// }
// // cách 1:
// for ( let key in user){
//     console.log(`${key}: ${user[key]}`);
// }
// // cách 2:
// let keyList = Object.keys(user);
// console.log(keyList);
// Ex2: output[21, 4 , 5, 99, -1]
let arr = [[21, 4 , 5, -1], 3, 99];
let arr1 = arr[0];
let arr2 = arr[1];
let arr3 = arr[2];
let finalArr = arr1.concat(arr2, arr3);
    finalArr.splice(3,2);
    finalArr.push(-1);
console.log(finalArr);

