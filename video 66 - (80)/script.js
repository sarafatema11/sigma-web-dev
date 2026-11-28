console.log("Class & object & oop")

let obj = {
    a: 1,
    b: "Harry"
}
console.log(obj)
// output:- 
/* 

{a: 1, b: 'Harry'}
a : 1
b : "Harry"
[[Prototype]] : Object

//here, prototype :- is k under is k khuch functions hai. jo ki call kiye jaa sakte hai.  jo ki is k aap ne nhi hai. is mein additionally diye gye hai. 

*/

// let animal = {
//     eats : true
// };

// let rabbit = {
//     jump : true
// };

// rabbit.__proto__ = animal; 
// sets rabbit._[[prototype]] = animal 
// proto me underscore do baar kro _ _ aisa gap maat do tab hi run hoga.
// prototype:- khuch additinal property hai object ki. object ki apni property hoti hai but prototype ki bhi apni properties hoti hai.
//ye jo prototype hota hai wo additional property add krne me help krta hai.

console.log("Class")

// constructure :- ye hamesha run krega mein jab bhi ek object banaoga.

class Animal {
    constructor(name) {
        this.name = name // this is a keyword        
        console.log("object is created...")
    }

    eats() {
        console.log("Kha raha hai")
    }

    jumps() {
        console.log("Khood raha hai")
    }
}

// output:- Animal {}
// but yaha pr sirf animal object ko create krna enough nhi hai hum chaiye ki animal k under khuch properties bhi set hojaye.
// using constructor we can pass somethings etc.
// this is a keyword & this is a way for us to create properties in object.
//output:-Animal {name: 'Bunny'}
// a.name kre to 'Bunny' aata istarah se hum bhot sari property set kr sakte class ki.


// if we want to create another class like ex: lion.
// yaha pr 2 way hai class animal ko lion class me add krne k 
// 1. firstly hum Class Animal k under jo code hai constructor eats() or jumps() hai wo hum copy paste kr de ya. 
// 2. second hum use krege " extends " keyword  is se automatically wo sari cheeze ajayegi jo ki animal mein hai.

class Lion extends Animal {
    constructor(name) {
        super(name)
        // this.name = name        
        console.log("object is created and he is a lion...")
        // error agaya yaha pr abb 
    }
    eats() {
        super.eats() // yaha pr mein super class k eats ko run kroga.
        console.log("Kha raha hoon roar")
    }
}


let a = new Animal("Bunny");
console.log(a)

let l = new Lion("shera")
console.log(l)
// output:-

/*  Lion {name: 'shera'}
name : "shera"
[[Prototype]]: Animal
*/

// aap dekh sakte ho javascript k under jo inheritence hoti hai wo ho gyi hai using prototype. 

// abb hum lion k under ka constructor change krenge. for ex:  console.log("object is created and he is a lion...") like this but ye krne se error arra 

// Error :-  Must call super constructor in derived class before accessing 'this' or returning from derived constructor at new Lion.

// ye bol raha hai aap ne new class banai lion name se us me Animal class extend kri but aap ko abb Animal ka constructor ko call krna hoga using super keyword.

// jab mein super likhoga to Animal ka constructor hai wo chal jayega. or us k baad hi mein this.name = name set kr ssakte hai agr ye add nhi bhi kre lion class me to bhi chalega bcz Animal class me hai bol k.

// super(name) aisa likho tab bhi name show hoga warna undefined ayega.

// lion class me hum ne eats function likh diya :-  
//  console.log("Kha raha hoon roar")
// abb hum l.eats kre to ouput:- Kha raha hoon roar but a.eats kro to output:- Kha raha hoon ayega bcz hum ne method overriding krdi hai.

// is ko stop krne k liye hum super.eats() likhege. yaha pr mein super class k eats ko run kroga.
// output:- agra hum l.eats() likha to abb 2 bhi ajayega see below:-
/*
l.eats()
 Kha raha hai
 Kha raha hoon roar
*/









console.log("Quiz Question from js notes");

// quiz question:- create a class user and create a few  methods along with  a constructor

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     showName() {
//         console.log("Name:", this.name);
//     }

//     showAge() {
//         console.log("Age:", this.age);
//     }

//     greet() {
//         console.log("Hello " + this.name);
//     }
// }

// let user1 = new User("Harry", 20);

// user1.showName();
// user1.showAge();
// user1.greet();

// output:-

/*
Name: Harry
Age: 20
Hello Harry
*/