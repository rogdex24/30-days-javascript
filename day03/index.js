//================================== Activity 1 ==================================
console.log("\n>activity 1");
const num1 = -3;
if (num1 >= 0) {
  console.log("positive");
} else {
  console.log("negative");
}
let age = 23;
if (age >= 18) {
  console.log("eligible");
} else {
  console.log("not eligible");
}

//================================== Activity 2 ==================================
console.log("\n>activity 2");
if (age >= 18) {
  console.log("eligible");
  if (age >= 21) {
    console.log("can drink");
  }
} else {
  console.log("not eligible");
}

//================================== Activity 3 ==================================
console.log("\n>activity 3");
const dayOfWeek = 4;
switch (dayOfWeek) {
  case 4:
    console.log("Thursday");
    break;
  default:
    console.log("Invalid Number");
    break;
}

const score = 80;
switch (score / 10) {
  case (8):
    console.log("Great");
    break;
  default:
    console.log("Invalid Number");
    break;
}

//================================== Activity 4 ==================================
console.log("\n>activity 4");

const num4 = 32;
const isEven = num4 % 2 == 0 ? true : false;
console.log("isEven", isEven);

//================================== Activity 5 ==================================
console.log("\n>activity 5");

const year = 2024;
// divisible by 4 but not 100 (or) divisibly by 400
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

console.log('isLeapYear', isLeapYear);
