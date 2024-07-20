//================================== Activity 1 ==================================
console.log('\n>activity 1')

const book = {
  title: 'JavaScript: The Good Parts',
  author: 'Douglas Crockford',
  year: 1998
}

console.log(book);

console.log(book.title);
console.log(book.author)


//================================== Activity 2 ==================================
console.log('\n>activity 2')

book.about = function() { return `${this.title} by ${this.author}` }
console.log(book.about());
// JavaScript: The Good Parts by Douglas Crockford

book.updateYear = function(year) { this.year = year};
book.updateYear(2003);
console.log(book);



//================================== Activity 3 ==================================
console.log('\n>activity 3')
const library = {
    name: 'Da Library',
    books: [
            {
              title: 'JavaScript: The Good Parts',
              author: 'Douglas Crockford',
              year: 1998
            }, {
              title: 'Java: A connondrum',
              author: 'Da Koffee ',
              year: 1999
            }]
}
console.log(library.name);
for (const book of library.books) {
  console.log(book.title);
}


//================================== Activity 4 ==================================
console.log('\n>activity 4')

book.getDetails = function () {
  return `${this.title}, ${book.year}`
}

console.log(book.getDetails());


//================================== Activity 5 ==================================
console.log('\n>activity 5')

for (const key in book) {
  console.log(key,':',book[key]);
}

console.log(Object.keys(book))

console.log(Object.values(book))
