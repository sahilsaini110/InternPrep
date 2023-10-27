let password = 8;//parseInt(prompt("enter passord"));

if(password === 8){
    console.log("welcome");
}else if(password < 8){
    console.log("passowrd is too short")
}else if(password>8){
    console.log("password is too long is must be 8 characters")
}else{
    console.log("provide password");
}

let fruit = "banana";

switch (fruit){
    case "banana":
        console.log("very good yellow fruit");
        break;
    case "Orange":
        console.log("orange is a citrus fruit");
        break;
    case "apple":
        console.log("apple is good for health");
        break;
    default:
        console.log("unknown fruit");
}

let i =20;
do{
    console.log("sahil saini");
    i++;
}while(i<420);