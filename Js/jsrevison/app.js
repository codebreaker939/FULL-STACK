//  // for of loop
//  let Name = "aniketrai"
//  let size =0;

//  for (let val of Name){
//     console.log("val: ",val )
//     size++;

//  }
//  console.log("size is ",size)

//  // for in loop

//  let student = {
//     title: "aniket",
//     age: 29,
//     gender: "male",
//  };

//  for(let key in student){
//     console.log("key=",key, " values=", student[key]);
//  }
 

// all eveno from 0 to 100

// for (let i=0; i<=100;i++){
//     if(i%2==0){
//          console.log(i); 
//     }
   
// }

// game

// let gameNum =25;
// let usrNum = prompt("enter your number")

// while(usrNum != gameNum){
//      usrNum = prompt("wrng again enter your number");
// }
// console.log ("entred right number");


// practice 

// let usr = prompt("enter name for user name")

// let usrNAme ="user name is :@"+usr+usr.length
// console.log(usrNAme);

// practice

// let old = [ 240,454,456,865,233]


// for (let i=0;i<old.length;i++){
//    let  offer = old[i]/10;
//     old[i]-= offer;

// }
// console.log(old)


// function my(a, b) {
//     console.log("hello world");
//     console.log("bye world");
// }

// // arrow function
// const my = (a, b) => {
//   console.log(a + b);
// };


// practice



// function countvowl(str){
//     let count =0;
//     for(const char of str ){
//         if ( char === 'a' || char ==='e ' || char ==='i'|| char==='o' || char ==='o' ) {
//             count++;
//         }
//     }
//     console.log(count);
// };


// const countvow =(str)=> {
//   let count = 0;
//    for(const char of str ){
//         if ( char === 'a' || char ==='e ' || char ==='i'|| char==='o' || char ==='o' ) {
//               count++;
//           }
// }
//     return count;
// }

// let arr = [2,3,4,5]
// let sq = (val) =>{
//     console.log(val * val);
// }

// arr.forEach(sq);
// arr.forEach((val) => {
//     console.log(val*val);
// });



// const student = {
//      name:"aniket",
//      mks:99,
//      printmks : function(){
//         console.log("mks=",this.mks)
//      }
// }

// object and classes


// const emp = {
//     calcTax(salary) {
//         console.log("hi tax is 10%", salary/10);
//     },
// };

// const aniket = {
//     salary :50000,
// };

// aniket.__proto__ = emp


// inheritance of class 

// class a {
//     hello(){
//         console.log("hello");
//     }
// }

// class b extends a {
//     bye(){
//         console.log("bye");
//     }
//     hello(){
//         console.log("hiiii")
//     }
// }

// let c = new b();

// callback and callback hell

// function getData (dataid , nxtdata) {
//     setTimeout(()=>{
//         console.log("data ", dataid);
//         if(nxtdata){
//             nxtdata();
//         }
//     },2000);
// }

// getData(1,()=>{
//     getData(2,()=>{
//         getData(300,()=>{
//             getData(400,()=>{
//                 getData(500);
//             })
//         });
//     });
// });



// promises with resolve
// function getData (dataid , nxtdata) {
//     return new Promise ((resolve , reject) =>{
//          setTimeout(()=>{
//         console.log("data ", dataid);
//         resolve("done");
//         if(nxtdata){
//             nxtdata();
//         }
//     },5000);
//     })
// }

// promises with reject

// function getData(dataid, nxtdata) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//      // console.log("data ", dataid);
//       reject("log missing")
//       if (nxtdata) {
//         nxtdata();
//       }
//     }, 5000);
//   });
// }