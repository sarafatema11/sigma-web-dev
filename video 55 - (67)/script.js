console.log("Hello World")


document.body.firstElementChild
//means phela aisa child jo ki eleement ho.

//ouput:- 
/*
<div class="container">
        <!-- container k baad ya div k baad jo space hai is called text node. -->
        <div class="box">Box1</div>
        <div class="box">Box2</div>
        <div class="box">Box3</div>
        <div class="box">Box4</div>
        <div class="box">Box5</div>
    </div>
    */

document.body.firstElementChild.childNodes
//child nodes means jis me multiple nodes honge text nodes, comment nodes, Element nodes.

///ouput:-
//NodeList(13) [text, comment, text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

document.body.firstElementChild.children
//yee likhne mujhe sirf is k under k html Element melege.

//output:-
//HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]

document.body.firstElementChild.children[0]
//hum numbers laga kr 0,1,2 etc se Elements hai 1,2,3 etc wo access kre sakte hai.
//index = 0 se start hota. index zero--0 box 1 hai..

//output:- box1
//<div class=​"box">​Box1​</div>


//question:- print typeof docummnet and typeof window in the cionnsole & see what it print

//answer:- 
/*
console.log(typeof document)
console.log(typeof window)

output:- object
         object


 explain:-
 1. typeof document :
- document browser ke current webpage ko represent karta hai.
- Ye DOM ka entry point hai.
- Iska type object hota hai.

2. typeof window :
- window browser window ko represent karta hai.
- Ye JavaScript ka global object hai.
- Iska type bhi object hota hai.
*/

