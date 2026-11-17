console.log("DOM- Events & other dom-properties : ")

console.log(document.querySelector(".box"));
//ouput:-  div.box with Hey I am a box
//phela box jo hai usko select krlo conntainer k under jo first box hai wo jayega.


//1.innerHtml :
console.log(document.querySelector(".box").innerHTML
);
//output:- .box k under jo html ya text hai wo mil jayega.
//Hey i am a box.

console.log(document.querySelector(".container").innerHTML
)
//ouput:- .container k under jo html hai wo mil jayega. 
//.box with Hey I am a box.


/* 2.inner text method :- 
1. kabhi kisi element k under ka text pata lagane k liye is ka use krte hai.
*/

console.log(document.querySelector(".box").innerText
);
//output:- Hey I am a box
// .box k under jo text hai inner text dekhata hai.

console.log(document.querySelector(".container").innerText
);
//ouput:- Hey I am a box \n Hey I am a box
// container k undder jo bhi text hoga wo show hoga.

//3. outer html :
console.log(document.querySelector(".container").outerHTML
)
/*output:- <div class="container">
        <div class="box"> Hey I am a box </div>
        <div class="box"> Hey I am a box </div>
    </div>
    container k sath sath us k under k elemnts bhi melege
    */

//4. Tag name properties :
console.log(document.querySelector(".container").tagName)
//output:- DIV

//5. node name:-
console.log(document.querySelector(".container").nodeName)
//output:- DIV

//6.text content :
console.log(document.querySelector(".container").textContent)
/*output:-   Hey I am a box
             Hey I am a box
             is k under ka text content mil jayega. 
*/

//7. hidden : 
console.log(document.querySelector(".container").hidden)
//output:- false

// console.log(document.querySelector(".container").hidden = true)
//output:- true 
//jo mera container hai us k under hidden laga dega. ye krne se elements hide ho jayegi.

//8. change innerHtml : using this kisi bhi element ki inner html change kr sakte hai.
console.log(document.querySelector(".box").innerHTML = "Hey i am harry")
//output:- hey i am harry 
// change hogya first elemnts see 


// Attribbutes :
// 1. .hasattribut: 
console.log(document.querySelector(".box").hasAttribute("style"))
// output:- true
//false tab ayega jab style attribute nhi hoga element me .

//2.getAttribute :
console.log(document.querySelector(".box").getAttribute("style"))
//output:- display: flex;

//3.setattribute
console.log(document.querySelector(".box").setAttribute("style", "display: inline"))
//output:- display: inline.

//4.attributes :
console.log(document.querySelector(".box").attributes)
//output:- NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}
//jitne bhi attribbute hai wo sab mil jayege. / get the collection of all attributes.

//5.removeatribute:
console.log(document.querySelector(".box").removeAttribute("style"))
//output: go on webpage inspect see elements me conntainer k box me jo hum ne style diya tha wo remove hogya.


//data attributes :
console.log(document.querySelector(".box").dataset);
//output:- DOMStringMap {createdby: 'harry'}

//node remove :
// console.log(document.querySelector(".box").remove())
// .box ka first element ko remove kr dega . 

//classlist : list dega.
console.log(document.querySelector(".container").classList)
//output:- DOMTokenList(3) ['container', 'red', 'bg-green', value: 'container red bg-green']


//class name: class attribute k under jo class ki value hogi wo de dega.
console.log(document.querySelector(".container").className)
//output:- container red bg-green


// class list methods :

//1. class list - add  method : 
console.log(document.querySelector(".container").classList.add("harry"))
//output:- harry container class me add hogya.


//2. class list - remove method : 
console.log(document.querySelector(".container").classList.remove("harry"))
//output:- container me harry remove ho jayega.

console.log(document.querySelector(".container").classList.remove("red"))
//red bhi remove hogya conntainer me se.

//Multiple times is ko print kre to koi benefit nhi ye class ek time hi ayega.
console.log(document.querySelector(".container").classList.add("red"))
//red add hogya conntainer me. 

//3. class list -  toggle method :

// toggle means :- basically open hai to close, close hai to  open. krdo is called toggle.

console.log(document.querySelector(".container").classList.toggle("red"))
//false style remove krdega. phhir se try krenge to style ajayega.

console.log(document.querySelector(".container").classList.toggle("red"))
//style wapas agaya.
//js ki ek line ka use kr k mein jab chaho css add or remove kr sakta ho.

