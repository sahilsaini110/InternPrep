// function ka mtlb h ki agar apka code likha hua abb usko ek package m band kr do and uski copies abb har jagha le jaa skte h;
// console.log('s');
// console.log('a');
// console.log('h');
// console.log('i');
// console.log('l');

// now to do above task we can use functions 
// function definition k time jo bhi inputs lete h unhe bolte h function parameters
// function myName(){
//     console.log('s');
//     console.log('a');
//     console.log('h');
//     console.log('i');
//     console.log('l');
// };

// myName(); 
// call krte time jo function m pass krte h unhe bolte h argumnets

// function add(a, b){
//     console.log(a+b);
// }

// // const res = add(2,5);
// // here res will get undefined value

// function add(a, b){
//     return(a+b);
// }

// const res = add(2,5);
// // console.log(res);
// // now res will have value

// function loginUser(username){
//     return `${username} just logged in`
// }

// let log = loginUser("sahil");
// console.log(log);// agr m function m koi argumne thi pass na kru to it will give undefined

// function loginUser(username){
//     if(!username){
//         return "please enter a username"
//     }
//     return `${username} just logged in`
// }

// let log = loginUser();
// console.log(log);


// let set some default values
function loginUser(username = "sam"){
    if(!username){
        return "please enter a username"
    }
    return `${username} just logged in`
}
let log = loginUser();
console.log(log);


//other wasy to pass parameters eg. shopping cart
function calculateCartPrice(val1, val2, ...num1){
    return num1; // rest operator ki madad se abhi ye num1 ek parameters ki array ban gya.

}
console.log(calculateCartPrice(200,300,400,100,600));
// ... is called as spread operator as well as rest operator
//depending its use case, here it is acting as rest operator.

