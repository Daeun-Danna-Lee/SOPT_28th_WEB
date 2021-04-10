/* Array */
const arr1 = [1, 2, 3];
const arr2 = new Array(4, 5, 6);

arr1.push(4, 5);
arr1.pop();
arr1.shift();
console.log(arr1); // [2, 3, 4]

const arr3 = arr1.concat(arr2);
const arr6 = arr2.concat(arr1);
console.log(arr3.length); // 6

const arr4 = ["be", "sopt", "web", "part"];
console.log(arr4[2]); // web
arr4.sort(); // be, part, sopt, web

const arr5 = arr4.map(item => item + '!');
console.log(arr5);