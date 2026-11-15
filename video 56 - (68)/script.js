console.log("Harry")

let boxes = document.getElementsByClassName("box")
console.log(boxes)

//ouput:- HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]

// boxes[2].style.backgroundColor = "red"
//ouput:- box 3 jis ka index 2 hai uska background colour red ho jayega.
// You selected one individual box (third box) and changed its background colour to red.  

document.getElementById("redbox").style.backgroundColor = "red"
//output:- box 2.5 bg is red.

document.querySelector(".box").style.backgroundColor = "green";
//output:- bg is green

console.log(document.querySelectorAll(".box"))
//output:- html collection return krtahai.

// document.querySelectorAll(".box").style.backgroundColor="pink";
//ye aap nhi kr sakte is se error ayega aap html ko style nhi kr sakte ho aap element array string insab ko ko style kr sakte ho but html ko nhi kr sakte hai.
//output:- error.


// to change bg color & apply style properties we use loops example see below code.

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "pink"
})
//output:- all boxes bg color is pink.


console.log(document.getElementsByTagName("div"))
//all div jitne bhi div hai sab de deha yaha tak ki parent div jo container hai wo bhi.

console.log(document.getElementsByName("jogi"))
//search element by name attribute 
//output:- NodeList(2) [div.box, div.box]


// matches() method : to check if elemennt match the given css selector.
let e = document.getElementsByTagName("div");
console.log(e[0].matches("#redbox"));   //output:- false
console.log(e[1].matches("#redbox"));   //         false
console.log(e[4].matches("#redbox"));   //         true

//closest() : matching element ka poora HTML element return karta hai.
//Agar matching element nahi mila, toh null return karega.
let a = document.getElementsByTagName("div");
console.log(e[4].closest(".container"));

//output:- Matlab usne poora container <div> element return kiya, jiske andar baaki div elements hain.


//contains():
let z = document.getElementsByTagName("div");
console.log(e[0].contains(e[4]));  //true
console.log(e[4].contains(e[0]));  //false

// 1.explain why true :
/*
e[0] = container
e[4] = redbox
Redbox, container ke andar hai. Isliye true.


2. Explain why false:
e[4] = redbox
e[0] = container
Container, redbox ke andar nahi hai. Isliye false.
*/

//easy trick to remeber : Parent ke andar child ko check karoge → true.
// Child ke andar parent ko check karoge → false.

