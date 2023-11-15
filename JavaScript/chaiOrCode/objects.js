// Objects
// singleton -> koi bhi constructor se aap bnate h to vo singleton hota h wrna uske multiple instances ban jate h.
// *************Constructor method***********
// Object.create

// *************Object literals**************
// const JsUser = {
//     name: "hello", // keys string khud se string consider hojati h
//     age: 23,
//     location: "alwar",
//     "full name": "sahil saini"
// };

// How to access object values
// console.log(JsUser.name);
// console.log(JsUser["full name"]); // cus keys hamesha string consider hoti h

 // how to add symbol in object
//  const mySym = Symbol("key50");

//  const obj = {
//     [mySym]: "hello",
//     age: 23,
//     location: "alwar",
//     "full name": "sahil saini"
//  }

//  agr u want ki koi values ko chnage na kr paye object ki to use freez
// Object.freeze(obj);
// obj.age = 50;
// // console.log(obj);

// obj.greetings = function(){
//     return("hello user")
// }
// obj.greetingstwo = function(){
//     return(`hello user ur age is ${this.age}`); 
//     // ye this will refer to the object only .
// }
// console.log(obj.greetings());
// console.log(obj.greetingstwo());


// ****************singleton ki trha object *********************
// const tinderUser = new Object();

// tinderUser.id = "123abc"
// tinderUser.name = "sammy"
// tinderUser.isLoggedIn = false;
// const regularUser ={
//     email: "sahil@gmail.com",
//     fullName: {
//         first: "sahil",
//         second: "saini"
//     }
// }
// tinderUser.user = regularUser;
// // console.log(regularUser.fullName?.first); 
// // // ye tabhi aage jayega tab user hoga. ?helps in this.
// const obj1 = {1:"a", 2:"b"};
// const obj2 = {3:"a", 4:"b"};
// // const obj3 = {obj1, obj2}; // yha bhi hum spread kr skte h.
// const obj3 = Object.assign({}, obj1, obj2); // isme jo first sab aakhir m usme aaajte h 
// // it is calle dtarget and all other act as source

// // ***************** jab database se values aayegi**********************
// // come as array of objects
// const user = [
//     {
//         id: 1,
//         email: "adsa"
//     },
//     {

//     },
//     {

//     },
//     {

//     },
//     {

//     }
// ]

// // console.log(user[0].email);
// //************* Important thing for projects ********* */

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// // ye keys ki ek array return krta h now we can loop through in that array.
// console.log(tinderUser.hasOwnProperty("user"));


//*************Object de-structure and json apis******************* */
const course = {
    name: "js",
    price: "999",
    courseteacher: "sahil"
}

// alternate syntax for course.name
const {courseteacher: tcher} = course;
console.log(tcher);
// isi k destructuring bolte hai.

// json
// {
//     "name": "sahil",
//     "course": "mera style",
//     "price": "free"
// };

// or we can get the response in the form arry of object
