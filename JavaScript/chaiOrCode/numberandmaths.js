// const score = 400;
// const balance = new Number(100);

// console.log(score);
// console.log(balance); // number type ka object ban jayega 

// console.log(balance.toFixed(2)) // decimal k baad 2 digit tak aayega
// console.log(typeof balance.toString());

// const num = 123.8966
// console.log(num.toPrecision(3)); // total kitni digits chahiye plus ye roung off bhi kr deta h

// const hun = 1000000;
// console.log(hun.toLocaleString('en-IN'));

// ************************* MAths ***************************.
// Math is itself a Object;
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));
// console.log(Math.min(4,5,6,5,2,3));
// console.log(Math.max(4,8,9,7,0,5,1));
// console.log(Math.random());

// i want values between low and high
const low = 10;
const high = 20;

console.log(Math.floor(Math.random() * (high - low + 1)) + low);
