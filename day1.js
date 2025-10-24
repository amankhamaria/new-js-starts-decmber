// //   const ismohanpresent = false;
// //   if (ismohanpresent == true) {

// //     console.log("present");
// //   }
// //     else{
// //     console.log("rong");
// //   }

// // =========dushra code ================

//     <h1>JavaScript Practice Day 01</h1>

//       console.log("Hi From JS");

//       /*   var fname = "Ankesh";
//                console.log(fname);
//       */

//       // Let's build something Amazing....

//       var myValue = 12;
//       const myValueInGm = myValue * 1000;

//       console.log(myValueInGm + " gm");

//       const humanTempInCelc = 37;

//       console.log((humanTempInCelc * 9) / 5 + 32);

//       const isMohanPresent = false;

//       // Only If Conditional Statment

//       // if (isMohanPresent == true) {
//       //   console.log("Mohan Will get 100 Rs");
//       // }

//       if (isMohanPresent == true) {
//         console.log("Mohan Will get 100 Rs");
//       } else {
//         console.log("Papa is waiting for you");
//       }

//       // ----------------------

//       const obtainedMarks = 500;
//       const totalMarks = 600;

//       const percentag = (obtainedMarks / totalMarks) * 100;

//       console.log(percentag);

//       if (percentag >= 75) {
//         console.log("New Bike is For you!!");
//       } else {
//         console.log("Bhai ka Cycle is For you!!");
//       }
//       // Ternary Operators
//       percentag >= 75
//         ? console.log("New Bike is For you!!")
//         : console.log("Bhai ka Cycle is For you!!");

//       // -------------
//       if (percentag >= 90) {
//         console.log("New Bike is For you!!");
//       } else if (percentag >= 70) {
//         console.log("New Scooty is For you!!");
//       } else {
//         console.log("Thela is For you!!");
//       }

// -----------------------------
// const num =34;
// if(num>=33){
//   console.log("is pass");
// }else{
//   console.log("is fail");
// }

// ============================

// let sum = 0;
// for (let num = 1; num <= 10; num++) {
//   sum = sum + num;
// }
// console.log(sum);

// ======================

//  for (let num = 1; num <= 50; num++) {
//   let isPrime = true;

//   if (num < 2) isPrime = false;

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(num);
//   }
// }

// ==================================

let str = "deepak";

for (let i = str.length - 1; i >= 0; i = i - 1) {
  console.log(str[i]);
}
