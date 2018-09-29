let greetUser = function () {
  console.log("HEY BITCh");
}

greetUser();

let square = function (num) {
  let result = num * num;
  return result;
}

let value = square(3);
console.log(value);

let convertFarenheitToCelcius = function(temp) {
  let celcuis = (temp - 32) * 5 / 9;
  return celcuis;
}

let tempOne = convertFarenheitToCelcius(32);
let tempTwo = convertFarenheitToCelcius(68);

console.log(tempOne);
console.log(tempTwo);
