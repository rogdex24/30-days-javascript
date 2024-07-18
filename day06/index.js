//================================== Activity 1 ==================================
console.log('\n>activity 1')

const arr = [1,2,3,4,5]
console.log('arr', arr);

console.log(arr[0], arr[arr.length - 1]);


//================================== Activity 2 ==================================
console.log('\n>activity 2')

arr.push(8);
console.log('push', arr)

arr.pop()
console.log('pop ', arr)

arr.shift()
console.log('shift', arr)

arr.unshift(1)
console.log('unshift', arr)


//================================== Activity 3 ==================================
console.log('\n>activity 3')

const doubled = arr.map((ele) => ele * 2)
console.log('doubled', doubled);

const even = arr.filter((ele) => ele % 2 == 0)
console.log('even', even);

const sum = arr.reduce((acc, ele) => acc + ele, 0)
console.log('sum', sum);



//================================== Activity 4 ==================================
console.log('\n>activity 4')

for (const ele of arr) {
  console.log(ele);
}

console.log('\n')
arr.forEach((ele) => {
  console.log(ele);
})


//================================== Activity 5 ==================================
console.log('\n>activity 5')

const matrix = [[0,4],[3,2]]

console.log(matrix[0][1]);


