console.log("Call back function");

console.log("harry is a hacker")
console.log("Rohan is a hecker")

setTimeout (()=>{
    console.log("I am inside settimeout")
}, 0)

//ye bolra iska console msg 2 sec k baad execute kr dena. but javascript k asynchronous nature ki wajah se is k neeche ka console msg phele run hoga then ye 2 sec wala msg prin hoga run hoga.
//puri script run krne k baad settimeout msg run hoga.
//2000 is 2 sec here, & 0 sec k baad bhi run kroge to last me hi print hoga. bcz phele script print hoga then jo sec me settimeout wala msg print hoga.

setTimeout (()=>{
    console.log("I am inside settimeout 2")
}, 0)

//phele script k console msg print hoge then settimeout ka msg then ye settimeout 2 print hoga last mein.

console.log("The End")



const fn = () => {
    console.log("Nothing")
}

const callback = (arg, fn) => {
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Harry", fn)
  document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

//ye link = prismjs cdn website se liye loadscript me ki link .
//Load hone ke baad execute hone wala event handler.
//reload kro then see output:- console screen pr harry print hogya.
//jaisi hi script load ho jayegi Harry print hoga.