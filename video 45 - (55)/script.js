console.log("Hey This is tutorial 55 ")

// var is variable & data type is = Numbers
// var ko javascript me use nhi krte zyada 
// var a = 5;
// ye hum kr sakte idhr but const me nhi kr sakte 
// a = a + 1
// var b = 6;
// string means the collection of characters  & data type is = string.
// var c ="Sara";

// ye allow hai ye cahlega js Mein.
// var _a = "Shubham"; 

// ye nahi allowed hai nhi chalega bcz App number se start nhi kr sakte hai. 
// var 55a ="Rahul";  ---- // Not Allowed



// here print the output 5+6=11  in console screen 
// console.log(a + b );

// we can add more numbers in this like abb print hoga 11+8= 19.
// console.log(a + b + 8);

//  to find any variable data type we use this below code  operator
// console.log(typeof a, typeof b, typeof c);

// 6 its constant now we can't change 
// const means constant means aap kisi bhi value ko change nhi kr sakte. 

// const a1 = 6;
// a1= a1 + 1 ;  ---- // Not Allowed bcz a1 is constant


// let -- we use let bcz its automaticaaly bcome a Global variables.

let a = 5;
// a = a + 1
let b = 6;
let c = "Sara";

let _a = "Shubham";
// var 55a ="Rahul";  ---- // Not Allowed

// console.log(a + b + 8);
// console.log(typeof a, typeof b, typeof c);
{
    // let a = 66;   //if this not exists in block scope then its print 5 of a. global scope
    console.log(a)
}
console.log(a)



//  agr hum  let  ki jagah var krenge to wo 2 bar bhi 66 print krega bcz var is a globally scoped & let is a blocked scoped. 

//  var a = 5;
// {
//     var a = 66;
//     console.log(a)
// }
//  console.log(a)


// primative data types 
let x = "Harry bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)



// object data type 
// here name is a key & value is a Harry 

let o = {
    "name": "Harry",
    "job role": 5600,
    "is_handsome": true
    // u can do both true ya false anyting u want 
}
console.log(o)
// here object print 

o.salarary = "100crores";
console.log(o);

o.salarary = "500crores";
console.log(o);


//Answer
let student = {
    name: "Rahul",
    phoneNumber: "1234567890",
    Marks: "56"
}
console.log(student);
console.log(student.name);
console.log(student.phoneNumber);
console.log(student.Marks);