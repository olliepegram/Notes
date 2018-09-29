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

let getSummary = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSumary: `${book.title} is ${book.pageCount} pages long`
  }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.summary)

let convert = function (fah) {
  return {
    fah: fah,
    kelvin: (fah + 459.67) * (5 / 9),
    celcius: (fah - 32) * (5 / 9)
  }
}

let printConvert = convert(32)

console.log(printConvert)
