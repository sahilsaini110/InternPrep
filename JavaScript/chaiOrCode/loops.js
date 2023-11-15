// for
// for(let i =0; i<5; i++){
//     if(i == 1){
//         break;
//     }
//     // console.log("hi");
// }

// keywords -> break and continue

// while and do while loop

//***********************Higher order array loops*********************

const arr = [1,2,3,4,56,5];
const greeting = "Hello Sahil"
// ****************for of loop**************** */
// for (const num of arr) {
//     console.log(num);
// }

// for (const greet of greeting) {
//     console.log(greet);
// }


//********************for in loop*********************/
// for (const key in arr) {
//     console.log(key);
// }// for of loop se keys aajati h but of loop se puri values and yha arrya ki l=keys 0 se start hoti h


//*******************for each loop*********************
arr.forEach((item)=>{
    console.log(item);    
});

arr.forEach((item, index, arr)=>{
    console.log(item, index, arr);    
});

//objects are not iterables.

//Maps -> values unique hoti h and jis order m dali h ussi order m rhti h

// const map = new Map();
// map.set('In', "india");
// map.set('usa', "united states");
// map.set('fr',"france");

// for (const [key, value] of map) {
//     console.log(key, "->" , value);
// }

// for (const key in map) {
//     console.log(key);
// }
// map is also not iterable like this.

//loop on objects
// const obj = {
//     js: "javascript",
//     cpp: "cpp",
//     rb: "ruby",
//     py: "pyhton"
// }

// for (const key in obj) {
//     console.log(key, "->", obj[key]);
// }