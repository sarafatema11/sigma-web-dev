console.log("loops in Array tutorial");

let p = [1, 93, 5, 6, 88]



//1. for loop
console.log("for loop");
for (let index = 0; index < p.length; index++) {
    const element = p[index];
    console.log(element);
}
/*output:-  one by obne ek k neeche ek agye.
1
93
5
6
88
*/

//2.for-each loop
console.log("for-each loop");
p.forEach((value, index, arr)=>{
    console.log(value, index, arr)
})
//output show hoga-- value index array ye struture  mein.
/* output:- 
 1 0 (5) [1, 93, 5, 6, 88]
 93 1 (5) [1, 93, 5, 6, 88]
 5 2 (5) [1, 93, 5, 6, 88]
 6 3 (5) [1, 93, 5, 6, 88]
 88 4 (5) [1, 93, 5, 6, 88]
*/


//3. for-in loop
console.log("for-in loop");
let obj = {
    a : 1,
    b : 2,
    c :3
  
}
for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    const element = obj[key];
    console.log(obj);
}

//only element print hoga.
for (const key in obj) {
    console.log(obj[key]);
}

//key & elements dono print hoga.
for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    const element = obj[key];
    console.log(key, obj);
}

//for-of loop
console.log("For-Of loop")

for (const value of p) {  //aap yaha khuvch bhi bol sakte ho value /element / iterator etc. 
    console.log(value);
}
/*output:-  one by obne ek k neeche ek agye.
1
93
5
6
88
*/

//map