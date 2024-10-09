// 1-
// let a=[1,2,3]
// a.length=0
// console.log(a);//0

// 2-call,apply and bind

// let name="x";
// function say(title="ml"){
// return title +""+this.name
// }

// let person={
//     name:"rohit",
//     age:23
// }

// const res=say.bind(person)
// console.log(res());

// 3 closer
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i); //1,2,3,4,5
//   });
//   console.log(i); //1,2,3,4,5
// }

// 4-

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i); //5,5,5,5,5
//   });
//   console.log(i); //1,2,3,4,5
// }

// 5-

// let arr = [];

// for (var i = 0; i < 3; i++) {
//   arr[i] = () => {
//     console.log("my value", i); /// 3,3,3 becase of callback function with var key word
//     //  beacse var is global scop
//   };
// }
// arr[0]();
// arr[1]();
// arr[2]();

// 6-

// function outer() {
//   var x = 10;

//   function inner() {
//     console.log(x);
//   }

//   return inner;
// }

// var innerFunc = outer();

// innerFunc(); //10

// 7-

// function outer() {
//   var x = 10;

//   function inner() {
//     console.log(x);
//   }

//   x = 20;

//   return inner;
// }

// var innerFunc = outer();

// innerFunc();//20

// 8-

// function outer() {
//   var x = 10;

//   function inner() {
//     var y = 5;

//     console.log(x + y);
//   }

//   return inner;
// }

// var innerFunc = outer(); //15

// innerFunc();

// 9-
// function outer() {
//   var x = 10;

//   function inner() {
//     var y = 5;

//     console.log(x + y);
//   }

//   var x = 20;

//   return inner;
// }

// var innerFunc = outer();

// innerFunc();
// innerFunc();
// The output will be 25. This is because the inner function has access to the x variable
//  declared in the outer function's scope, which is reassigned the value of 20 before
//   the inner function is returned. When innerFunc is called,
//  it logs the sum of the current value of x and y, which is 25.

// 10-

// function outer() {
//   var x = 10;

//   function inner() {
//     var y = 5;

//     console.log(x + y);

//     x = 20;
//   }

//   return inner;
// }

// var innerFunc = outer();

// innerFunc();

// innerFunc();
// The output will be 15 and 25. This is because the inner function has
//  access to the x variable declared in the outer function's
//   scope, which is initially assigned the value of 10.
//   When innerFunc is called for the first time, it logs the sum of x and y, which is 15, and
//    then reassigns the value of x to 20. When innerFunc is called for the second time,
// it logs the sum of the new value of x and y, which is 25.

// 11-const result=multiple(2)(3)(4)

// let multiple = (a) => {
//   return (b) => {
//     return (c) => {
//       return a * b * c;
//     };
//   };
// };
// const result=multiple(2)(3)(4)
// console.log(result);

// 12-find substring

// const str="bhai batai ye kya hai"
// const sub='ai'

// let exis=str.includes(sub)
// console.log(exis); // sustring is avialable

// let where=str.indexOf(sub)
// console.log(where); // where avilable

// let how=str.split(sub).length-1

// console.log(how);

// 13-convert arry to object

// let arr = ["a", "b", "c", "d"];
// let obj = arr.reduce((acc, it,i) => ({ ...acc, [it]: it }), {});
// console.log(obj);

// reverse
// let arrs=Object.values(obj)
// console.log(arrs);

// 14-

// <VideoColorSpace></VideoColorSpace> src={Video.title}></VideoColorSpace>
// <VideoColorSpace> src={Video.title}></VideoColorSpace> //to multiple copy shit +alt +topbar
// <VideoColorSpace> src={Video.title}></VideoColorSpace>
// <VideoColorSpace> src={Video.title}></VideoColorSpace>
// <VideoColorSpace> src={Video.title}></VideoColorSpace>
// <VideoColorSpace> src={Video.title}></VideoColorSpace>
// <VideoColorSpace> src={Video.title}></VideoColorSpace>
// <VideoColorSpace> src={Video.title}></VideoColorSpace>
// <VideoColorSpace> src={Video.title}></VideoColorSpace>
// <VideoColorSpace> src={Video.title}></VideoColorSpace>
// <VideoColorSpace>></VideoColorSpace>// to move top and butto used alt+top
// <VideoColorSpace> src={Video.title}></VideoColorSpace>
// <VideoColorSpace> src={Video.title}></VideoColorSpace>
// <VideoColorSpace> src={Video.title}></VideoColorSpace>
// <VideoColorSpace> src={Video.title}></VideoColorSpace>
// <VideoColorSpace> src={Video.title}></VideoColorSpace>
// <VideoColorSpace> src={Video.title}></VideoColorSpace>
// <VideoColorSpace> src={Video.title}></VideoColorSpace>
// <VideoColorSpace> src={Video.title}></VideoColorSpace>  //to multiple edit alt +shift +mouse croser

// 15-  call and bind

// let lang={name:"angular"}
// function getlab(ver){
//   return `${this.name} version ${ver}`
// }
// console.log(getlab.call(lang,18));
// console.log(getlab.bind(lang,18));

// 16-
// async function getlab() {
//   return "imoji";
// }

// const lion =  getlab();
// console.log(lion === "imoji"); //false becase when function become asych return promise
//to get true we need to add await before call function

// 17-
// var name=2024;
// console.log( name+1);

// 18-check vowel

// let str = "hay js! you r amazing";
// let vowel = ["a", "e", "i", "o", "u"];

// let countvowel = (data) => {
//   let count = 0;
//   data
//     .toLowerCase()
//     .split("")
//     .forEach((ch) => {
//       vowel.includes(ch) && count++
//     });
//   return count;
// };
// console.log(count);
// 19-
// console.log([1,2,3]+true);

// 20-
// console.log(false ==[]); //true beacse false=0 and empty array is "" and ""=0
// console.log(false== ![]); //true []= is true

// 21-
// let arr=[1,2,3]
// let result=arr +""
// console.log(result);

// 22-
// let numbers=[1,2,3,4,NaN,undefined]
// console.log(numbers.indexOf(NaN));
// console.log(numbers.findIndex(Number.isNaN));

// 23-
// let a =null;
// let b=5;
// let c="5";
// console.log(a?? b===c);

// 24-
// function foo(){
//     return {
//         name:"jone"
//     }
// }
// function bar(){
//     return {
//         name:"Doe"
//     }
// }
// console.log(foo());
// console.log(bar());

// 25-

// let person = { name: "json" };

// const members = [person];
// person = null;

// console.log(members[0]);

// 26-
// let clothes=["jaket","t-shirtr"]
// clothes.length=0
// console.log(clothes[0]);

// 27-
// function mystery(x){
//     return function(y){
//         return x+y
//     }
// }
// const addFive=mystery(5)
// console.log(addFive(10));
// console.log(mystery(5)(10));

// 28-
// function sum(a=5,b=7){
//     console.log(a+b);
    
// }
// sum(null,20)

// 29-

// let x=[..."baby"]
// let vb={..."baby"}
// console.log(x);
// console.log(vb);

// 30
// const person={
//     name:"alice",
//     age:25
// }
// const greeting=`hello , ${person}`
// console.log(greeting);

// 31-
// const obj={
//     a:"one",
//     b:"two",
//     a:"three"
// }
// console.log(obj);

// 32-

// const students=[
//    { name:"sagar",score:45},
//    { name:"sipu",score:35},
//    { name:"rohit",score:23},
//    { name:"dhoni",score:29},
//    { name:"fbhfghf",score:78},
//    { name:"virat",score:4},

// ]
// const result=processStudentData(students)
// console.log(result);

// 33-
// let a=10;
// let b=++a
// console.log(b);

// 34-
// const box={
//     x:5,y:10
// }
// Object.freeze(box)
// box.x=100
// console.log(box);

// 35-
// function sumFrom1To100(){
//     let sum=0;
//     for(let i=0;i<=100;i++){
       
        
//         sum+=i
//     }
//     return sum
// }
// console.log("the sum of numbers from 1 to 100 is:"+sumFrom1To100());

// 36-

// function printSequenece(){
//     let result=[]
//     for(let i=10;i<=50;i+=10){
//         result.push(i)
//     }
//     for(let i=5;i>=1;i--){
//         result.push('0'+i)
//     }
//     console.log(result.join(','));
    
// }
// printSequenece()

// 37-
// const obj={
//     name:"sagar",
//     greet:function(){
//         setTimeout(()=>{
//             console.log(this.name);
            
//         },0)
//     }
// }
// obj.greet()

// 38-

function capitalizeFirstLetter(str){
    let words=str.split(" ")
    return words.reduce((acc,curr)=>{
        let res=curr.charAt(0).toUpperCase()+curr.slice(1)
        return acc+' '+res
    },'')
}
let input=`How many element you want to input`
console.log(capitalizeFirstLetter(input));






