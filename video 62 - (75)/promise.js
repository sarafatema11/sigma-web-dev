console.log('This is Promises');   //clog snippets use kra hum ne  idhr console.log ajyega.z

// alert('harry');   //alt type krne alert ajayega.

// let prom1 = new Promise((resolve, reject) => {
//   setTimeout (() => {
// console.log("Yes I am done") 
// resolve("harry")
//   }, 3000);
// })


// prom1.then((a)=>{
//     console.log("a")
// })

//output:- 3sec k baad ye do bho msg console screen pr print hoge.

let prom1 = new Promise((resolve, reject) => {
    // let a = Math.random();
    let a = 0.8;
    if (a < 0.5) {
        reject("No random number was not supporting you")
    }
    else {    //else isliye kiya hum ne taki error k baad yes i am done print nhi hona console screen pr.

        setTimeout(() => {
            console.log("Yes I am done")  // 3sec k baad ye do bho msg console screen pr print hoge.
            resolve("Harry")
        }, 3000);
    }
})

// prom1.then((a) => {
//     console.log("a")
// }).catch((err)=>{  
//  // agr aap chathy ho ki error jo hai wo console screen pr print ho msg ki tarah error nhi dekhna to ye .cath use kro. 
//     console.log(err); 
// })


let prom2 = new Promise((resolve, reject) => {
    // let a = Math.random();
    let a = 0.8; //ye line mein add kri bcz mera sir k jaisa output aa hi nhi raha tha.
    if (a < 0.5) {
        reject("No random number was not supporting you 2")
    }
    else {    //else isliye kiya hum ne taki error k baad yes i am done print nhi hona console screen pr.

        setTimeout(() => {
            console.log("Yes I am done 2")  // 3sec k baad ye do bho msg console screen pr print hoge.
            resolve("Harry 2")
        }, 1000);
    }
})

// let p3 = Promise.all([prom1, prom2])
// let p3 = Promise.allSettled([prom1, prom2])
// let p3 = Promise.race([prom1, prom2])
let p3 = Promise.any([prom1, prom2])
p3.then((a) => {
    console.log(a)
}).catch(err => {
    console.log(err)
})

/*
1. all :

2. allSetteled : 
(1).means Settled koi function nahi hai. Ye Promise ki ek condition/state ko describe karta hai.
(2).chaiye resolve ho ya reject ho aap ko dono k reason & value dono mil jayege.
(3).fullfied hua to status value melegi.
(4).reject hua to value ki jagah reason mil jayega.

3.race :
(1). multiple promises mein se jo Promise sabse pehle settle hota hai, uska result return karta hai.
(2). Settle ka matlab:
- Resolve (fulfilled)
- Reject (rejected)
(3). Dono mein se jo pehle hoga, Promise.race() usi ka result dega.

4.any :
(1). multiple promises mein se jo Promise sabse pehle successfully resolve hota hai, uska result return karta hai.
(2). Agar saare Promise reject ho jaayein :
(3). Tab Promise.any() reject hota hai aur AggregateError deta hai.

5. resolve :

6. reject :

*/
