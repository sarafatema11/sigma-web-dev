console.log("Hey Async/Await, Fetch API");

//Impotant :-
// 1) Settle Means " resolve or reject. "
// 2) resolve means promise has " Settled Suceesfully ".
// 3) reject means promise " has not Settled Suceesfully. "

//Promise code ex :

// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455) // random value de denge.
//         }, 3500);   //3.5 second hai wo
//     })
// }
// console.log("Loading Modules")

// console.log("Do Something Else")

// console.log("Load Data")

// let data = getData() 
//ye data chalega to nhi chutki me isko data ja k le kr anna padta, ye na Promise return karega , ye aap ko aisa object de dega jis ko abb baad me ja bhi data ayega to hum us mein se data nikal sakte ho. , ye aap ko is tarah se Promise object de dega. 

// console.log(data) 
// console.log("Process Data")
// console.log("task 2")

//output:- see below 
/*
Loading Modules
script.js:14 Do Something Else
script.js:16 Load Data
script.js:18 Promise[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: 455
script.js:20 Process Dat
*/
//here jo data hai wo nhi ayya promise ayya. jo ki baad me fullfield hogi. 
//kabhi bhi aap Promise object ko print  kr k khologe to aap is tarah se us time ka data dekhata hai.
//Promise k bazo "i" bhi likh kr aata hai.

// aap aisa samjho is Data ko anne me time lagra isliye ye return krra Promise.

//     data.then((v) => {
//     console.log(data)
//     console.log("Process Data")
//     console.log("task 2")
// })

//asynchronous javascript : is ka matlab hai ki JavaScript kisi time-consuming task ke complete hone ka wait karte hue baaki code ko execute kar sakta hai.

// jab bhi mein getdata() wala function kisi tarah se ruk bhi diya tab bhi neeche wala function jo console.log hai wo chalta rahe. Basically mein asynchronous javascript ko apne control mein rakhna chatha ho.

//console msg chalega getdata() function bhi chalta rahega backgroubd me or promise return krega or phir us k baad console msg chalega.

//Async/Await: Agar mein chaho jab tak data nahi aata tab tak console msg print nhi hoga using this method.

// 1. async function : means ye function background me chalega.

console.log("async Example :")

// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455) // random value de denge.
//         }, 3500); 
//     })
// }

// console.log("Loading Modules")
// console.log("Do Something Else")
// console.log("Load Data")

// let data = getData()

// console.log(data)

// console.log("Process Data")
// console.log("task 2")

//     data.then((v) => {
//     console.log(data)
//     console.log("Process Data")
//     console.log("task 2")
// })


//await :- JavaScript mein await ek keyword hai jo Promise ke complete hone aur uska result aane tak wait karta hai.
//await ko normally async function ke andar use kiya jata hai.
//see below code :-

console.log("await Example :")

// async function getData() {
//     // Simulate getting data from a server.
//     // (simulate means code ko wait karao 3 /  3.5 sec tak us k baad code run ho jayega.)
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455) // random value de denge.
//         }, 3500);
//     })
// }

// async function getData() {
//     // Simulate getting data from a server.
//    return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455) 
//         }, 3500);   //3.5 second hai wo
//     })
// }

// async function main() {

//     console.log("Loading Modules")
//     console.log("Do Something Else")
//     console.log("Load Data")

//     let data = await getData()

//     console.log(data)

//     console.log("Process Data")
//     console.log("task 2")
// }

// main();


//output:- await Example :
/*
await Example :
 Loading Modules
 Do Something Else
 Load Data
 455
 Process Data
 task 2
*/

console.log("fetch API Example :")


// async function getData() {
//     // Simulate getting data from a server.
//     let x = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//     // .then(response => response.json())
//     // .then(json => console.log(json))
//     let data = await x.json()
//     // let data = await x.text()  //here, string/text me data print hoga.
//     return data

// first line Promise return karega. & .then ki jo line hai wo bhi dobara se promise return karega.
//here, 2 promise hote hai. 
// abb await laga diya means wait kro fect api k data ka. 
//let data = await x.json() krenge to ye json me pass krne me time leta hai.    
// finally console.log(data) krte hai to URL me jo data hoga wo ajyega.
// here, 2 promise hote hai first data lane ka promise , dusra data print krne ka promise.
// here, let data = await x.json() ko let data = await x.text()
// to data text me print hoga. stringe k form me data print hoga.
//most cases we use json not text.
// }

// async function main() {

//     console.log("Loading Modules")
//     console.log("Do Something Else")
//     console.log("Load Data")

//     let data = await getData()

//     console.log(data)

//     console.log("Process Data")
//     console.log("task 2")
// }

// main();




console.log("fetch API Post Request :")
//aap fetch api se post request maar sakte ho.


async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await x.json()
    return data
}

async function main() {

    console.log("Loading Modules")
    console.log("Do Something Else")
    console.log("Load Data")

    let data = await getData()

    console.log(data)

    console.log("Process Data")
    console.log("task 2")
}

main();

//output:-
/*
Loading Modules
Do Something Else
Load Data

{
  title: "foo",
  body: "bar",
  userId: 1,
  id: 101
}

Process Data
task 2
*/

//Fetch ApI Code Expalin :
/*
### Code mein kya ho raha hai?

1. `async function getData()` — Ek async function banaya hai, jisme Fetch API use kar rahe hain.

2. `fetch(URL)` — JSONPlaceholder server par request bhej rahe hain.

3. `method: 'POST'` — POST request use ki hai, jiska matlab server par new data send karna hai.

4. `body: JSON.stringify({...})` — Server ko jo data bhejna hai, woh diya hai. Yahan title, body aur userId send kar rahe hain. `JSON.stringify()` object ko JSON string mein convert karta hai.

5. `headers` — Server ko bataya hai ki hum JSON format mein data bhej rahe hain.

6. `let x = await fetch(...)` — Server ke response aane tak wait karta hai aur response ko `x` variable mein store karta hai.

7. `let data = await x.json()` — Server se aaye response ko JSON format se JavaScript object mein convert karta hai.

8. `return data` — Server se mila data return karta hai.

9. `async function main()` — Ek async function banaya hai, jiske andar `await` use kar rahe hain.

10. Starting ke teen `console.log()` execute hote hain aur messages print hote hain.

11. `let data = await getData()` — `getData()` function complete hone tak wait karta hai aur server se mila data `data` variable mein store karta hai.

12. `console.log(data)` — Server ka response print karta hai.

13. `Process Data` aur `task 2` — Data print hone ke baad ye dono messages print hote hain.

*/