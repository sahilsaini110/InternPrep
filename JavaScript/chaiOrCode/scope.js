// let a = 10
// const b = 20
// var c = 30
// // {}->scope

// if(true){
//     // this s block scope yha ki vlaues bhar nhi jani chahiye but bhar ki yha aani chahiye
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }

// console.log(a);
// console.log(b);
// console.log(c);


// function one(){
//     const username = "sahil"
//     function two(){
//         const website = "youtube";
//         console.log(username);
//     }
//     // console.log(website);// this is not avilabe here
//     two();
// }
// one();

//*********************************************** */
// function addone(num){
//     return num+1;
// }
// console.log(addone(5));
// const addtwo = function(num){
//     return num+2
// }
// console.log(addtwo(5));

// console.log(addone(5)); // this will work here 
// function addone(num){
//     return num+1;
// }

// console.log(addtwo(5)); // this wont work here 
// const addtwo = function(num){
//     return num+2
// }


//*****************this and arrow function******************** */

// const user ={
//     username: "sahil",
//     price: 999,
//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this)
//     } // this hamre current context ko reffer krta h.
// }
// user.welcomeMessage();
// user.username = "sahil saini"
// user.welcomeMessage();
// console.log(this); // yha p this will give empty but in browser it will refer to window object


// function chai(){
//     let username = "sahil";
//     console.log(this);
// }
// chai();

// const chai = function(){
//     let username = "sahil";
//     console.log(this);
// }

// chai();

// const chai = ()=>{
//     let username = "sahil"
//     console.log(this);
// }
// chai();


//****explicit return ********* */
// const addtwo = (a, b)=>{
//     return a+b;
// }

//*******implicit return*/
// const addtwo = (a, b)=> a+b;

// const addtwo = (a, b)=>(a+b);

// ye sab react m use hota h bhot jyada () isme return likhna jaruri nhi hota.
//objects ko return krne k vo to {inme hi aayega.}



//********Immediately invoked function expression (iife) ***************** */
// we want to execute fun imideatily, kai baar global scope ki vajha se function k vairialbe polute hojate h vo hum nhi Chate.

// (function chai(){
//     //named iife
//     console.log(`db connected`);
// })();// iife k baad semicolon lgana jaruri hota h.
// //global scope k variabke se hone wale pollution ko htane k liye humne iffe ko use kiyaa.
// // () inke lgane s ebhi ek block ban jate h to hum hamare function inke andar daald denge and unpe kaam krenge.


// //how to wriet two iife.
// (function chai(){
//     //named iifi
//     console.log(`db connected`);
// })(); // semicolon is important.
// ((name)=>{
//     console.log(`db connected ${name}`);
// })("sahil");
