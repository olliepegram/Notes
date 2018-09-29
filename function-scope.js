let convertFarenheitToCelcius = function(temp) {
  let celcuis = ((temp - 32) * 5) / 9;

  if (celcuis <= 0) {
    let isFreezing = true;
  }

  return celcuis;
};

let tempOne = convertFarenheitToCelcius(32);
let tempTwo = convertFarenheitToCelcius(68);

console.log(tempOne);
console.log(tempTwo);
