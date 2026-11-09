console.log("Hello I am conditional tutorial")


// if & else  blocck
// let age = 45;   //-- true / can ddrive
// let age = 5;    //-- false / can not drive

// if (age>18){    //if block
//     console.log("you can drive");    //if age 45 its print this
// }

// else {          // els block
//     console.log("you can not drive");  //if age 5 then print this msg on console / or terminal
// }


//Arithhamatic operator

// let age = 17;
// let age = 3;
// let grace = 2;

// // console.log(age+grace);   //print 19 output 
// console.log(age+grace);   //print 5 output 
// console.log(age-grace);   //  1   //minus
// console.log(age*grace);   //  6 //multiply
// console.log(age/grace);   //  1.5 //divide
// console.log(age**grace);  //  9 //exponentaation
// console.log(age%grace);  //  1  //modulus

// if ((age+grace)>18){    
//     console.log("you can drive");   //17+2=19 msg print this
// }
// else {         
//     console.log("you can not drive");
// }

// Assignment operator
// let age = 3;
// let grace = 2;

// age += grace

// console.log(age);          // 5
// console.log(age+grace); //print 7 output bcz age here is now 5,5+2=7
// console.log(age-grace);   //  3   //minus
// console.log(age*grace);   //  10 //multiply
// console.log(age/grace);   //  2.5 //divide
// console.log(age**grace);  //  25 //exponentaation
// console.log(age%grace);   //  1  //modulus

// if (age>18){    
//     console.log("you can drive");  
// }
// else {         
//     console.log("you can not drive");
// }


//comparision operator  -- true or false.

// 1. Equal                 ==
// 2. Strict Equal          ===
// 3. Not Equal             !=
// 4. Strict Not Equal      !==
// 5. Greater Than          >
// 6. Less Than             <
// 7. Greater Than Equal    >=
// 8. Less Than Equal       <=
// 9. Ternary Operator      ? :

// Note: Ternary (? :) is a conditional operator, not a comparison operator. JavaScript has 8 standard comparison operators.

// let age = 18;
// let age = 19;

// // if (age==18){  ----   //equal to / u can drive
// if (age!=18){     //not equal to / u can not drive
//     console.log("you can drive");  
// }
// else {         
//     console.log("you can not drive");
// }

// logical operator

// 1. logical And    && ----> It returns true only when both conditions are true.
// 2. logical or     || ---->  It returns true when at least one condition is true.
// 3.logical not     !  ---->  It reverses the result of a condition (true becomes false and false becomes true).

let a = 6;
let b = 7;

// Logical AND
if (a < b && b > a) {
    console.log("AND: true");
}
else {
    console.log("AND: false");
}

// Logical OR
if (a > b || b > a) {
    console.log("OR: true");
}
else {
    console.log("OR: false");
}

// Logical NOT
if (!(a == b)) {
    console.log("NOT: true");
}
else {
    console.log("NOT: false");
}

// comments in js 
/* i am 
a multi line
comment */

// This is a single line comment
let f = 10;
console.log(f);

/*
This is a multi-line comment.
It is used to write multiple lines.
*/
let q = 10;
let r = 20;

console.log(q + r);


//Conditional statements :
// 1. **IF Statement:** -----It is used to execute a block of code only when the given condition is true.
// 2. **IF-ELSE Statement:** ---- It is used to execute one block of code if the condition is true and another block if the condition is false.
// 3. **ELSE-IF Statement:** -------It is used to check multiple conditions one by one.
// 4. **Nested IF Statement:** -------It means writing an IF statement inside another IF statement.
// 5. **SWITCH Statement:**------ It is used to execute one block of code from multiple choices based on a given expression.
// 6. **TERNARY Operator:** -----It is a short way of writing an IF-ELSE statement. It returns one of two values based on a condition.

// 1. IF STATEMENT

let price = 500;

if (price > 200) {
    console.log("Price is high");
}

// 2. IF-ELSE STATEMENT

let marks = 35;

if (marks >= 40) {
    console.log("Pass");
}
else {
    console.log("Fail");
}

// 3. ELSE-IF STATEMENT

// example:1
let Score = 85;

if (Score >= 90) {
    console.log("Grade-A");
}
else if (Score >= 60) {
    console.log("Grade-B");
}
else {
    console.log("Grade-C");
}

// example:2
// let age = 0;

// if (age==18){
//     console.log("You can drive");
// }
// else if(age == 0){
//     console.log("Are you kidding?");
// }
// else{
//     console.log("You can not drive");
// }

// ex:3
let age = 1;
if (age == 18) {
    console.log("You can drive");  //false
}

else if (age == 0) {
    console.log("Are you kidding?") //false
}

else if (age == 1) {
    console.log("Are you again kidding?")   //true 
}

else {
    console.log("You cannot drive");
}


// 4. NESTED IF STATEMENT

let salary = 250000;
let experience = 3;

if (salary >= 20000) {
    if (experience >= 2) {
        console.log("You are eligible for Promotion.")
    }
}

// 5. SWITCH STATEMENT

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}


// 6. TERNARY OPERATOR
// condition ? "True" : "False";

// ex:1
let ageCheck = 18;

let result = (ageCheck >= 18) ? "Adult" : "Minor";
console.log(result);

// ex:2
let u = 5;
let v = 6;
let w = u > v ? (u - v) : (v - u);

console.log(w);

/*
 translate to: (if else statement ka short form hai turnory operator) :---
let u = 5;
let v = 6;
let w;

if(u > v){
    w = u - v;
}
else{
    w = v - u;
}

console.log(w);
    
*/
