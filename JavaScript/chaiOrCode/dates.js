// Dates

// let myDates = new Date();
// console.log(myDates.toJSON()); // 2023-11-14T12:27:54.188Z
// console.log(typeof myDates); // object
// console.log(myDates.toString()); //Tue Nov 14 2023 12:28:46 GMT+0000 (Coordinated Universal Time) 
// console.log(myDates.toDateString()); //Tue Nov 14 2023
// console.log(myDates.getFullYear()); //2023
// console.log(myDates.getMonth()); //10
// console.log(myDates.getTime()); //1699965089395
// console.log(myDates.getUTCMonth());//10
// console.log(myDates.toUTCString());//Tue, 14 Nov 2023 12:31:29 GMT

// let myCreateDate = new Date(2023, 0 , 23); // js m month 0 se suru hote h
// let myCreateDate = new Date(2023, 0 , 23, 5, 3);
// let myCreateDate = new Date("2023-01-20");
// let myCreateDate = new Date("01-14-2023");
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleDateString());


// let myTimeStamp = Date.now();
// console.log(myTimeStamp)
// console.log(Math.floor(myTimeStamp/1000));
// also myCreateDate.getTime() is same as time stamp/

let newdate = new Date();
console.log(newdate)

// we can also customize toLocalString()

console.log(newdate.toLocaleString('default', {
    weekday: "long"
}) )