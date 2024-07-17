//================================== Activity 1 ==================================
console.log('\n>activity 1')

function isEvenOrOdd(num) {
  if (num % 2 == 0) {
    return 'even';
  } else {
    return 'odd';
  }
}
console.log(isEvenOrOdd(4));

const square = (num) => {
  return num * num;
}

console.log(square(4));


//================================== Activity 2 ==================================
console.log('\n>activity 2')

const max = (num1, num2) => {
  if (num1 >= num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(max(3,5));

function concat(str1, str2) {
  return str1 + str2;
}

console.log(concat("hello", "world"))


//================================== Activity 3 ==================================
console.log('\n>activity 3')

const sum = (a, b) => {
  return a + b;
}
console.log(sum(1,2));

const contains = (char, str) => {
  return str.includes(char);
}

console.log(contains('e', 'hello'));


//================================== Activity 4 ==================================
console.log('\n>activity 4')

const multiply = (a, b=2) => {
  return a * b;
}
console.log(multiply(3));

const greet = (name='human', age = 18) => {
  return `Hello ${name}, you are ${age} years old`; 
}
console.log(greet("Abu", 23))


//================================== Activity 5 ==================================
console.log('\n>activity 5')

const repeat = (func, num) => {
  for (let i=0; i < num; i++) {
    console.log(func());
  }
}

repeat(greet, 2);

const apply = (func1, func2, val) => {
  const res = func1(val);
  const final= func2(res);
  return final;
}

console.log(apply(square, multiply, 5));
