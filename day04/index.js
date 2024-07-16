//================================== Activity 1 ==================================
console.log('\n>activity 1')
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log('---\n')

for (let i = 1; i <= 10; i++) {
  console.log(5 * i);
}

//================================== Activity 2 ==================================
console.log('\n>activity 2')

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log('sum', sum);

console.log('---\n')
let i = 10;
while ( i > 0 ) {
  console.log(i);
  i--;
}

//================================== Activity 3 ==================================
console.log('\n>activity 3')

let j3 = 1
do {
  console.log(j3);
  j3++;
} while (j3 < 6);

console.log('---\n')
// calculate factor using do while loop 
let num = 5;
let factorial = 1;
let i3 = 1;
do {
  factorial *= i3;
  i3++;
} while (i3 <= num);
console.log("Factorial of", num, "is", factorial);





//================================== Activity 4 ==================================
console.log('\n>activity 4')
for (let i = 1; i<= 5; i++){
  let stars = '';
  for (let j = 1; j <= i; j++) {
    stars += '*';
  }
  console.log(stars);
}


//================================== Activity 5 ==================================
console.log('\n>activity 5')

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}
console.log('---\n')

for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    break;
  }
  console.log(i);
}

