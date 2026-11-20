console.log("Events in DOM")


// Mouse Events :
let button = document.getElementById("btn")

// List of all mouse events :
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.addEventListener("click", () => {
    //ek click pr content change ho jayega.
    // alert("I was Clicked. yayy!!")
    document.querySelector(".box").innerHTML = "<b> Yayy you were clicked </b> Enjoy your click!"
})

button.addEventListener("dblclick", () => {
    //ek click pr nhi double clickkrne pr abb content change ho jayega.

    document.querySelector(".box").innerHTML = "<b> Yayy you were clicked </b> Enjoy your click!"
})

button.addEventListener("mousedown", () => {
    //Jab tum button par click karoge, tab mousedown event bhi execute hoga.
    console.log("Mouse button pressed")
})

button.addEventListener("mouseenter", () => {
    //Jab tum button k pass mouse le kr jaoge to mouse enter execute ho jayega.
    document.querySelector(".box").style.color = "red"
})

button.addEventListener("mouseleave", () => {
    //Jab tum button k pass se mouse pointer le kr jaoge tab mouse leave execute ho jayega. style change ho jayega.
    document.querySelector(".box").style.color = "blue"
})

button.addEventListener("mouseout", () => {
    document.querySelector(".box").style.backgroundColor = "pink"
    // Jab mouse pointer button ke upar hoga, kuch change nahi hoga.
    // Jaise hi mouse pointer button se bahar jayega (mouseout).
    // .box ka background color pink ho jayega.
})

button.addEventListener("contextmenu", () => {
    alert("Dont hack us by Right click Please")
    //  Button par mouse pointer lekar jao.
    // Right-click karo.
    // aler box show hoga.
})

// keyboard events :
document.addEventListener("keydown", (e) => {
    console.log(e, e.key, e.keyCode)
})

document.addEventListener("keyup", (e) => {
    console.log(e.key, e.keyCode)
})

