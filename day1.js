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

// ================= pelindrume code =================

// let str = "hello world";

// for (let i = 0 ; i  < str.length;  i++) {
//   console.log(str[i]);
// }

// ========revers me hai===========

// let str = "hello world";

// for (let i = str.length - 1; i >= 0; i--) {
//   console.log(str[i]);
// }

// ==================== CHEK THE PELINDRORME ====================
// const str  = "malayalam";

// let ismatch = true;

// for (let i = 0; i <=str.length / 2; i = i +1) {
//   console.log(i);

// }

// ========= chech the prime number hai ya nahi =============

//  for (let num = 1; num <= 100; num++) {
//   let isPrime = true;

//   if (num < 2) isPrime = false;

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime)
//    {
//     console.log(num);
//   }
// }

// =============== print each digits of given number =====================

// let num = 1725;
// let str = num.toString();

// for (let i = str.length - 1; i >= 0; i--) {
//   console.log(str[i]);
// }

// =========== print the place value of given value 5271 ==========

// let num = 5271;
// let str = num.toString();
// for(let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// ============== Que 1. Write a JavaScript program to find the sum of digits of a given number.

// let num = 1234;
// let sum = 0;

// while (num > 0) {
//   let digit = num % 10;
//   sum = sum + digit;
//   num = Math.floor(num / 10);
// }

// console.log(sum);

// Que 2. Write a program that takes a string as input and removes all spaces (both between words and at ends).

// let str = "Hello  World from  JS";
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === " ") {
//     count++;
//   }
// }

// console.log("Total spaces:", count);

//===== Que 3. Write a program that counts how many digits are present in a given number.

// let num = 1234567;
// let count = 0;

// for (let n = num; n > 0; n = Math.floor(n / 10)) {
//   count++;
// }

// console.log(count);

//==============  4. Write a JavaScript program that finds the sum of all even digits (0, 2, 4, 6, 8) in a given number.

// let num = 1234567890;
// let sum = 0;

// for (let n = num; n > 0; n = Math.floor(n / 10)) {
//   let digit = n % 10;

//   if (digit % 2 === 0) {
//     sum = sum + digit;
//   }
// }

// console.log(sum);

//==== Que 5. Check if a number is an Armstrong number (e.g., 153 → 1³ + 5³ + 3³ = 153).

// Que 5. Check if a number is an Armstrong number

// let num = 159;
// let sum = 0;
// let temp = num;

// for (let n = temp; n > 0; n = Math.floor(n / 10)) {
//   let digit = n % 10;
//   sum = sum + (digit * digit * digit);
// }

// if (sum === num) {
//   console.log(num + " is an Armstrong number");
// } else {
//   console.log(num + " is not an Armstrong number");
// }

// ============ 21 shidhi hai  ek bar me 3 shidhi chadhna hai or ek shidhi utrana hai que ========

// let totalStairs = 21;
// let current = 0;
// let count = 0;

// for (; current < totalStairs; ) {
//   if (current + 3 >= totalStairs) {
//     current += 3;
//   } else {
//     current += 2;
//   }
//   count++;
// }

// console.log(count);

// ============ 21 shidhi hai  ek bar me 3 shidhi chadhna hai or ek shidhi utrana hai que ========

// let totalshidhi = 21;
// let current = 0;
// let count = 0;

// for (; current < totalshidhi; ) {
//   if (current + 3 >= totalshidhi) {
//   } else {
//     current += 2;
//   }
//   count++;
// }
// console.log(count);

// ========== 2 ka table in function ================

// function tableOfTwo() {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`2 x ${i} = ${2 * i}`);
//   }
// }

// tableOfTwo();

//  ======================

// function power(num, esqure) {
//   let result = 1;

//   for (let i = 1; i <= esqure; i++) {
//     result = result * num;
//   }

//   console.log(`${num}^${esqure} = ${result}`);
// }

// power(2, 4);

// ====================== new starts ==================

// const color = "green";
// if (color == "red") {
//   console.log("stop");
// } else if (color == "yellow") {
//   console.log("ready");
// } else if (color == "green") {
//   console.log("go");
// } else {
//   console.log("no enter");
// }

// --------------------------------

// const time = 12;
// if (time >= 1 && time < 12) {
//   console.log("good morning");
// } else if (time > 12 && time < 16) {
//   console.log("good afternoon");
// } else if (time >= 16 && time < 19) {
//   console.log("goodevening");
// } else {
//   console.log("good night");
// }
// // ----------------1 to 10 tak ginti print------------------------------
// for (let i = 1; i <= 10; i = i + 1) {
//   console.log(i);
// }
// ----------

// for (let i = 2; i <= 20; i = i + 2) {
//   console.log(i * 1);
// }
// --------- for loop
// for (let num = 1; num <= 20; num = num + 1) {
//   const remainder = num % 2;
//   if (remainder === 0) {
//     console.log(num);
//   }
// }

// dddd--------ulta ginati print,-----------
// for (let num = 10; (num = 1); num = num - 1) {
//   console.log(num);
// }

// dddddddddddddd----------
// const hindi = 70;
// const english = 65;
// const computer = 60;
// const math = 55;
// const science = 45;
// const totalmarks = 500;

// const totalobtainedmarks = hindi + english + computer + math + science;
// {
//   console.log("totalobtainedmarks");
// }
// ------------------------------------------------------------------
// const num = 15647;
// let count = 0;
// for (let n = num; n > 0; ) {
//   count = count + 1;
//   n = Math.floor(n / 10);
// }
// console.log(count);
// ---------------------------------------------------------------------
// function multiply(a, b) {
//   let result = 0;
//   for (let i = 1; i <= b; i = i + 1) {
//     result = result + a;
//   }
//   console.log(result);
// }
// multiply(3, 4);

// -------------------=========================================
// const num = 655647;
// let count = 5;

// for (let n = num; n > 0; ) {
//   if (n % 10 == 5) {
//     count = count + 1;
//   }
//   n = Math.floor(n / 10);
// }

// console.log(count);

//================= star prins code =====================

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str += "*";
//   }
//   console.log(str);
// }

// ============== reverse star print ======================

// let n = 5;

// for (let i = n; i >= 1; i--) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str += "*";
//   }
//   console.log(str);
// }

// ============= full star print ==============

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let space = "";
//   let stars = "";

//   for (let s = 1; s <= n - i; s++) {
//     space += " ";
//   }

//   for (let j = 1; j <= 2 * i - 1; j++) {
//     stars += "*";
//   }

//   console.log(space + stars);
// }

// ================== star print in js ==========

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let str = "";
//   for (let j = 1; j <= n; j++) {
//     if (i == 1 || i == n || j == 1 || j == n) {
//       str += "*";
//     } else {
//       str += " ";
//     }
//   }
//   console.log(str);
// }

// ============ star print 2  lower and upper star ==============

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
// }

// for (let i = n - 1; i >= 1; i--) {
//   console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
// }

// ================== star print ==================

// let n = 4;

// // upper
// for (let i = 1; i <= n; i++) {
//   let str = " ".repeat(n - i);

//   for (let j = 1; j <= 2 * i - 1; j++) {
//     if (j == 1 || j == 2 * i - 1) str += "*";
//     else str += " ";
//   }
//   console.log(str);
// }

// // lower
// for (let i = n - 1; i >= 1; i--) {
//   let str = " ".repeat(n - i);

//   for (let j = 1; j <= 2 * i - 1; j++) {
//     if (j == 1 || j == 2 * i - 1) str += "*";
//     else str += " ";
//   }
//   console.log(str);
// }
//================================================

// let name = "Aman";
// const age = 20;
// var city = "Delhi";

//============= if else js questions =================

// let age = 18;

// if (age >= 18) {
//   console.log("Eligible for vote");
// } else {
//   console.log("Not eligible");
// }

//============== while loop question ====

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

//=======================================

let user = { name: "Aman", age: 22 };

for (let key in user) {
  console.log(key, user[key]);
}

// ================================

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
