// function name :

function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your tshirt is nice!")
    console.log("Hey " + name + " your course is good too!")
}

nice("Rohan")     //ye output show hoga like: Hey Rohan you are nice! etc

nice("shivam")

// function sum : this is reuseable function.

function sum(a, b) {
    console.log(a + b)
}

sum(3, 5)    //output print: 8 bcz here a is 3 & b is 5 , so (3+5=8).



//function sum with return keyword :
function sum(a, b) {
    // console.log(a+b) 
    return a + b  //ye likhne se a + b is jo value hai wo result me ajayegi.
}

result = sum(3, 5)  //ye result k under 5 or 3 ka sum nhi ayega bcz js ko nhi pata ki kya value dalni hai isliye we use "return" keyword .

console.log("The Sum of these number is :", result)


//if we want multiple times print of sum we can .
//using sum we add or sum of more numbers. bcz sum function is reuseable.

function sum(a, b) {
    return a + b
}

result1 = sum(3, 5)
result2 = sum(7, 5)
result3 = sum(3, 13)

console.log("The sum of these number is :", result1)
console.log("The sum of these number is :", result2)
console.log("The sum of these number is :", result3)

//optional parameter like for ex: c

function sum(a, b, c = 3) {   //here c is a default value / default parameter.
    return a + b + c
}

result1 = sum(3, 5)    //8+3=11
result2 = sum(7, 5)    //12+3=15
result3 = sum(3, 13)   //16+3=19 

console.log("The sum of these number is :", result1)
console.log("The sum of these number is :", result2)
console.log("The sum of these number is :", result3)

//we here not use c value not used optional paramerter result see'

function sum(a, b, c = 3) {   //here c is a default value / default parameter.
    return a + b + c
}

result1 = sum(3, 5)   
result2 = sum(7, 5)     
result3 = sum(3, 13, 1)   // output:- 16+1=17    bcz here c is optional so they not used c here c ki jagah 1 use hua. 

console.log("The sum of these number is :", result1)
console.log("The sum of these number is :", result2)
console.log("The sum of these number is :", result3)


//error or undefined:-
//erroe ayega sum me agr aap ne sirf ek value di.


function sum(a, b, c = 3) {   //here c is a default value / default parameter.
    console.log(a, b, c)   //here output mein b ki value undefined ayegi. for ex:- 3 undefined 3
    return a + b + c
}

result1 = sum(3)    // output:- NaN ---> means Not a Number. bcz ek hi value di hum ne galti se to error aata hai. 
result2 = sum(7, 5)      
result3 = sum(3, 13, 1)   

console.log("The sum of these number is :", result1)
console.log("The sum of these number is :", result2)
console.log("The sum of these number is :", result3)

// if we give correctly value of a & b both then not error comes in screen:-

function sum(a, b, c = 3) {   //here c is a default value / default parameter.
    console.log(a, b, c)   //here output mein b ki value undefined ayegi. for ex:- 3 undefined 3
    return a + b + c
}

result1 = sum(3,2)    // output:- 3+2+3= 8
result2 = sum(7, 5)      
result3 = sum(3, 13, 1)   

console.log("The sum of these number is :", result1)
console.log("The sum of these number is :", result2)
console.log("The sum of these number is :", result3)


//Arrow function:- 
//  this is also reuseable function.
//variable k under store kr sakte ho ek function ko.
//like func1 ek variable or function do bhi hai.

const func1=(x)=>{
    console.log("I am arrow function", x)
}
func1(34);
func1(66);
func1(84);


//function invocation:-
//is a way to use the code inside the function.

// a function can also return a value. the value is "returned"  back to the caller.


