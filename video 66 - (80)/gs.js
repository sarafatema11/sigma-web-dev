console.log("Getters & Setters in js");

// code copy from code with harry folder video 80 in gs.js file. 
class User {

    constructor(name) {  // is k naam ko set krega. 
      // invokes the setter
      this.name = name; // means this.name naam se property hai ussi naam se neeche function bana diya .
    } 
  
    get name() { // 
      return this._name; 
    }
  
    set name(value) {
      if (value.length < 4) {
        // alert("Name is too short."); 
        console.log("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  
  let user = new User("John");
//   alert(user.name); // John 
// alert ki jagah clog use krenge for better result undersatnding.
  console.log(user.name); // John
  
//   user = new User("");  // Name is too short.
  user.name = "Harry" // Name is too short.
  console.log(user.name)
  


