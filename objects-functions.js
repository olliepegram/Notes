let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

let otherBook = {
  title: 'A Peoples History',
  author: 'Howard Zinn',
  pageCount: 723
}

let getSummary = function(book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`
  }
}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);

let conversion = (fahrenheit) => {
  let celsius = Math.floor((fahrenheit - 32) * 5/9);
  let kelvin = Math.floor((fahrenheit + 459.67) * 5/9);
  return {
    celsius: `F to C is ${celsius}`,
    kelvin: `F to K is ${kelvin}`
  }
}

let printConversion = conversion(89);
console.log(printConversion);
