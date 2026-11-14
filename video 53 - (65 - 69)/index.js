console.log("Ex.11: Calculate Factorial Number.");

//for loop
/*
let array = [6];
let fact = 1;

for (let index = 1; index <=array[0]; index++) {
    fact = fact * index;
}
console.log(fact);
*/


//output:- 720.
/* Explain :- 
array[0] ki value 6 hai.
Loop 1 se 6 tak chalega.
fact = fact * index har number ko multiply karega.
Final answer 720 milega.
*/


// answ using for loop in js:-
let n = 6;
let fact = 1;
let numbers = [];

for (let i = n; i >= 1; i--) {
    fact = fact * i
    numbers.push(i);
}
console.log(n + "! = " + numbers.join(" * ") + " = " + fact);


/* output Explain :
Ismein 4 parts hain:

1. n + "! = "
- n ki value 6 hai.
- "! = " text print karega.
Output: 6! =

2. numbers.join(" * ")
- numbers array ke saare numbers ko ek line mein join karega.
- " * " numbers ke beech multiplication sign lagayega.
Output: 6 * 5 * 4 * 3 * 2 * 1

3. " = "
- Dono ke beech equal sign print karega.
4. fact
- fact mein multiplication ka final answer 720 stored hai.
Output: 720
*/




//ans with reduce method :

/*
let z = 6;

let number = Array.from({ length: z }, (value, index) => z - index);

let fac = number.reduce((a, b) => a * b);

console.log(n + "! = " + number.join(" * ") + " = " + fac);
*/






console.log("Sir Answer below")

//sir ans 

let a = 7;
function factorial(number) {
    let arr = Array.from(Array(number + 1).keys())
    let c = arr.slice(1,).reduce((a, b) => a * b
    )
    return c
}

function facFor(number) {
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index

    }
    return fac
}

console.log(factorial(a))
console.log(facFor(a))

//output :-  5040
//7 ka facctorial 5040 .


/* Explian above sir code :

1. Reduce() Method:

Array.from() → 0 se number tak array banata hai.
keys() → Array ke indexes return karta hai.
slice(1,) → Index 1 se last tak elements leta hai.
reduce((a, b) => a * b) → Saare numbers ko multiply karta hai.
return c → Final factorial return karta hai.


2. For Loop:

fac = 1 → Multiplication ki starting value.
Loop 1 se number tak chalta hai.
fac = fac * index → Har number ko multiply karta hai.
return fac → Final factorial return karta hai.


Output: 5040 (7! = 7 × 6 × 5 × 4 × 3 × 2 × 1)

*/