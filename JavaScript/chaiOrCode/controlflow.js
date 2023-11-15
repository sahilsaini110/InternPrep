// if 
// let flag = true;

// if(flag){
//     console.log("its true");
//     flag= false;
// }



// const a = 1;
// switch(a){
//     case 1:
//         console.log(5);
//         break;
//     case 2:
//         console.log(51);
//         break;
//     case 3:
//         console.log(512);
//         break;
//     case 4:
//         console.log(521);
//         break;
//     default:
//         console.log("last");
//         break;
// }


// **********************truthy and falsy values*******************

// falsy values
// false
// 0
// -0
// BigInt -> 0n
// ""
// null
// undefined
// NaN

//truthy values
// "0"
// "false"
// " "
//[]
//{}
// function(){}

// false == 0 ->true
// false =='' ->true
// 0 =='' ->true


//****Nullish Coalescing Operator (??): null undefined********************* */

let val1;
val1 = 5??10;
// console.log(val1) -> 5
val1 = null??10
// console.log(val1) -> 10
val1 = undefined??10
// console.log(val1) -> 10
val1 = undefined??10??20??30??null
// console.log(val1) -> 10