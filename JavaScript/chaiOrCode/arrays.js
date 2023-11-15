// Arrays
let arr = [1,5,2,4,5, true, "jeel"]

// Arrays Methods
arr.push(5); //insert at end
arr.pop(); // remove from end
arr.unshift(8); // insert at front
arr.shift(); // remove from front
console.log(arr.includes(9)); // return boll if 9 present true else false
console.log(arr.indexOf(9)); // agar present hoga to uska index de dega

const newarr = arr.join() // ye bind to kr dega also ye isse string m bhi convert kr dega
// abhi newarr ka type h string

console.log(arr.slice(1, 3)); // original array m koi chnage nhi hoga
console.log(arr.splice(1, 3)); // ye last ele ko bhi include krta h
// also ye original array m se uss part ko hta deta h.
 
const new_arr = [1,2,3,[4,5,6],7,[8,9,[5,6]],5];

let changearr = new_arr.flat(2);
console.log(changearr);

