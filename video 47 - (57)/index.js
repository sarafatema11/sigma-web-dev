console.log("I am a tutorial of Loops")

let a = 1;   //not allowed this method of code they will be Hang our Editor.

// console.log(a)  
// console.log(a + 1)
// console.log(a + 2)

//tere is a limit hum aisa above code nhi kr sakte we fastly tried & our Editor Hnag hona start hojata agr hum ne millions of lines likh diye to aise. thats why idhr kaam aata hai Loops.

// Loops in JavaScript :
// Loops in JavaScript are used to execute a block of code repeatedly until a given condition is satisfied.

// JavaScript has 5 commonly used types of loops:
// 1. for loop
// 2. while loop
// 3. do...while loop
// 4. for...in loop
// 5. for...of loop

//for loop: A for loop is used when you know how many times you want to execute a block of code.
//Working: Initialization → Condition Check → Execute Code → Increment/Decrement → Condition Check Again.

// for (let i = 0; i <100; i++) {     
//     console.log(a + i);             //output print numbers 12345... to ...98 99 100 
// }

for (let i = 0; i <5; i++) {     
    console.log(a + i);             //output print numbers 1 to 5
}

//for-in Loops :  A for in loop is used to access the keys (property names) of an object one by one.

let obj ={
    name: "Harry",           //Element is a value. like... Harry,programmer, Codewithharry Ai.
    role : "Programmer",
    Company: "CodeWithharry Ai" 
}

//Here keys & element both print.
for (const key in obj) {
    const element = obj[key];
    console.log(key, element)      //here Keys is--> Name,role,Company... & ....element is--->Harry,programmer, Codewithharry Ai.
}

//we can only print Key also.
for (const key in obj) {
    const element = obj[key];
    console.log(key)              //here Keys is--> Name,role,Company.
}

// orwe can only print Element also.
for (const key in obj) {
    const element = obj[key];
    console.log(element)      //here element is--->Harry,programmer, Codewithharry Ai.
}

//for of Loop: A for of loop is used to access the values of an array or string one by one.

for (const c of "Harry") {   //output print one by one alphabets --> H    a   r   r   y
    console.log(c)   //here c means Char ---> means Character
}

//while loop: A while loop is used to execute a block of code repeatedly as long as the given condition is true.

let i = 0;

while (i <=10) {
    console.log(i);
    i++;
}


//do while loop:  A Do While Loop executes a block of code at least once before checking the condition.

// ex:1
let s =11;
do {
    console.log(s);
    s++;
} while (s<=20);


// ex:2

let t = 10;

do {
    console.log(t);   //output 10 print hoga.
    t++;
} while (t < 5);   //10<5 loop here stope & we output is 10


// While = Check first, Execute later.
// Do While = Execute first, Check later.