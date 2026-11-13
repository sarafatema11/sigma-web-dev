let arr = [1, 2, 4, 5, 7]
//Index    0  1, 2, 3, 4
 
arr [0] = 5666;
console.log(arr);      //output:- (5) [1, 2, 4, 5, 7]
console.log(arr.length);  //output:- 5

//Array object:- 
console.log(arr, typeof arr);  //output:- (5) [5666, 2, 4, 5, 7] 'object

// console.log(arr[0]);    //output:- 1 without arr [0] = 5666;
console.log(arr[0]);    //output:- 5666 not 1 bcz we chanege the value.
console.log(arr[2]);    //output:- 4
console.log(arr[4]);    //output:- 7 
 







// Array is mutable we can change the array. but string is immutable we can not change it.

let numbers = [7, 2, 40, 9]
//Index    0  1, 2, 3, 4

numbers[2] = 8;//index 2 jo ki 40 hai uski jagah 8 ajayega.

console.log(numbers); //here output:- (4) [7, 2, 8, 9]

//string immutable ex:

let a = "Harry"
a[0] = "k"
console.log(a);  //output:- Harry not karry bcz its immutable striing.

// Array → Mutable (you can change individual elements).
// String → Immutable (you cannot change individual characters).

//Array methods:- 

let ar = [5666, 2, 4, 5, 7]

// 1. tostring() : Converts an array into a string.
console.log(ar.toString());  
//ouput:- 5666,2,4,5,7

//2. join():- Joins all array elements into a string using a separator.
console.log(ar.join(" and "));  
//output:-  5666 and 2 and 4 and 5 and 7

//3.pop():-
ar.pop();
console.log(ar);
// output:- (4) [5666, 2, 4, 5]

//4.push():-
// ar.push(100);
// console.log(ar);   
//ouput:- (5) [5666, 2, 4, 5, 100]

// ar.push("Harry");
// console.log(ar); 
//ouput:- (5) [5666, 2, 4, 5, 100, 'Harry']

ar.push(100, "Harry");
console.log(ar);
//we can both numbers & charracters. 
//output:- (6) [5666, 2, 4, 5, 100, 'Harry']

//5. Shift:- 
ar.shift();
console.log(ar);
//output:- (7) [2, 4, 5, 100, 'Harry', 100, 'Harry']

//6.unshift: 
ar.unshift("Jack");
console.log(ar);
//output:- (8) ['Jack', 2, 4, 5, 100, 'Harry', 100, 'Harry']

//unshift -- push bro & shift is --- pop brother.

//7. delete() :
delete ar[5];
console.log(ar);
//output:- (6) ['Jack', 2, 4, 5, 100, empty]


console.log(ar.length);
//output:- 6
//empty hone k baad  bhi length app ko 6 hi batayegi. bcz array me memory allocate ki gayi hai but waha value nhi hai.

//8.Concat:- 
let x = [1, 2, 3]
let y = [4, 5, 6]
let z = [9, 8, 7]

let result = x.concat(y, z);
console.log(result);
//output:- (9) [1, 2, 3, 4, 5, 6, 9, 8, 7]


//9.sort : sort() method array ke elements ko ascending ya descending order mein arrange karta hai.
let num = [7, 9, 8]
num.sort();
console.log(num);
//output :- (3) [7, 8, 9]

//Numbers ascending order sort ex:1 
let numb = [40, 100, 5, 20];

numb.sort((a, b) => a - b);
console.log(numb);
//output:-  [5, 20, 40, 100]

//Descending order sort ex:2
let a1 = [40, 100, 5, 20];

a1.sort((a, b) => b - a);
console.log(a1);
//output:- (4) [100, 40, 20, 5]

//10.splice :
//Example 1: Removing elements
let NUM = [1, 2, 3, 4, 5]
//Index:   0  1  2  3  4

let Result = NUM.splice(1,3, 55);
console.log(Result);  //remove  2, 3, 4
console.log(NUM);    // add 55 
//output:- (3) [2, 3, 4]   ---- result output
//output: (3) [1, 55, 5]   ----- NUM output.




//11.slice:
// let number = [1, 2, 3, 4, 5]
// //Index:      0  1  2  3  4

// let results =  number.slice(1,3);
// console.log(results);
// // output:- (2) [2, 3]

let cars = ["BMW", "Audi", "Thar", "Swift", "Tesla"];

let results = cars.slice(1, 3);
console.log(results);
//output:- (2) ['Audi', 'Thar']

//12.rreverse : ulta krd eta elemenst ko
let fruits = ["Mango", "Banana", "Apple", "Grapes"]
fruits.reverse();
console.log(fruits);
//output:- (4) ['Grapes', 'Apple', 'Banana', 'Mango']


