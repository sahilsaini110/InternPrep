// const fs = require("fs")
// const http = require("http")


// fs.appendFile("./test.txt", "i am learning js", (err)=>{
//     console.log("hi");
// })

// const server = http.createServer((req, res)=>{
//     res.end(`${Date.now()}"hello world!"`)
// })

// server.listen(8000);

let name = "sahil";
let whatYouWannaBecomeInYourLife = "programmer";
let gender = "male";
let twitterHandle = "sahilsaini1107";
console.table({"name":name, "future":whatYouWannaBecomeInYourLife, "gender": gender, "twitter": twitterHandle })

let isJsProgrammingLanguage = true;
let IsJsHard = false;
let favNumb = 24;
let no = favNumb + undefined;
console.table({"whatjs":isJsProgrammingLanguage, "hard":IsJsHard, "favnumber": favNumb, "sup": no })

let firstFavNumb = 24;
let secondFavNumb = 6;

console.table({"isgraeter": firstFavNumb > secondFavNumb, "isless": firstFavNumb < secondFavNumb, "isgreaterequal": firstFavNumb >= secondFavNumb, "islessequal":firstFavNumb <= secondFavNumb, "isequal":firstFavNumb === secondFavNumb, "isequalloose":firstFavNumb == secondFavNumb , "isnotequal": firstFavNumb !== secondFavNumb, "isnotequalloose": firstFavNumb != secondFavNumb})

let favActFirstName = "Vijay";
let favActLastName = "thelapathy";
let fullName = `${favActFirstName} ${favActLastName}`;
let upperCase = fullName.toUpperCase();
let message = `MY favorite Actor Is ${upperCase} , he is the best actor.`;
message += ' his best show is silicon valley';
console.log(`${message}`);
