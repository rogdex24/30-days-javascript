//================================== Activity 1 ==================================
console.log("\n>activity 1");
const name = "Jonas";
const age = "39";
const templateString = `${name}, ${age} years old`;
console.log(templateString);

const multiLineString = `yes
this
has 
multi lines
`;
console.log(multiLineString);

//================================== Activity 2 ==================================
console.log("\n>activity 2");
const array = [1, 2, 3, 4, 5];

const [zeroth, first, ...rest] = array;
console.log(zeroth, first, rest);

const book = {
  title: 'Remain Nameless',
  year: 2021,
  author: 'naa savu nen sastha'
}
const {title, year, ...restOfObj} = book;
console.log(title, year, restOfObj);

//================================== Activity 3 ==================================
console.log("\n>activity 3");

const newArray = [...array, 'a', 'b', 'c' , 'd'];
console.log('newArray', newArray);

const daFunction = (one, two, ...idk) => {
  const idksum = idk.reduce((acc, ele) => acc += ele, 0)
  return one + two + idksum;
}
console.log(daFunction(1, 2, 3, 4, 5));


//================================== Activity 4 ==================================
console.log("\n>activity 4");

const newfunc = (a, b=1) => {
  return a * b;
}
console.log(newfunc(2,2));
console.log(newfunc(2));
 

//================================== Activity 5 ==================================
console.log("\n>activity 5");

const firstName = "Jane";
const lastName = "Doe";
const zage = 25;
const dynamicKey = "fullName";

const person = {
    firstName,
    lastName,
    zage,
    [dynamicKey]: `${firstName} ${lastName}`,
    greet() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.zage} years old.`);
    }
};

console.log(person);
