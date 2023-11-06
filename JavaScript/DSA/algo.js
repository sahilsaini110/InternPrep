/* fibonacci */

/* let n = 6;
let a = [0,1];
let i = 1;
n--;
n--;
const solve = (n)=>{
  while(n--){
    let f = a[i];
    let s = a[i-1];
    i++;
    a = [...a,(s+f)];
  };
};
console.log(solve(n)); */


/* factorial */

/* let n = 6;
const solve = (n)=>{
  if(n <3 ){
    return n;
  }
  return n*solve(n-1);
}
console.log(solve(n)); */


/* prime number */

// let n = 13;
// let a =[];
// a[1]=0;
// a[0]=0;
// for(let i =2; i<n+1; i++){
// 	a = [...a, 1];
// }
// for(let i =2; i<n+1; i++){
// 	if(a[i]==1){
//         for(let j = 2*i; j<n+1; j+=i){
//             a[j]=0;
//         }
//     }
// }
// console.log(a[n]);


// **************************linear search
// **************************binary search
// **************************recursive binary search
// let a = [2,3,4,6,7,9,25,26,35,45,46,52,59]
// let n = 49
// let flag = -1;
// let l = 0;
// let h = a.length - 1;
// while(l<=h){
//   let mid = Math.floor((l+h)/2);
//   if(a[mid]===n){
//     console.log(mid);
//     break;
//   }else if(a[mid]<n){
//     l = mid+1;
//   }else  if(a[mid]>n){
//     h = mid-1;
//   }
// }
// console.log(-1);


// const solve = (l,h,n)=>{
//   if(l>h){
//     return -1;
//   }
//   let mid = Math.floor((l+h)/2);
//   if(a[mid] === n){
//     return mid;
//   }else if(a[mid]<n){
//     return solve(mid+1,h,n)
//   }else{
//     return solve(l, mid-1,n);
//   }
// }

// console.log(solve(0,a.length-1,n));


// ******************************** sorting algo
// bubble sort
// insertion sort
// quick sort
// merge sort


// const bubble=()=>{
//   for(let i=0; i<a.length; i++){
//     for(let j=i+1; j<a.length; j++){
//       if(a[i]<a[j]){
//         continue;
//       }else{
//         let k = a[i];
//         a[i] = a[j];
//         a[j] = k;
//       }
//     }
//   }
// }


// const insertion=()=>{
//   for(let i=1; i<a.length; i++){
//     let temp = a[i];
//     for(let j=i-1; j>=0; j--){
//       if(a[j]>temp){
//         a[j+1] = a[j];
//         a[j]=temp;
//       }else{
//         a[j+1] = temp;
//         break;
//       }
//     }
//   }
// }


  // first find pivot element
  //traverse and put small ele to left of pivot and larger to right of it
  // repeat it for smaller arrays until len is 1;
//   function quick(a) {
//     if (a.length < 2) {
//       return a;
//     }
  
//     let pivot = a[a.length - 1];
//     let lt = [];
//     let rt = [];
//     for (let i = 0; i < a.length - 1; i++) { // Change the loop condition to avoid including the pivot
//       if (a[i] > pivot) {
//         rt.push(a[i]);
//       } else {
//         lt.push(a[i]);
//       }
//     }
//     return [...quick(lt), pivot, ...quick(rt)];
// }
// const a = [2,-5,6,8,1,6,3,-8];
// function msort(a){
//   if(a.length < 2){
//     return a;
//   }
//   let mid = Math.floor(a.length/2); 
//   let lfa = a.slice(0, mid);
//   let rfa = a.slice(mid);
//   return merge(msort(lfa), msort(rfa));
// }

// function merge(lfa, rfa){
//   let arr=[];
//   while(lfa.length && rfa.length){
//     if(lfa[0]<= rfa[0]){
//       arr.push(lfa.shift());//shift aage se delete kr dega.
//     }else{
//       arr.push(rfa.shift())//shift aage se delete kr deta h
//     }
//   }
//   return [...arr, ...lfa, ...rfa];
// }


// console.log("Before Sorting");
// console.log(a);
// console.log("After Sorting");
// bubble(a);
// insertion(a);
// console.log(msort(a));


/* ********************* Queue ***********************/

// class Queue{
  
//   constructor(){
//     this.items=[];
//     // console.log(this);
//   }

//   enqueue(a){
//     return this.items.push(a);
//   }

//   dequeue(){
//     return this.items.shift();
//     // shift take O(n) so we use obj instead of array
//   }

//   size(){
//     return this.items.length
//   }

//   peek(){
//     return this.items[0];
//   }

//   isEmpty(){
//     return this.items.length===0;
//   }

//   print(){
//     console.log(this.items);
//   }
// }
/* ************************** Optimised ******************************* */
// class Queue{
//   constructor(){
//     this.items={};
//     this.rear = 0;
//     this.front =0;
//     console.log(this);
//   }

//   enqueue(a){
//     this.items[this.rear] = a;
//     this.rear++;
//   }

//   dequeue(){
//     let k = this.items[this.front];
//     delete this.items[this.front];
//     this.front++;
//     return k;
//   }

//   size(){
//     return this.rear - this.front;
//   }

//   peek(){
//     return this.items[this.front];
//   }

//   isEmpty(){
//     return this.rear - this.front === 0;
//   }

//   print(){
//     console.log(this.items);
//   }
// }

/* ***************************Circular Queue ******************************* */

// class Queue{
//   constructor(cap){
//     this.items = new Array(cap);
//     this.cap = cap;
//     this.rear = -1;
//     this.front = -1;
//     this.len = 0;
//   }

//   isfull(){
//     if(this.len === this.cap){
//       return true;
//     }else{
//       return false;
//     }
//   }

//   isEmpty(){
//     if(this.len === 0){
//       return true;
//     }else{
//       return false;
//     }
//   }

//   enqueue(a){
//     if(!this.isfull()){
//       this.rear = (this.rear + 1) % this.cap;
//       this.items[this.rear]=a;
//       this.len++;
//       if(this.front === -1){
//         this.front = this.rear;
//       }
//     }
//   }

//   dequeue(){
//     if(this.isEmpty()){
//       return "null";
//     }
//     let x = this.items[this.front];
//     this.items[this.front] = null;
//     this.front = (this.front + 1)%this.cap;
//     this.len -=1;
//     if(this.len === 0){
//       this.front = -1;
//       this.rear = -1;
//     }
//     return x;
//   }

//   peek(){
//     if(this.isEmpty()){
//       return "null"
//     }else{
//       return this.items[this.front];
//     }
//   }

//   print(){
//     if(this.isEmpty()){
//       console.log("Queue Empty");
//     }

//     let s = "";
//     let i;
//     for(i=this.front; i!= this.rear; i=(i+1)%this.cap){
//       s += this.items[i]+" ";
//     }
//     s += this.items[i]+" ";
//     console.log(s);
//   }

//   size(){
//     return this.len;
//   }

// }

// const q = new Queue(3);
// q.enqueue('1');
// q.enqueue('5');
// q.enqueue('6');
// console.log(q.isEmpty());
// q.print();
// console.log(q.size());
// q.dequeue();
// q.dequeue();
// console.log(q.peek());
// q.print();

/* hash-table */
// class HashTable{
//   constructor(size){
//     this.table = new Array(size)
//     this.size = size
//   }

//   hash(key){
//     let total = 0;
//     for(let i =0; i<key.length; i++){
//       total+= key.charCodeAt(i);
//     }
//     return total %this.size;
//   }

//   set(key, value){
//     const index = this.hash(key);
//     this.table[index] = value;
//   }

//   get(key){
//     const index = this.hash(key)
//     return this.table[index];
//   }

//   remove(key){
//     const index = this.hash(key)
//     this.table[index] = undefined;
//   }

//   display(){
//     for (let i=0 ; i < this.size ; i++) {
//       if(this.table[i]){
//         console.log(i, this.table[i]);
//       }
//     }
//   }
// }

// const table = new HashTable(50)


// tree

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

