console.log("Error Handling ")

// let a = prompt("Enter a first number ")
// let b = prompt("Enter a second number ")
// // let sum = a + b  // they are string isliye output nhi arra plus krne pr.
// let sum = parseInt(a) + parseInt(b)

// console.log("The sum of ", sum);
// output :-
/*
suppose we try first no. 12 & second no. 34 they apped merge this numbers like that "The sum of 1234 "

let sum = a + b  //they are string a ko b meinapped kr deta hai ye. so hamein isko integer me convert krna padega .

parseInt :-  ye ek function hota hai javascript ka jo ki integer me pass kr deta hai ek string ko.

now here, output is correct : The sum of  46 ayega 12 + 34 ka.
*/

// if user want number ki jagah letters name dalega to output :- The sum is Nan ayega.

//nan means Not a Number (NaN) , but js khuch types k errors bugs hamein nhi dikhata hai bcz js ka forgiving nature hota hai.
//  if u want ki error show then here we use isNaN() function see below example.

console.log("isNaN function for showing errors / custom error :");


// let a = prompt("Enter a first number ")
// let b = prompt("Enter a second number ")

// if (isNaN(a) || isNaN(b)) {
//     throw SyntaxError("Sorry this is not allowed")
//     //hum istarah se js me bhot sare errors hote hai usko throw kr sakte hai.
// }
// // let sum = a + b  // they are string isliye output nhi arra plus krne pr.
// let sum = parseInt(a) + parseInt(b)

// console.log("The sum of ", sum)

//if u want to explore more errors in javascript then go on chrome & type "Errors in javascript mdn docs" website. see below link also.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

console.log("Error handled by try & catch :");


//abb mein yaha sum multiply by X likho do to dekho kya hoga.

// let a = prompt("Enter a first number ")
// let b = prompt("Enter a second number ")

// if (isNaN(a) || isNaN(b)) {
//     throw SyntaxError("Sorry this is not allowed")
// }

// let sum = parseInt(a) + parseInt(b)

// try {
//     console.log("The sum of ", sum * x)
//     //ye try kro ye chal jata hai to theek hai warna catch msg print kro.
// } catch (error) {
//     console.log("Error aa gaya bhai")
//     // ye print hoga error with out red color mein like print on console screen like a normal msg..
// }


// output:- Uncaught ReferenceError: x is not defined  at script.js:36:32

// hum ko error show hoga. or mein chatah ho ki agr istarah ka koi bhi error ayye to mein handle kr sako like :
//means mein khuch action le sako based of error throw by a javascript library may be or ya phir javascript ka internal error .

/* 2 types of errors in js :
1. custom error bana k throw kroge:- error aap doge throwing errors like isNan function me use kra hum ne wo custom error ka example hai.


2. error handeling kroge :- aap ki apni galti se application me khuch aisa maar diya error for example : network call apne maar ri or waha se jo data ayya wo unecpected nikla or usne aap ko error throw kr k de diya. aap us error ko handel kr sakte ho may be aap error ko retrying kr sakte ho. 

*/

console.log("Error object :")

// let a = prompt("Enter a first number");
// let b = prompt("Enter a second number");

// if (isNaN(a) || isNaN(b)) {
//     throw new SyntaxError("Sorry, this is not allowed");
// }

// let sum = parseInt(a) + parseInt(b);

// try {
//     console.log("The sum is:", sum * x);
// }
// catch (error) {
//     console.log("Error aa gaya bhai!");

//     console.log("Error Name:", error.name);
//     console.log("Error Message:", error.message);
//     console.log("Error Stack:", error.stack);
// }


console.log("Finally clause :");

// function main(){

//     let a = prompt("Enter a first number ")
//     let b = prompt("Enter a second number ")

//     if (isNaN(a) || isNaN(b)) {
//         throw SyntaxError("Sorry this is not allowed")
//     }

//     let sum = parseInt(a) + parseInt(b)


//     let x = 1;
//     try {
//         console.log("The sum of ", sum * x)
//         return true

//     } catch (error) {
//         console.log("Error aa gaya bhai")
//         return false 
//     }
//     finally{
//         console.log("files are being closed and db connection is being closed"); 
//     }  
// }

// let c = main()

//output:- The sum of  12
// files are being closed and db connection is being closed


console.log("Finally clause function without finally :");

function main() {

    let a = prompt("Enter a first number ")
    let b = prompt("Enter a second number ")

    if (isNaN(a) || isNaN(b)) {
        throw SyntaxError("Sorry this is not allowed")
    }

    let sum = parseInt(a) + parseInt(b)


    let x = 1;
    try {
        console.log("The sum of ", sum * x)
        return true

    } catch (error) {
        console.log("Error aa gaya bhai")
        return false
    }
    console.log("files are being closed and db connection is being closed");

}

let c = main()

//output:- The sum of  14


