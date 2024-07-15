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

const num5 = 2024;
let isLeapYear = false;
if (num5 % 4 == 0) {
  if (num5 % 100 == 0 && num5 % 400 == 0) { 
      isLeapYear = true
  } else {
    isLeapYear = true;
  }
}
console.log('isLeapYear', isLeapYear);
