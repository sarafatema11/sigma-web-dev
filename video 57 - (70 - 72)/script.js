console.log("Ex :12 Assign Random bg colour & text colour");


//----my Answer-----

let boxes1 = document.querySelectorAll("#container .box")

function randomColor() {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`;
}

boxes1.forEach((box) => {
    box.style.color = randomColor();
    box.style.backgroundColor = randomColor();
});

//reload kro jab bhi page refresh / reload karoge tab bg or text color boxes ka change hoga.






// ---------sir answer-----

console.log("Script.js initializing");

//  let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector("#sircontainer").children
console.log(boxes)

function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);

    return `rgb(${val1}, ${val2}, ${val3})`
}

Array.from(boxes).forEach(e => {

    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();

})


//  explain 

/*
╔══════════════════════════════════════════════════════╗
║             MY ANSWER vs SIR'S ANSWER                ║
╠══════════════════════════╦═══════════════════════════╣
║       MY ANSWER          ║       SIR'S ANSWER        ║
╠══════════════════════════╬═══════════════════════════╣
║ querySelectorAll()       ║ querySelector()           ║
╠══════════════════════════╬═══════════════════════════╣
║ Directly .box select     ║ Container .children       ║
╠══════════════════════════╬═══════════════════════════╣
║ forEach()                ║ Array.from() + forEach()  ║
╠══════════════════════════╬═══════════════════════════╣
║ Math.floor()             ║ Math.ceil()               ║
╠══════════════════════════╬═══════════════════════════╣
║ randomColor()            ║ getRandomColor()          ║
╚══════════════════════════╩═══════════════════════════╝


1. Math.floor()
Meaning: Decimal number ko hamesha neeche (lower) wale integer mein convert karta hai.
ex:-
Math.floor(10.9)  // 10
Math.floor(10.5)  // 10

Yaani decimal ke baad kitna bhi number ho, Math.floor() decimal hata kar lower integer deta hai.






2. Math.ceil()
Meaning: Decimal number ko hamesha upar (higher) wale integer mein convert karta hai.
ex:-
Math.ceil(10.9)  // 11
Math.ceil(15.2)  // 16

Yaani decimal ke baad kuch bhi ho, Math.ceil() next higher integer deta hai.

*/


// ------Hexa color--

let hexBoxes = document.querySelectorAll("#hexacontainer .box")

function randomHexColor() {
    let hex = Math.floor(Math.random() * 16777216).toString(16)

    return `#${hex.padStart(6, "0")}`
}

// hexBoxes.forEach((box) => {

//     box.style.color = randomHexColor()
//     box.style.backgroundColor = randomHexColor()

// })   --//output:- only hex color text & bg ka dega.

hexBoxes.forEach((box) => {
    let bgColor = randomHexColor();
    let textColor = randomHexColor();

    box.style.backgroundColor = bgColor;
    box.style.color = textColor;

    console.log("Background color HEX:", bgColor);
    console.log("Text color HEX:", textColor);
})

//ye hexa color k sath text or bg color k sath ye console me hex code bhi dehga konsa code genrate hor bol k.