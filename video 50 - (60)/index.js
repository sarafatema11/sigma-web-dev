console.log("This is Strings tutorial");

//string: 

let a = "Harry";
console.log(a)  //Harry output ayega.

//if u want to print one letter only u can do that see below code : harry character me print ho jayega.
let b = "Harry";
console.log(a[0]);   //output:- H 
console.log(a[1]);  //output:- a
console.log(a[2]);   //output:- r 
console.log(a[3]);   //output:- r 
console.log(a[4]);   //output:- y 
//console.log(a[5]);   //output:- undefined

//javascript kaam se kaam error show krni wali lanuage hai.
//agr ye same kaam aap code c++ me write krte to 50 error show hote bcz hum ne semicolon lagaya hi nhi tha ..
//Index zero (0) se  start hoti hai. 

console.log(a.length);  //output:- 5 bcz it show array length. which is here "Harry" .

let real_name = "Harry"
let friend = "Rohan"

console.log("His name is " + real_name + " and his friend name is " + friend);

//output:- His name is Harry and his friend name is Rohan.

console.log(`His name is ${real_name} and his friend name is ${friend}`);
//His name is Harry and his friend name is Rohan


//here we use both single ('') and double ("") quaotion.
let sentence = `The name "is" Harry's`
console.log(sentence);

//string interpolation:- we can insert vairable directly in template interpolation.

let realname = "Rahul";
let x = `this is ${realname}`;
console.log(x);     //output:- this is Rahul

/*
 Escape sequence character :- 
 in JavaScript are special characters used with a backslash (\) to perform specific tasks inside strings.

 | Escape | Meaning |
|---|---|
| `\n` | New line |
| `\t` | Tab space |
| `\'` | Single quote |
| `\"` | Double quote |
| `\\` | Backslash |

*/

let text = "Hello\nRahul"         //output :- Hello 
console.log(text);                //          Rahul

//string methods & properties: length is a property & other is a function they start with () brackets.

/*
╔════════════════════════════════════════════╗
║       JAVASCRIPT STRING PROPERTY           ║
╠════════════════════════════════════════════╣

╠════════════════════════════════════════════╣
║ 1. length                                  ║
║    → Returns total number of characters.   ║
╠════════════════════════════════════════════╣

╠════════════════════════════════════════════╣
║       JAVASCRIPT STRING METHODS            ║
╠════════════════════════════════════════════╣
║ 1. toUpperCase()                           ║
║    → Converts string into uppercase.       ║
║                                            ║
║ 2. toLowerCase()                           ║
║    → Converts string into lowercase.       ║
║                                            ║
║ 3. slice()                                 ║
║    → Extracts a part of string.            ║
║                                            ║
║ 4. substring()                             ║
║    → Extracts characters between positions.║
║                                            ║
║ 5. replace()                               ║
║    → Replaces a word or character.         ║
║                                            ║
║ 6. replaceAll()                            ║
║    → Replaces all matching occurrences.    ║
║                                            ║
║ 7. trim()                                  ║
║    → Removes spaces from both ends.        ║
║                                            ║
║ 8. trimStart()                             ║
║    → Removes spaces from the beginning.    ║
║                                            ║
║ 9. trimEnd()                               ║
║    → Removes spaces from the end.          ║
║                                            ║
║ 10. includes()                             ║
║     → Checks whether text exists.          ║
║                                            ║
║ 11. startsWith()                           ║
║     → Checks the starting text.            ║
║                                            ║
║ 12. endsWith()                             ║
║     → Checks the ending text.              ║
║                                            ║
║ 13. charAt()                               ║
║     → Returns character at a position.     ║
║                                            ║
║ 14. indexOf()                              ║
║     → Returns first matching position.     ║
║                                            ║
║ 15. lastIndexOf()                          ║
║     → Returns last matching position.      ║
║                                            ║
║ 16. concat()                               ║
║     → Joins two or more strings.           ║
║                                            ║
║ 17. repeat()                               ║
║     → Repeats a string multiple times.     ║
║                                            ║
║ 18. split()                                ║
║     → Splits string into an array.         ║
║                                            ║
║ 19. padStart()                             ║
║     → Adds characters at the beginning.    ║
║                                            ║
║ 20. padEnd()                               ║
║     → Adds characters at the end.          ║
╚════════════════════════════════════════════╝
*/

let c = "ShivamSh"

console.log(c.toUpperCase())   // output:- SHIVAM
console.log(c.toLowerCase())  //output:-   shivam
console.log(c.length)         //output:-    6
console.log(c.slice(1, 5))     //output:- hiva
//zero (0) se le kr 4 k bech k letters ajayege. 
console.log(c.slice(1))      // output:- hivam
// one index se le kr sare letters character dega. here 0 zero is s.

console.log(c.replace("Sh", "77"))   //output:- 77ivamSh

/*remember:-
replace() method by default string mein sirf first matching word ya character ko replace karta hai, second matching ko nahi.

ex:-
let c = "ShivamSh"

is ne first Sh ko 77 krdiya but last wala jo Sh hai usko replace nhi kara.

Second "Sh" replace nahi hua.
*/


console.log(c.concat(a, "Aishwarriya", "Priya", "Rahul"))
//here a is Harry we declared this in Starting of the string tutorial.
//we can add more using cancatating like above code .
//here we can even use (+) plus name operator.


//string immutable:-
// we can make new string usinng string functions but we can not change old string.
//Immutable means once a string is created, its original characters cannot be changed.


console.log(c)    //ouput:- ShivamSh  bcz string immutable .

let z = "Harry";
z[0] = "B";         //output:-  Harry
console.log(z);    //string immutable told orifginal string is not changed.


let p = "Shivam";

z = "R" + p.slice(1);
console.log(z);       //now string is changed.
