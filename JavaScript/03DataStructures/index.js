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

let n = 7;
let a =[];
a[1]=0;
a[0]=0;
for(let i =2; i<n+1; i++){
	a = [...a, 1];
}
console.log(a);
for(let i =2; i<n+1; i++){
	if(a[i]){
  	for(let j = 2*i; j<n+1; j+i){
    	a[j]=0;
    }
  }
}
console.log(a[7]);