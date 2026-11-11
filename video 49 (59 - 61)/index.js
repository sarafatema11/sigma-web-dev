/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/

let random = Math.random()
console.log(random)
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}



if (random > 0.1) {
    // Perform correct calculation
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
    //Yahan eval() string ke andar likhe code ko execute karke calculation karta hai.
    //Bas yaad rakho: eval() string ko JavaScript code ki tarah execute karta hai.
    //Real projects mein eval() avoid karna chahiye because it's unsafe.
}

else {
    // Perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}