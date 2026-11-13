console.log("mfr --- map, filter, reduce methods in array");

let Arr = [1, 13, 5, 7, 11];


//methods 1st for square numbers.
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = Arr[index];
//     newArr.push(element**2)
// }


//second method for square numbers.
///map 
let newArr = Arr.map((e, index, array)=>{
    return e**2    //same output ayega iska bhi.
})

console.log(newArr);   

//         output:-     (5) [1, 169, 25, 49, 121] 
//square of this numbbers  [1, 13,   5, 7,   11]
//here sab ka square agaya. 

//filter
const greaterThanSeven = (e)=>{   //function hai gretherthanseven
    if(e>7){
        return true
    }
    return false
}
console.log(Arr.filter(greaterThanSeven))

//output:- (2) [13, 11]

//reduce

let arr2 = [1,2,3,4,5,6]

const red = (a, b)=>{
  return a+b  //output:- 21, sab numbers ko plus kr dega ye.
//   return a*b     //output:- 720

}
console.log(arr2.reduce(red))  

//Array fromm
let str = "Harry"
let arr1 = Array.from(str);
console.log(arr1);

//outpiut:- (5) ['H', 'a', 'r', 'r', 'y']