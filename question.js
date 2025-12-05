// ================== 1 se 10 tak ginti print karao ====================

// let num = 1;

// for (num; num <= 10; num++) {
//   console.log(num);
// }

// ========== 1 से 100 तक के सभी even numbers (सम संख्या) प्रिंट करें। ====================

// for (let num = 1; num <= 100; num++) {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// }

// ========  1 से 50 तक के सभी odd numbers (विषम संख्या) प्रिंट करें। ===============

// for (let num = 1; num <= 100; num++) {
//   if (num % 3 === 0) {
//     console.log(num);
//   }
// }

// ========== यूज़र से एक नंबर लें और 1 से उस नंबर तक के सभी नंबर प्रिंट करें।  ================

// let num = 20;
// for (let i = 1; i <= num; i++) {
//   console.log(i);
// }

//  ========== एक प्रोग्राम बनाइए जो 1 से 10 तक का sum (योग) निकाले। ================

// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   sum = sum + i;
// }

// console.log(sum);

// ======== एक प्रोग्राम बनाइए जो 1 से n तक के even numbers का sum निकाले। =================

// let n = 50;

// n = Number(n);

// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     sum = sum + i;
//   }
// }

// console.log(sum);

// ========== 7. एक प्रोग्राम बनाइए जो 1 से n तक के odd numbers का sum निकाले। =============

// let n = 50;

// n = Number(n);

// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   if (i % 2 !== 0) {
//     sum = sum + i;
//   }
// }

// console.log(sum);

// ======= . एक प्रोग्राम लिखिए जो 5 का table (पहाड़ा) प्रिंट करे। =================

// let num = 5;
// for (let i = 1; i <= 10; i++) {
//   console.log(5 * i);
// }

// ============ यूज़र से एक नंबर लें और उसका table प्रिंट करें। =======

// let num = 15;

// for (let i = 1; i <= 10; i++) {
//   console.log (num * i);
// }

// ============ एक प्रोग्राम बनाइए जो 10 से 1 तक reverse counting दिखाए।  ==================
// let num = 10;
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

//  ========= एक प्रोग्राम लिखिए जो 1 से 10 तक के नंबरों का square दिखाए। =======

//  for (let i = 1; i <= 5; i++) {
//   console.log(i + i * i);
// }

//================= new code questions array js ==============================

// const name = ["ram", "shyam", "deepak", "mohan", "rohan"];
// console.log(name);
// name[2] = "akash";
// console.log(name);
// for (let i = 0; i < name.lenth; i = i + 1) {
//   console.log(name[i]);
// }
// ------------------array ka qustion hai dono------------------------
// let name = ["deepak", "aman", "veeru"];
// console.log(name);

// for (let i = 0; i < name.length; i = i + 1) {
//   name[i] = name[i] + " maurya";
//   console.log(name);
// }

// =========================================
// name.push("Amaresh");
// console.log(name);
// // ====================
// name.pop();
// console.log(name);
// // ===========================
// name[1] = "arnav";
// console.log(name);
// // ==============================
// name.shift();
// console.log(name);
// // =========================
// name.unshift("ankur");
// console.log(name);
// // ===========================
// name[name.length] = "shivam";
// console.log(name);
// // =========================
// name[0] = name[0] + " yadav";
// console.log(name);

// -------------============================================================
// const studentsmony = [12, 20, 2, 60, 600, 12, 30];
// for (let i = 0; i < studentsmony.length; i = i + 1) {
//   studentsmony[i] = studentsmony[i] + 2 * studentsmony[i];
// }
// console.log(studentsmony);
//-------------------==========koi bhi num kahi par aaye or kitni bhi bar aaye===============================================
// const dares = ["dance", "sing a song", "poem", "comedy", "teaching", "acting"];
// const randomnum = Math.floor(Math.random() * dares.length);
// console.log(randomnum);
