// Javascript Execution Context 

// *******js run your program in two phase*********
//  1->Phase1                     2->Phase2 
//  Memory creation phase         Execution phase

let val1 = 10;
let val2 = 5;
function addnum(num1, num2){
    let total = num1+num2;
    return total;
}
let res1 = addnum(val1, val2);
let res2 = addnum(10,2);

// **********how this code execute************
// step 1 -> global execution
// sabse phle aapke pass ata h global execution koi bhi code ho kitna
// bhi bda ho vo global execution se run hota h and isko sabse phle allocate kiya jata h this k andar

// step 2 -> Memory phase
// saare varibles ko ikatha kiya jata h bass rakha jata h apne pass m. and inke andar rakha jata h undefined ko.

// val1 -> undefined
// val2 -> undefined
// addnum -> definition of function
//res1 -> undefined
//res2 -> undefined

//step 3 -> execution phase

// val1 = 10
// val2 = 5
// line 13 p jayenge ko addnum aayega and vo apna ek or execution context bnayega
// abb is naye execution context m banega "new variable enviournment + execution thread"
// abb is context k liye firse dono phase honge
// memory phase
//val1 -> undefined
//val2 -> undefined
//total -> undefined
//execution phase
// num1 = 10
//num2 = 5
//total = 15
// abb ye total global execution m return hojayega
// abb ye new execution context delet hojayega

// abb line 14 p similarly new execution context banega
// jisme fir banega ek new variable enviournment + execution thread
// num1 ->undefined
// num2 ->undefined
// total ->unefined
// execution phase
// num1 = 10
// num1 = 5
// total = 15
// this will return to global execution contect and this execution context deleted.

